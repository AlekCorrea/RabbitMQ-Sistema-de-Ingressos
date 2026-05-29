require("dotenv").config();
const express = require("express");
const enviarPedido = require("./producer");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/comprar", async (req, res) => {

    await enviarPedido(req.body);

    res.json({
        sucesso: true,
        mensagem: "Você entrou na fila!"
    });

});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});