// models/orderModel.js
import mongoose from 'mongoose';


const orderStatusEnum = ["Pending", "Cancelled","Processing","Delivered"];
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  billingAddress:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:orderStatusEnum,
    default:'Pending',
  },
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
