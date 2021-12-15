const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults({noCors: true});
const port = process.env.PORT || 3200; // <== You can change the port
// const cors = require('cors')

server.use(middlewares);
server.use(router);
// server.use(cors)
server.listen(port);