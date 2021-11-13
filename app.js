const express = require("express");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use("/public", express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render("maze")
})


app.listen(process.env.PORT || 5000, function() {
  console.log("Server started on port 5000");
});