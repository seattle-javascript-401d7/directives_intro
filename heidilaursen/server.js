const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'))
  .listen(5000, () => process.stdout.write('server up on 5000'));
