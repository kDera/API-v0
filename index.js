// index.js
const express = require('express');
const app = express();

// Porta em que o servidor vai escutar
const port = 3000;

// Rota básica
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Exemplo de rota para obter uma lista de itens
app.get('/api/items', (req, res) => {
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
    res.json(items);
  });
  
  // Exemplo de rota para obter um item específico por ID
  app.get('/api/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);
  
    if (item) {
      res.json(item);
    } else {
      res.status(404).send('Item não encontrado');
    }
  });

  app.use(express.json());
//validatoin git
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});



