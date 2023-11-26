import { createRouter } from "next-connect";
import addToCart from "../../../backend/controllers/cartItemController";
import dbConnect from "../../../backend/config/dbConfig";

const router = createRouter();

dbConnect();

router.post(addToCart);

export default router.handler();