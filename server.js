const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const socket = require("socket.io")
const io = socket(server)

server.listen(5000, () => console.log('server is running on port 5000'))

