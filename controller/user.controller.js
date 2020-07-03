const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

exports.authenticate = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password)

            if (isMatch) {
                const token = jwt.sign(user.toJSON(), process.env.SECRET, {
                    expiresIn: 604800
                })

                return res.status(200).json({
                    success: true,
                    data: 'JWT ' + token
                })
            }
            else {
                return res.status(401).json({
                    success: false,
                    error: 'Authentication Failed'
                })
            }
        }
        else {
            return res.status(404).json({
                success: false,
                error: 'Authentication failed'
            })
        }
    } catch (error) {
        console.log(error)
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        }
        return res.status(500).json({
            success: false,
            error: `Server Error`
        })
    }

}


exports.register = async (req, res, next) => {
    try {
        let newUser = req.body
        let user = await User.findOne({ email: newUser.email })
        if (!user) {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(newUser.password, salt)
            newUser.password = hash;
            console.log(newUser)
            const user = await User.create(newUser)
            return res.status(201).json({
                success: true,
                data: user
            })
        }
        else {
            return res.status(200).json({
                success: false,
                error: `Email Already Exist`
            })
        }

    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        }
        else {
            return res.status(500).json({
                success: false,
                error: `Server Error`
            })
        }
    }
}