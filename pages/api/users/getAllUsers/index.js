import {createRouter} from 'next-connect'
import dbConnect from '../../../../backend/config/dbConfig';
import { getAllUsers } from '../../../../backend/controllers/userController';

const router = createRouter();
dbConnect();

router.get(getAllUsers);

export default router.handler();