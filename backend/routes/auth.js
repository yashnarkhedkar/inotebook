const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "YashNarkhedkar";

// Create a user using : POST "/api/auth/createuser". No Login required
router.post('/createuser', [
  body('name').isLength({ min: 3 }),
  body('password').isLength({ min: 5 }),
  body('email').isEmail(),
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Checking current email is alredy exist in DB or not 
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Email alredy exists" });
      }
      // Password Hashing with salt
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Creating a user
      user = await User.create({
        name: req.body.name,
        password: secPass, // Storing Hash Password
        email: req.body.email,
      })
      const data = {
        user: {
          id: user.id,
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });

      // Error 
    } catch (error) {
      console.log(error.message)
      res.status(500).json("Internal Server Error")
    }

  })

// Login User : POST "/api/auth/login".
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router 