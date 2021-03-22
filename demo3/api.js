const express = require('express');

const server = express();

// server.get('/api/users', (req, res) => {
server.get('/users', (req, res) => {
  res.json({id: 1, name: 'zs'});
})

server.listen(3000, () => {
  console.log('running')
})