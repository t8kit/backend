const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema ({

         //idOrder: { type: ObjectId, reqired: true},
         idUsername: { type: String, reqired: true},
         idProduct: { type: String, reqired: true},
         dateEntry: { type: Date},
         dateExit: { type: Date},
         //productList: { type: Array<cant  {type: Integer, reqired: true},
         //                           price {type: Integer, reqired: true},
         //                           descrip{type String, reqired: true,}
         //                           >, reqired: true},
         status: { type: String, default: "Sin retirar"},
         price: { type: Number, reqired: true},
         cant: { type: Number, reqired: true},
         total: { type: Number, reqired: true}


   
},
{
    timestamps: true
});

module.exports= mongoose.model('Order', OrderSchema);
