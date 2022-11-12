const box = require ('../models/index');

const postUsers = async(req, res) => {
    const {email, password} = req.body;
    try {
        const emailExists = await box.user.findOne({ where: { email: email } });
        if (emailExists ) {
            res.status(200).json("Email already registered")
        }
        else {
            const variable = await box.user.create({email: email, password: password});
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
        if (!emailExists) {
            res.status(200).json("Please register")
        }
        else {
            res.status(201);
            res.json();
        }
    } catch (error) {
        res.status(500);
        console.log('error in loginUsers: ', error);
    }
}
module.exports = { postUsers, loginUser };