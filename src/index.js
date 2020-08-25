const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to our home!")
})


app.listen(PORT, () => {
  console.log(`server is connected on port ${PORT}`);
});
