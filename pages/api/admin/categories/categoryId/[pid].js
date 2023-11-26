<<<<<<< HEAD:pages/api/admin/categories/categoryId/[pid].js
import {createRouter} from 'next-connect';
import dbConnect from '../../../../backend/config/dbConfig';
import { getaCategory, updateCategory } from '../../../../backend/controllers/categoryController';

const router = createRouter();

dbConnect();

router.get(getaCategory);
router.put(updateCategory);


=======
import {createRouter} from 'next-connect';
import dbConnect from '../../../../backend/config/dbConfig';
import { deleteaCategory, getaCategory, updateCategory } from '../../../../backend/controllers/categoryController';

const router = createRouter();

dbConnect();

router.get(getaCategory);
router.put(updateCategory);
router.delete(deleteaCategory)


>>>>>>> f9875e897ba98cd1937bbfe882cdf2859eca5743:pages/api/categories/categoryId/[pid].js
export default router.handler();