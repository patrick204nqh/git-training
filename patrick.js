const hi = require('./robert')
const dev = require('./db.json')

console.log("hello, world")
dev.map(d => hi(d))