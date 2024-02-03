const  User  = require('../models/user')
const bcrypt = require('bcrypt');


exports.userSignup = async (req,res) => {
    const {fullName, email, password, phoneNumber, confirmPassword } = req.body;
    try {
      if(password !== confirmPassword){
        return res.status(409).json({ error: 'Password does not match' });
      }
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ error: 'Email is already registered' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({full_name:fullName, email, password: hashedPassword, phone_number:phoneNumber });
      await newUser.save(); 
      res.status(200).json({ success: true, user: newUser });
    } catch (error) {
        res.status(404).json({ error: 'Unauthorized User' });
    }
};

exports.userLogin = async (req,res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
          return res.status(401).json({ error: 'User not found' });
        }
        const isPasswordValid  = await bcrypt.compare(password, existingUser.password)
        if(isPasswordValid ){
            res.status(200).json({ success: true, existingUser: existingUser });
        }
        else {
            return res.status(401).json({ error: 'Password or email is incorrect' });
          }
    } catch (error) {
          return res.status(500).json({ error: 'Internal server error' });
    }
};