## Kafka with Node.js Demo

This project demonstrates a basic Kafka producer-consumer implementation using Node.js and Docker.

## PREREQUISITES
- Docker and Docker Compose
- Node.js

## QUICK START

1. Install dependencies:
   npm install

2. Start services:
   docker-compose up -d

3. Run producer:
   node producer.js

4. Run consumer (in another terminal):
   node consumer.js

## KEY CONFIGURATION

- Broker: localhost:9092
- Topic: test-topic
- Consumer Group: test-group

## DOCKER MANAGEMENT COMMANDS

- docker-compose up -d    - Start services
- docker-compose down     - Stop services
- docker-compose logs -f  - View logs
- docker ps               - Check running containers
- docker-compose down -v  - Remove containers and volumes

## TROUBLESHOOTING

Connection issues:
- Verify containers are running with 'docker ps'

## Reset environment:
1. docker-compose down
2. docker volume prune
3. docker-compose up -d

## CLEAN UP
- docker-compose down -v --remove-orphans
