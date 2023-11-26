import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConfig";
import { getAllCategories } from "../../../../backend/controllers/categoryController";

const router = createRouter();

dbConnect();

router.get(getAllCategories)

export default router.handler();