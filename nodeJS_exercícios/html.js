npm install express

const express = require('express');
const app = express();

// Define o diretório onde estão os arquivos estáticos (como CSS, imagens, etc)
app.use(express.static('public'));

// Define o mecanismo de visualização como HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Define o diretório onde estão os arquivos de visualização (views)
app.set('views', './views');

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

node app.js

