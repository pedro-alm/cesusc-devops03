const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/index', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando! Acesse: http://localhost:${PORT}/index`);
});