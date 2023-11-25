import {createRouter} from 'next-connect'
import dbConnect from '../../../../backend/config/dbConfig';
import {deleteAUser, getSingleUser, updateaUser } from '../../../../backend/controllers/userController';

const router = createRouter();
dbConnect();

router.get(getSingleUser);
router.delete(deleteAUser);
router.put(updateaUser)

export default router.handler();