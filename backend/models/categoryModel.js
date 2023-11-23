import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    subcategories: [{
      name: { type: String, required: true },
      subcategories: [{
        name: { type: String, required: true },
        
      }],
      
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });

export default  mongoose.models.Category || mongoose.model('Category', categorySchema)