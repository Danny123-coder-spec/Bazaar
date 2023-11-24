import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConfig";
import { createOrder } from "../../../../backend/controllers/OrderController";

const router = createRouter();

dbConnect();

router.post(createOrder);

export default router.handler();