async function comprar() {

    const nome = document.getElementById("nome").value;

    const resposta = await fetch("/comprar", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            nome
        })

    });

    const dados = await resposta.json();

    document.getElementById("resultado").innerHTML =
        dados.mensagem;

}