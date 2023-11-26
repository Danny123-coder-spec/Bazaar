import {createRouter} from 'next-connect';
import dbConnect from '../../../../backend/config/dbConfig';
import { getaCategory, updateCategory } from '../../../../backend/controllers/categoryController';

const router = createRouter();

dbConnect();

router.get(getaCategory);
router.put(updateCategory);


export default router.handler();