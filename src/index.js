const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

const app = express();

const Signup = require("./controllers/signup")

// Middleware
app.use(bodyParser.json());

// Router
app.use(Signup)

app.get("/", (req, res) => {
  res.send("Welcome to our home!")
})


app.listen(PORT, () => {
  console.log(`server is connected on port ${PORT}`);
});
