require("dotenv").config();
const amqp = require("amqplib");

async function consumir() {

    const connection = await amqp.connect(
        `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@${process.env.RABBITMQ_HOST}`
    );

    const channel = await connection.createChannel();

    const fila = process.env.QUEUE_NAME;

    await channel.assertQueue(fila);

    console.log("Aguardando pedidos...");

    channel.consume(fila, (msg) => {

        const cliente = JSON.parse(msg.content.toString());

        console.log(`Ingresso reservado para ${cliente.nome}`);

        setTimeout(() => {

            console.log(`Compra confirmada: ${cliente.nome}`);

            channel.ack(msg);

        }, 3000);

    });

}

consumir();