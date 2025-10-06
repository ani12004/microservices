const express = require('express');
const app = express();
const PORT = 3000;

app.get('/orders', (req, res) => {
  res.json([{ id: 1, product: 'Laptop', user: 'Alice' }]);
});

app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});
