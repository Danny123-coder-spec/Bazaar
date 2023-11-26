import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConfig";
import { getaProduct, updateProductById } from "../../../../backend/controllers/productController";


const router = createRouter();

dbConnect();

router.put(updateProductById)
router.get(getaProduct)

export default router.handler();