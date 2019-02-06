consoe.log('here we use middleware')

const server = require('./server')

delete server

// the server can't throw exceptions if we delete it. it is that simple
