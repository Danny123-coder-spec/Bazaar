import dbConnect from "../../../backend/config/dbConfig";

export async function POST(req) {
    await dbConnect(); 
}