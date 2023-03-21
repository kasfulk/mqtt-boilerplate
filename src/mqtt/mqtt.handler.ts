import * as mqtt from 'mqtt';

export default class MQTTHandler {
  public topic = '/topic';

  public client = mqtt.connect(process.env.MQTT_URL, {
    clientId: 'webClient', keepalive: 1, clean: false,
  })

  public initializeMosquitto(): void {
    console.log(process.env.MQTT_URL);
    this.client.on('connect', () => {
      console.log('connected');
      this.client.subscribe(this.topic, (err) => {
        if (!err) this.client.publish(this.topic, 'Hello');
      });
    });

    this.client.on('message', (topic, message) => {
      console.log(topic, message.toString());
    });
  }
}
