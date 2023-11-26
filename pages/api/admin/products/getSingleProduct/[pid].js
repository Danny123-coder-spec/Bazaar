<<<<<<< HEAD:pages/api/admin/products/getSingleProduct/[pid].js
import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConfig";
import { getaProduct, updateProductById } from "../../../../backend/controllers/productController";


const router = createRouter();

dbConnect();

router.put(updateProductById)
router.get(getaProduct)

=======
import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConfig";
import { deleteProductById, getaProduct, updateProductById } from "../../../../backend/controllers/productController";


const router = createRouter();

dbConnect();

router.put(updateProductById)
router.get(getaProduct)
router.delete(deleteProductById);

>>>>>>> f9875e897ba98cd1937bbfe882cdf2859eca5743:pages/api/products/getSingleProduct/[pid].js
export default router.handler();