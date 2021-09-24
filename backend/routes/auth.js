const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt=require('bcryptjs')
const jwt=require("jsonwebtoken")
const  JWT_SECRET="AriyoIS@KinddaGenius?"

//Create a user using POST: "/api/auth/createuser".  Doesn't require login.
router.post(
  "/createuser",
  [
    body("name", "Enter a name more than 3 words").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be more than 5 words").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry A User with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10)

      const secPass=await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data={
        user:{
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json ({authToken});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured, Log: "+error.message);
    }
  }
);

module.exports = router;
