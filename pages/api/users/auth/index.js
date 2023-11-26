<<<<<<< HEAD
import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConfig";
import { authUser} from "../../../../backend/controllers/userController";

const router = createRouter();

dbConnect();

router.post(authUser);

export default router.handler();
=======
import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConfig";
import { authUser} from "../../../../backend/controllers/userController";

const router = createRouter();

dbConnect();

router.post(authUser);

export default router.handler();
>>>>>>> f9875e897ba98cd1937bbfe882cdf2859eca5743
