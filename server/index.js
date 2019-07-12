const mqttServer = require("mqtt-server");

const servers = mqttServer(
	{
		mqtt: "tcp://localhost:1883",
		mqttws: "ws://localhost:1884",
	},
	{
		emitEvents: true, // default
	},
	client => {
		console.log("client connected!");
		// console.log(client)
		client.connack({
			returnCode: 0,
		});
		client.on("data", data => {
      console.log("got data: ");
      console.log(data);
      client.puback({messageId:data.packetId, ...data})
    });
    

    client.on("error", err => {
      console.log(err);
    });
	},
);

servers.listen(_ => {
	console.log("listening!");
});

servers.close(_ => {
	console.log("close!");
});
