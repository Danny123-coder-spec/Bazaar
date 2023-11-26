<<<<<<< HEAD:backend/models/admin/productModel.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter product name"],
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    price:{
      type: Number,
      required: [true, "Please enter product price"],
    },   
    images:[
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],

    category: {
      type: String,
      required: [true, "Please select product category"],
      enum: {
        values: [
          "Electronics",
          "Fashion",
          "Cars",
          "Laptop",
          "Desktop",
          "Camera",
          "Toys",
          
        ],
        required:[true, "Plese select correct category"],
      },
    },
    tags: {
      type: [String],
      default: [],
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    regularPrice:{
      type:String,
      required:[true, "Please select regular price"],
    },
    
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);


=======
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter product name"],
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    price:{
      type: Number,
      required: [true, "Please enter product price"],
    },   
    images:[
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],

    category: {
      type: String,
      required: [true, "Please select product category"],
      enum: {
        values: [
          "Electronics",
          "Fashion",
          "Cars",
          "Laptop",
          "Desktop",
          "Camera",
          "Toys",
          
        ],
        required:[true, "Plese select correct category"],
      },
    },
    tags: {
      type: [String],
      default: [],
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    regularPrice:{
      type:String,
      required:[true, "Please select regular price"],
    },
    
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
mongoose.model("Product", productSchema);


>>>>>>> f9875e897ba98cd1937bbfe882cdf2859eca5743:backend/models/productModel.js
