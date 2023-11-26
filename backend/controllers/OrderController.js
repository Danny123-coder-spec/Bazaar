// controllers/orderController.js
import { constrainedMemory } from 'process';
import Order from '../models/OrderModel'

// Create a new order
const createOrder = async (req, res) => {
  try {
    const {user, products, billindAddress, status, totalAmount} = req.body;
    const newOrder = new Order(req.body);
    res.json({message:'Order successfully created', order:newOrder, status:201})
    await newOrder.save();
    console.log(newOrder);

  } catch (error) {
    res.json({message:'Internal Server Error', status:500})
    console.log(error);
    
  }
};

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const getAllOrders = await Order.find();
    res.json(getAllOrders);
  } catch (error) {
    res.status(500).json({message:'Something went wrong!Please try again'})
    throw new Error(error);
  }
};

// Update An Order

const updateAnOrder = async(req, res) => {
  const id = req?.query?.pid
  console.log(id)
  const {user, products, billindAddress, status, totalAmount} = req.body;
  try {
    const updateOrder = await Order.findByIdAndUpdate(id,req.body,{ new: true });
    if (!updateOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(updateOrder);
    console.log(id);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server error" });
  }
}

// Delete an Order

const deleteOrder = async(req, res) => {
  const id = req?.query?.pid;
  console.log(id)
  try {
    const deleteOrder = await Order.findByIdAndDelete(id);
    res.json(deleteOrder);
    console.log(deleteOrder);
  } catch (error) {
    console.log(error);
    res.json({message:'Unable to delete an order', status:500})
  }
}

export { createOrder, getAllOrders, deleteOrder, updateAnOrder };
