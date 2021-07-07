const express = require('express');
express().use(express.static(__dirname + '/build')).listen(5000, () => process.stdout.write('Express is servering you on 5000'));
