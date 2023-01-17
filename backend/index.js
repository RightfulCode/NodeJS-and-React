const express = require('express');
const cors = require("cors");
require("./db/config");
const app = express();
const User = require("./db/users");

app.use(cors());
app.use(express.json());

app.post("/register", async (req,resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
})

app.listen(5000)