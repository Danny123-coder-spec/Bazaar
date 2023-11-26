<<<<<<< HEAD
import {createRouter} from 'next-connect'
import dbConnect from '../../../../backend/config/dbConfig';
import { getAllUsers } from '../../../../backend/controllers/userController';

const router = createRouter();
dbConnect();

router.get(getAllUsers);

=======
import {createRouter} from 'next-connect'
import dbConnect from '../../../../backend/config/dbConfig';
import { getAllUsers } from '../../../../backend/controllers/userController';

const router = createRouter();
dbConnect();

router.get(getAllUsers);

>>>>>>> f9875e897ba98cd1937bbfe882cdf2859eca5743
export default router.handler();