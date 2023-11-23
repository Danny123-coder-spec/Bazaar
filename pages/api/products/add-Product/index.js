import { createRouter } from "next-connect";
import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConfig";
import { createProduct } from "../../../../backend/controllers/productController";
import { Product } from "../../../../backend/models/productModel";
const router = createRouter();

dbConnect();

router.post(createProduct);

export default router.handler();
