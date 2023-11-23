import  {createRouter} from 'next-connect';
import dbConnect from '../../../../backend/config/dbConfig';
import { updateProductById } from '../../../../backend/controllers/productController';

const router = createRouter();

dbConnect();

router.put(updateProductById);

export default router.handler();