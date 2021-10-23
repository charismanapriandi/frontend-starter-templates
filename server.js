const liveServer = require('live-server')

const params = {
  port: 3000,
  host: "0.0.0.0",
  root: "./dist",
  open: false,
  file: "index.html",
}

liveServer.start(params)

