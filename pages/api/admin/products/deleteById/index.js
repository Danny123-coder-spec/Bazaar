import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConfig";
import { deleteProductById } from "../../../../backend/controllers/productController";

const router = createRouter();

dbConnect();

router.delete(deleteProductById);

export default router.handler();
