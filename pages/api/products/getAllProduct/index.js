import {createRouter} from 'next-connect'
import dbConnect from '../../../../backend/config/dbConfig';
import { getAllProducts } from '../../../../backend/controllers/productController';

const router = createRouter();

dbConnect();

router.get(getAllProducts)

export default router.handler();