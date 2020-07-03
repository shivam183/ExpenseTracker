const router = require('express').Router();
const passport = require('passport');
const { getTransaction, addTransaction, deleteTransaction } = require('../controller/transactions.controller')


router.route('/')
    .post(passport.authenticate('jwt', { session: false }), addTransaction)


router.route('/:id')
    .get(passport.authenticate('jwt', { session: false }), getTransaction)
    .delete(passport.authenticate('jwt', { session: false }), deleteTransaction)

module.exports = router