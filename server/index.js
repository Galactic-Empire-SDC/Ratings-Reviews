const express = require('express');

const app = express();
module.exports.app = app;

const PORT = 3333;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
