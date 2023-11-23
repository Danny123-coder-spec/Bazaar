import { NextResponse } from "next/server";
import dbConnect from "../../../../backend/config/dbConfig"
import {Product} from "../../../../backend/models/productModel";

 
 export const dynamic = "force-dynamic"


 export async function POST(req) {
    try {
        await dbConnect();

        const user = 'admin';

        if(user === 'admin') {
            const extractData = await req.json();

            const {name, description, price, images, category, regularPrice } = extractData;
            if(error) {
                return NextResponse.json({
                    success:false,
                    message:error?.details[0].message,
                });
            }

            const newlyCreatedProduct = await Product.create(extractData);

            if(newlyCreatedProduct){
                return NextResponse.json({
                    success:true,
                    message:'Product added successfully',
                });
            } else {
                return NextResponse.json({
                    success:false,
                    message:'failed to add the product',
                });

            }


        }else{
            return NextResponse.json({
                success:false,
                message:"You are not authorized "
            });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false,
            message:"Something went wrong! Please try again later"
        });
    }
 }