require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(process.env.SECRET_KEY);

const app = express();
app.use(express.json());

app.get("/public-key", async (req, res) => {
  res.send({
    publishableKey: process.env.PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount * 100,
    currency: req.body.currency,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on localhost:${port}`));
