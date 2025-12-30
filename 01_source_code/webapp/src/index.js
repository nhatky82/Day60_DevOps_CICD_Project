// index.js
console.log("Hello CI/CD Project - Day 55");

// Thêm server đơn giản để giữ container chạy
const express = require('express');
const app = express();
const PORT = 3003;

app.get('/', (req, res) => {
  res.send('Hello CI/CD Project - Day 55');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

