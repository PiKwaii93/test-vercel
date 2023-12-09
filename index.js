// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

const cors = require("cors");
// app Use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 4000;

require("express-async-errors");
const io = require("socket.io")(4080, {
  cors: {
    origin: "http://localhost:5173",
  },
});

/* const mysqlPool = require("./database/config"); */

// Middlewares
/* const usersRoutes = require("./controllers/users.controller");
const conversationsRoutes = require("./controllers/conversations.controller");
const messagesRoutes = require("./controllers/messages.controller"); */

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Routes
app.use("/home", home);

app.listen(port, () => console.log(`Listening to port ${port}`));
