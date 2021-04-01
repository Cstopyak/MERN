const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
// const stripe = require("stripe")
// ("sk_test_51IRgq6ASDxwkWwBE6bjRn6zYT4t21DYktWVhziAMnxkrFWijoCDExsrc4LmoIbHYJNmZetT9AK8mFwdTI4RM06cB00M8dNcoRA");
const { v4: uuidv4 } = require('uuid');
const { default: Stripe } = require("stripe");

app.use(cors());



require("./server/config/mongoose.config");


app.use(express.json(), express.urlencoded({extended: true}));

// bring routes in with the project.
require("./server/routes/product.routes")(app);


app.get("/", (req, res) =>{
    res.send("Working wWrking Working!")
});

app.post("/payment", (req, res) =>{
    const { product, token } = req.body;
    console.log("Got Product", product);
    console.log("Got Price", product.price);
    const idempontencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer =>{
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: product.name,
            shipping:{
                name: token.card.name,
                
            }
        }, {idempontencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})
app.listen(port, () => console.log(`ready to go on port ${port}`));