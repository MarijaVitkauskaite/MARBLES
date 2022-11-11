const box = require ('../models/index');

const postUsers = async(req, res) => {
    const {email, password} = req.body;
    try {
        const emailExists = await box.user.findOne({ where: { email: email } });
        if (emailExists ) {res.json("Email already registered")}
        else {
            const variable = await box.user.create({email: email, password: password});
            console.log(variable);
        }
        res.status(201);
        res.send();
    } catch (error) {
        res.status(500);
        console.log('error in postUsers: ', error);
    }
}

const loginUser = async(req, res) => {
    const {email, password} = req.body;
    try {
        // extract the user data from the table user based on the email, 
        // check if it's the same, if not -> could not log in
    } catch (error) {
        
    }
}
module.exports = { postUsers, loginUser };