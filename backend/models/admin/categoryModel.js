
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  subCategory: {
    type: String,
    required: true,
  },
  parentCategory: {
    type: String,
    required: true,
    enum:[
      "Electronics",
      "Fashion"
    ],
  },
  imageUrl: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
}, { timestamps: true });

export default mongoose.models.Category || mongoose.model('Category', categorySchema);
