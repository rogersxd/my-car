const connect = require('connect');
const serveStatic = require('serve-static');
const port = 3333;

connect()
    .use(serveStatic(__dirname))
    .listen(port, () => console.log(`Server running on ${port}...`));