const app = require('express')()
const http = require('http').Server(app)
const path = require('path')
const io = require('socket.io')(http)

app.get('/', function (req, res) {
  res.sendFile(path.join(`${__dirname}/index.html`))
})

http.listen(8000, function () {
  console.log('http server started on port 8000')
})

io.on('connection', function (socket) {
  console.log('client connection received')

  socket.emit('sendToClient', {Hello: 'world'})

  socket.on('receivedFromClient', function (data) {
    console.log(data)
  })
})
