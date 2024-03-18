
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Name: RMS");
    // console.log("Successfully connected to game server");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000);

    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 1050);

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1100);
  
    


  });

  return conn;
};


module.exports = connect;

