# 🎟️ Sistema de Ingressos para Shows com RabbitMQ

## 📌 Descrição

Este projeto simula um sistema de venda de ingressos para shows utilizando RabbitMQ como ferramenta de mensageria.

O cenário representa uma situação real onde milhares de pessoas tentam comprar ingressos simultaneamente. Em vez de processar todas as solicitações diretamente no banco de dados, os pedidos são enviados para uma fila e processados gradualmente, evitando sobrecarga no sistema.

O projeto foi desenvolvido em Node.js e utiliza RabbitMQ executando em Docker.

---

## 🎯 Objetivo

Demonstrar os conceitos de:

- Mensageria
- Filas
- Processamento assíncrono
- Desacoplamento entre aplicações
- RabbitMQ
- Docker

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express
- RabbitMQ
- Docker
- HTML
- CSS
- JavaScript

---

## 📂 Estrutura do Projeto

```txt
sistema-ingressos-rabbitmq/
│
├── producer.js
├── consumer.js
├── server.js
├── package.json
├── docker-compose.yml
│
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## ⚙️ Funcionamento do Sistema

### Produtor (Producer)

Representa os clientes tentando comprar ingressos.

Quando o usuário preenche seu nome e clica em **Entrar na Fila**, uma mensagem é enviada para o RabbitMQ contendo os dados da compra.

---

### RabbitMQ

Recebe e armazena as mensagens na fila:

```txt
fila_ingressos
```

As mensagens permanecem na fila até que um consumidor esteja disponível para processá-las.

---

### Consumidor (Consumer)

Responsável por processar os pedidos recebidos.

Para cada mensagem recebida:

1. Lê os dados do cliente.
2. Simula a reserva do ingresso.
3. Confirma a compra.
4. Remove a mensagem da fila.

---

## 🚀 Como Executar

### 1. Clonar o projeto

```bash
git clone <url-do-repositorio>
```

---

### 2. Instalar dependências

```bash
npm install
```

---

### 3. Iniciar RabbitMQ com Docker

```bash
docker-compose up -d
```

Verificar containers:

```bash
docker ps
```

---

### 4. Iniciar o servidor web

```bash
node server.js
```

Servidor disponível em:

```txt
http://localhost:3000
```

---

### 5. Iniciar o consumidor

Em outro terminal:

```bash
node consumer.js
```

---

## 🌐 Interface Web

A aplicação pode ser acessada pelo navegador:

```txt
http://localhost:3000
```

O usuário informa seu nome e entra na fila de compra de ingressos.

---

## 📊 Painel Administrativo RabbitMQ

O RabbitMQ possui um painel web para monitoramento em tempo real.

Acesso:

```txt
http://localhost:15672
```

Login:

```txt
Usuário: admin
Senha: admin
```

No painel é possível visualizar:

- Filas
- Consumidores
- Mensagens prontas
- Mensagens processadas
- Conexões

---

## 🧪 Teste de Desacoplamento

### Passo 1

Desligar o consumidor:

```bash
CTRL + C
```

---

### Passo 2

Enviar 5 solicitações pela interface web.

Exemplo:

```txt
João
Maria
Pedro
Ana
Carlos
```

---

### Passo 3

Abrir o painel RabbitMQ:

```txt
http://localhost:15672
```

Acessar:

```txt
Queues → fila_ingressos
```

Verificar:

```txt
Ready: 5
```

Isso indica que existem cinco mensagens aguardando processamento.

---

### Passo 4

Iniciar novamente o consumidor:

```bash
node consumer.js
```

As mensagens serão processadas em sequência.

Exemplo:

```txt
Ingresso reservado para João
Compra confirmada: João

Ingresso reservado para Maria
Compra confirmada: Maria

Ingresso reservado para Pedro
Compra confirmada: Pedro
```

---

## 📈 Benefícios da Solução

- Evita sobrecarga no banco de dados.
- Processamento assíncrono.
- Maior escalabilidade.
- Maior tolerância a falhas.
- Desacoplamento entre produtor e consumidor.
- Melhor experiência em eventos de grande demanda.

---

## 🎤 Exemplo Real

Quando um show internacional abre as vendas, milhares de usuários tentam comprar ingressos simultaneamente.

Sem uma fila:

- O servidor pode travar.
- O banco de dados pode ficar sobrecarregado.
- Usuários podem perder solicitações.

Com RabbitMQ:

- Os pedidos entram em uma fila organizada.
- Nenhuma solicitação é perdida.
- O sistema processa os pedidos conforme sua capacidade.

---

## 👨‍💻 Autor

Projeto desenvolvido para a disciplina de Sistemas Distribuídos / Mensageria utilizando RabbitMQ e Node.js.
