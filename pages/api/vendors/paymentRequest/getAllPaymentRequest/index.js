import { createRouter } from "next-connect";
import dbConnect from "../../../../../backend/config/dbConfig";
import { getAllPaymentRequest } from "../../../../../backend/controllers/vendor/payoutRequestController";

const router = createRouter();

dbConnect();

router.post(getAllPaymentRequest);

export default router.handler();