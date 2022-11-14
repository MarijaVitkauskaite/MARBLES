const box = require ('../models/index');

const userId = 1;

const registerUser = async(req, res) => {
    const {email, password} = req.body;
    try {
        const emailExists = await box.user.findOne({ where: { email: email } });
        if (emailExists ) {
            res.status(200).json("Email already registered")
        }
        else {
            await box.user.create({email: email, password: password});
            res.status(201);
            res.json('success');
        }
    } catch (error) {
        res.status(500);
        console.log('error in postUsers: ', error);
    }
}

const loginUser = async(req, res) => {
  const {email, password} = req.body;
  try {
    const emailExists = await box.user.findOne({ where: { email: email } });
    const isPasswordRight = emailExists.password === password    
    if (emailExists && isPasswordRight) {
      res.status(201);
      res.json('success');
    }
    else {
      res.status(200).json("Please register")
    }
  } catch (error) {
    res.status(500);
    console.log('error in loginUsers: ', error);
  }
}
module.exports = { registerUser, loginUser };