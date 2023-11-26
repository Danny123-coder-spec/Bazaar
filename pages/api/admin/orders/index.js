import nc from 'next-connect';
import dbConnect from '../../../backend/config/dbConfig';
import { createOrder, getAllOrders } from '../../../backend/controllers/OrderController';


const handler = nc();

dbConnect();

handler.post(createOrder).get(getAllOrders)

export default handler;