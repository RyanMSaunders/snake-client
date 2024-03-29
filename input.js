
// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {

switch (key) {
  case '\u0003':
    process.exit();
    break;
  case 'w':
    connection.write("Move: up");
    break;
  case 'a':
    connection.write("Move: left");
    break;
  case 's':
    connection.write("Move: down");
    break;
  case 'd':
    connection.write("Move: right");
    break;
  case 'g':
    connection.write("Say: Snake n' Bake");
    break;
  case 'e':
    connection.write("Say: keep on slitherin'");
    break;
  case 'f':
    connection.write("Say: where are my legs'");
    break;
}

};

module.exports = { setupInput };
