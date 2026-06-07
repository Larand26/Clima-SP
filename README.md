# 🌤️ SP Weather Notifier

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

Uma automação leve e eficiente desenvolvida em Node.js e TypeScript que consome dados de previsão do tempo e envia um e-mail diário personalizado com o clima atual e a previsão para a cidade de São Paulo.

---

## 🎯 Objetivo

O projeto foi criado para simplificar o início do dia dos usuários, consolidando informações climáticas essenciais (temperatura, probabilidade de chuva e alertas) diretamente na caixa de entrada, evitando a necessidade de abrir aplicativos ou sites de terceiros.

---

## 🛠️ Tecnologias Utilizadas

- **Runtime:** [Node.js](https://nodejs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Agendamento:** [Node-Cron](https://github.com/node-cron/node-cron) (para agendar os disparos automáticos)
- **Envio de E-mails:** [Nodemailer](https://nodemailer.com/) (integração com serviço de SMTP)
- **Consumo de API:** Axios (para buscar os dados climáticos da região de São Paulo)

---

## ✨ Funcionalidades

- [ ] **Agendamento Customizado:** Execução automática configurada via expressão Cron (ex: toda manhã às 07:00).
- [ ] **Consumo de API de Clima:** Integração com serviços de meteorologia (ex: OpenWeatherMap, WeatherAPI ou HG Brasil).
- [ ] **Template de E-mail Dinâmico:** Construção de um layout HTML responsivo que muda de cor ou ícone dependendo do clima (ensolarado, chuvoso, nublado).
- [ ] **Lista de Destinatários:** Envio em massa ou personalizado para uma lista pré-configurada de e-mails.

---

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js instalado (v18 ou superior)
- Uma chave de API de algum serviço de clima (ex: OpenWeatherMap)
- Credenciais de um servidor SMTP (Gmail, SendGrid, Mailtrap, etc.)

### Passo a Passo

```bash
# 1. Clone o repositório
$ git clone [https://github.com/Larand26/Clima-SP.git](https://github.com/Larand26/Clima-SP.git)

# 2. Acesse a pasta do projeto
$ cd Clima-SP

# 3. Instale as dependências
$ npm install

# 4. Configure o arquivo .env (veja a seção abaixo)

# 5. Inicie a aplicação em modo de desenvolvimento
$ npm run dev
```
