const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'], // this can be mentioned in docker file
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello from developer!' },
      { value: 'Kafka demo with NodeJs!' },
    ],
  });
  console.log('Messages sent successfully!');
  await producer.disconnect();
};

run().catch(console.error);
