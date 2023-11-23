import {createRouter} from 'next-connect'
import { getAllProducts } from '../../../../backend/controllers/productController';
import dbConnect from '../../../../backend/config/dbConfig';

const router = createRouter();

dbConnect();

router.get(getAllProducts)

export default router.handler();