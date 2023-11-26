import {createRouter} from 'next-connect'
import dbConnect from '../../../../backend/config/dbConfig';
import { deleteAVendor, getaSingleVendor, updateAVendor} from '../../../../backend/controllers/vendor/vendorController';

const router = createRouter();

dbConnect();

router.get(getaSingleVendor);
router.delete(deleteAVendor);
router.put(updateAVendor);

export default router.handler();