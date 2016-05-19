const express = require('express');
const PORT = process.env.PORT || 7777;

express().use(express.static(__dirname + '/build')).listen(PORT, () => {
  console.log('Server Running on port: ' + PORT);
});
