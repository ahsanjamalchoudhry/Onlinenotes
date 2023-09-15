const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User'); // Correct the import statement
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');//for salt and hash
const jwt = require('jsonwebtoken');// for token gentraatimg in response to signup compeletion
const fetchuser=require('../middleware/fetchuser');

const JWT_SECRET="hello$ahsan%here@"

// create user: POST method to send data,  no auth is needed for this '/api/auth/creatuser'
router.post('/creatuser', [
    //validation on the input of the user
  body('name', 'Enter a valid Name').isLength({ min: 4 }),
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Password must be at least 8 Characters').isLength({ min: 8 })
], async (req, res) => {
  try {
    // If there are validation errors, return a Bad Request error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }
//adding salt in password for security
    const salt= await bcrypt.genSalt(10);
    const securepassword=await bcrypt.hash(req.body.password,salt);

    // Create a new user
    const newUser = new User({
      name: req.body.name,
      password: securepassword,
      email: req.body.email,
    });

    const data ={ // picking id from data base and use as data for JWT function  
        User:{
            id:User.id

        }
    }
    const authtoken= jwt.sign(data,JWT_SECRET);// secret token to show the user on new sign up
    console.log(authtoken);

    const savedUser = await newUser.save();
//saving the new user data 
    res.json({authtoken});
  } catch (error) {
    console.log(error.message);
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error ' });
  }
});



router.post('/login', [
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Password cannot be empty').exists(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Please try with valid credentials' });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(400).json({ error: 'Please try with valid credentials' });
    }

    const data = {
      User: {
        id: user.id
      }
    };

    const authtoken = jwt.sign(data, JWT_SECRET);

    res.json({ authtoken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//route:03 get login to the user setail : POST:'/api/auth/getuser' ////////
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id; // Correctly accessing the user ID from the payload
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
module.exports = router;