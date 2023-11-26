<<<<<<< HEAD
import {createRouter} from 'next-connect'
import dbConnect from '../../../../backend/config/dbConfig';
import {deleteAUser, getSingleUser, updateaUser } from '../../../../backend/controllers/userController';

const router = createRouter();
dbConnect();

router.get(getSingleUser);
router.delete(deleteAUser);
router.put(updateaUser)

=======
import {createRouter} from 'next-connect'
import dbConnect from '../../../../backend/config/dbConfig';
import {deleteAUser, getSingleUser, updateaUser } from '../../../../backend/controllers/userController';

const router = createRouter();
dbConnect();

router.get(getSingleUser);
router.delete(deleteAUser);
router.put(updateaUser)

>>>>>>> f9875e897ba98cd1937bbfe882cdf2859eca5743
export default router.handler();