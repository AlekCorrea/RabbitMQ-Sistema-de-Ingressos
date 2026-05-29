require("dotenv").config();
const amqp = require("amqplib");

async function enviarPedido(cliente) {

    const connection = await amqp.connect(
        `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@${process.env.RABBITMQ_HOST}`
    );

    const channel = await connection.createChannel();

    const fila = process.env.QUEUE_NAME;

    await channel.assertQueue(fila);

    channel.sendToQueue(
        fila,
        Buffer.from(JSON.stringify(cliente))
    );

    console.log("Pedido enviado:", cliente.nome);

    setTimeout(() => {
        connection.close();
    }, 500);
}

module.exports = enviarPedido;