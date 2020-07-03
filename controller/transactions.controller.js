const Transaction = require('../models/Transaction')

exports.getTransaction = async (req, res, next) => {
    try {
        const transactions = await Transaction.find({userId:req.params.id});
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Server Error`
        })
    }
}

exports.addTransaction = async (req, res, next) => {
    try {

        const { text, amount } = req.body
        const transaction = await Transaction.create(req.body)

        return res.status(201).json({
            success: true,
            data: transaction
        })

    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val=>val.message);
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


exports.deleteTransaction = async (req, res, next) => {
    try {

        const transcation = await Transaction.findById(req.params.id)
        if(!transcation){
            return res.status(404).json({
                success: false,
                error: `No transaction found!`
            })
        }

        await transcation.remove();

        return res.status(200).json({
            success:true,
            data: transcation
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Server Error`
        })
    }
}
