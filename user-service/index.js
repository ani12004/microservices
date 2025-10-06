const express = require('express');
const app = express();
const PORT = 3000;

app.get('/users', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Users</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f0f2f5; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 50px auto; }
        .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        h1 { color: #333; text-align: center; }
        ul { list-style: none; padding: 0; }
        li { padding: 10px; background: #f9f9f9; margin: 5px 0; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="card">
          <h1>Users</h1>
          <ul>
            <li>Alice</li>
            <li>Bob</li>
          </ul>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`User service running on port ${PORT}`));
