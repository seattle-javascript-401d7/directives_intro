const express = require('express');
const PORT = process.env.PORT || 5050;
express().use(express.static(__dirname + '/build')).listen(PORT, () => {
  console.log('server happy on port: ' + PORT);
});
