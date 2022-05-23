const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require('body-parser')
app.use(bodyParser.json())



const usersRoute = require('./routes/routes');
app.use(usersRoute);

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));