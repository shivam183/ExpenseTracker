const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,'Please Provide UserID']
    },
    text:{
        type:String,
        trim:true,
        required:[true, 'Please add some text']
        
    },
    amount:{
        type:Number,
        required:[true, 'Please Enter a Positive or Negative Number']
    },
    
    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports=mongoose.model('Transaction',TransactionSchema);