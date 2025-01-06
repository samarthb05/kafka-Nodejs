# Kafka + Node.js Example

This project demonstrates how to integrate **Kafka** with a **Node.js** application using the `kafkajs` library. It includes both a **Producer** and a **Consumer** to send and receive messages from a Kafka topic.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- **Docker** (to run Kafka and Zookeeper)
- **Node.js** (v14 or higher)
- **npm** or **yarn**

---

## Project Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Kafka with Docker**
   Use Docker to run Kafka and Zookeeper:

   ```bash
   docker-compose up -d
   ```

   This will start:

   - **Zookeeper** on port `2181`
   - **Kafka** on port `9092`

4. **Create Kafka Topic (Optional)**
   You can pre-create the topic `test-topic` using the command:

   ```bash
   docker exec -it kafka kafka-topics --create --topic test-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
   ```

   Alternatively, Kafka can auto-create the topic when the producer runs.

---

## Running the Application

1. **Start the Producer**

   - Run the producer script to send messages to Kafka:
     ```bash
     node producer.js
     ```

2. **Start the Consumer**

   - Run the consumer script to listen for messages:
     ```bash
     node consumer.js
     ```

3. **Expected Output**
   - Producer logs:
     ```bash
     Messages sent successfully!
     ```
   - Consumer logs:
     ```bash
     Waiting for messages!
     { value: 'Hello from developer!', partition: 0, offset: '0' }
     { value: 'Kafka demo with NodeJs!', partition: 0, offset: '1' }
     ```

---

## Dependencies

- [KafkaJS](https://kafka.js.org): A modern Kafka client for Node.js.
- Docker (for Kafka and Zookeeper containers).

---

## Troubleshooting

- **No Leader for Topic-Partition**: Wait for Kafka to stabilize or restart the setup:
  ```bash
  docker-compose restart
  ```
- **Consumer Not Receiving Messages**: Ensure the topic exists and has a valid leader:
  ```bash
  docker exec -it kafka kafka-topics --describe --topic test-topic --bootstrap-server localhost:9092
  ```
- **Adjusting Partitions**: Use the following command to describe your topic:
  ```bash
  docker exec -it kafka kafka-topics --describe --topic test-topic --bootstrap-server localhost:9092
  ```

---

## Author

Created by 
Samarth Bhokare.
