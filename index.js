const express = require('express');
const cors = require('cors');
require('dotenv').config();
const products =  require('./routes/products');
const cart =  require('./routes/cart');
const users =  require('./routes/users');
const {readdirSync} = require('fs');

const app = express();
app.use(cors());

console.log(readdirSync('./routes'));
readdirSync("./routes").map((file)=>app.use("/",require("./routes/"+file)));

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("Main Page");
});

app.get("/products", products);
app.get("/cart", cart);
app.get("/users", users);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
//npm start
//localhost:3010
//localhost:4000/products
//localhost:4000/cart
//localhost:4000/users