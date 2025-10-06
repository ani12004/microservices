const express = require('express');
const app = express();
const PORT = 3000;

app.get('/products', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Products</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: #eef6f9; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 50px auto; }
        .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        h1 { color: #1a73e8; text-align: center; }
        ul { list-style: none; padding: 0; }
        li { padding: 10px; background: #f1f5f9; margin: 5px 0; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="card">
          <h1>Products</h1>
          <ul>
            <li>Laptop</li>
            <li>Phone</li>
          </ul>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`Product service running on port ${PORT}`));
