const net = require("net");
const PORT = 15488;
const HOST = "127.0.0.1";

const dataHandler = require("./data_handler/data_handler");

console.log("starting NIOD_emulator");
const server = net.createServer(socket => {
  console.log(`New client from ${socket.remoteAddress}`);
  socket.on("data", data => {
    dataHandler.handleData(data);
  });
});

server.on("error", e => {
  if (e.code === "EADDRINUSE") {
    console.log("Address in use, retrying...");
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});

server.listen(PORT, HOST);
console.log(`Server started, listening on ${HOST}:${PORT}`);
