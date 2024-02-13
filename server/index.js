const express = require("express");
const router = require('./routes/routes')


const app = express();
const PORT = process.env.PORT || 8000
const cors=require('cors')


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));


app.use("/", router);
app.listen(PORT, function () {
  console.log("listening on port 8000!");
});