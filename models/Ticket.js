const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ticketschema= new Schema({
    matchNumber: {
        type:Number,
        required:true
    },
    roundNumber:{
        type:Number
    },
    dateUtc:{
        type:Date
    },
    location:{
        type:String
    },
    availability:{
        category1: {
            count: {type: Number , default: 20 ,min:0,max:20},
            price: Number
        },
        category2: {
            count: {type: Number , default: 20,min:0,max:20},
            price: Number
        },
        category3: {
            count: {type: Number , default: 20 ,min:0,max:20},
            price: Number
        }
    },    
    homeTeam:{
        type:String
    },
    awayTeam:{type:String},
    group: {type:String},
    pending_category1_count: {type: Number , default: 0 ,min:0 , max:20},
    pending_category2_count: {type: Number , default: 0 ,min:0,max:20},
    pending_category3_count: {type: Number , default: 0 ,min:0,max:20}
    


})
module.exports = mongoose.model('Ticket',ticketschema);

