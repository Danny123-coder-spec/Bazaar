import {createRouter} from 'next-connect'
import dbConnect from '../../../../backend/config/dbConfig';
import { getAllVendors} from '../../../../backend/controllers/vendor/vendorController';

const router = createRouter();

dbConnect();

router.get(getAllVendors);

export default router.handler();