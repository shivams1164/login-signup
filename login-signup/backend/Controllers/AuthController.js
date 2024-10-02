
const UserModel = require('../Models/User')
const bcrypt = require('bcrypt')
const signup = async (req, res) => {

    try {

        const { username, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User already exists, You can login', success: false });
        }
        const UserModel = new UserModel({ name, email, password });
        UserModel.password = await bcrypt.hash(password, 10);
        await UserModel.save();
        res.status(201)
            .json({
                message: 'Dignup successfully',
                success: true

            })

    } catch (err) {
        res.status(500)
        .json({
            message: 'Internal Server Error',
            success: false
        })
    }

}
module.exports = {
    signup
}