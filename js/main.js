const link = "https://www.freepik.com/free-vector/coffee-beans_7029960.htm?query=coffee%20bean%20cartoon%20position%3D4%20from%3Dview%20keyword%20track%20ais%20uuid%3D33717898-a480-4895-ca88e44d5cc5";

const queryIndex = link.indexOf("?");

const newLink = link.slice(0, queryIndex);

console.log(newLink); // https://www.freepik.com/free-vector/coffee-beans_7029960.htm
