const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://express-rest-shop:" +
  process.env.MONGO_ATLAS_PW +
  "@shop.gywsnm9.mongodb.net/?retryWrites=true&w=majority";

const server = http.createServer(app);

// eliminates soft error on server startup
mongoose.set("strictQuery", false);

// ensures mongo connection is successful
mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

// captures server connection errors
mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

startServer();
