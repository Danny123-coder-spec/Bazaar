import {createRouter} from 'next-connect';
import dbConnect from '../../../../backend/config/dbConfig';
import { deleteaCategory, getaCategory, updateCategory } from '../../../../backend/controllers/categoryController';

const router = createRouter();

dbConnect();

router.get(getaCategory);
router.put(updateCategory);
router.delete(deleteaCategory)


export default router.handler();