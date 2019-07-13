const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", ack => {
	console.log("connected!");

	setInterval(_ => {
		client.publish("test", "Hello mqtt " + new Date().getTime());
	}, 3000);
});

client.on("error", err => {
	console.log(err);
});
