const router = require("express").Router();
const { Contact, validate } = require("../models/contact");

router.post("/createContact", async (req, res) => {
    const contact = await new Contact({ ...req.body}).save();            
    res.status(201).send({ status: true, message: "Contact created successfully" })
})

router.post("/getContacts", async (req, res) => {
    Contact.find({user: req.body.user})
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "No orders found in DB"
        });
      }
      res.json(order);
    });
})

module.exports = router;
