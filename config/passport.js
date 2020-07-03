const JwtStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const User = require('../models/User')
const { ExtractJwt } = require('passport-jwt')

module.exports = passport => {
    let opts = {
        jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
        secretOrKey: process.env.SECRET
    }
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            const user = await User.findOne({ _id: jwt_payload._id })
            if (user) {
                return done(null, user)
            }
            return done(null, false)

        } catch (error) {
            return done(error, false)
        }
    }))

}