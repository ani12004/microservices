const express = require('express');
const app = express();
const PORT = 3000;

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
