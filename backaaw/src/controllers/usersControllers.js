const User = require('../models/Users');
postSignup = async (req, res, next) => {
    //getting user data from request body
    const {idUser, firstName, lastName} = req.body;
    try {
        const user = new User({idUser, firstName, lastName});
        const result = await user.createUser();
        console.log(user)
        res.send(user);
    } catch (error) {
        //pass error to next()
        next(error);
    }
};
getUser = async (req,res,next ) => {
    const {idUser, firstName, lastName} = req.body;
    try {
        const user = new User({idUser, firstName, lastName});
        const result = await user.getUsers();
        res.send(result);
    } catch (error) {
        //pass error to next()
        next(error);
    }
};
module.exports = { postSignup,getUser};
