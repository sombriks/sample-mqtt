const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", ack => {
  console.log("connected!");
  // console.log(ack);
  client.subscribe("test", err => {
    console.log(err);
  });

  client.on("message", (topic, message) => {
    console.log(topic);
    // message is Buffer
    console.log(message.toString());
  });
});

client.on("error", err => {
  console.log(err);
});
