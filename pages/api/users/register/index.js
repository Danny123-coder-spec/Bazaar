import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConfig";
import { registerUser } from "../../../../backend/controllers/userController";

const router = createRouter();

dbConnect();

router.post(registerUser);

export default router.handler();
