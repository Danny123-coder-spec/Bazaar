import Product from "../models/productModel";
import slugify from 'slugify'
// Creating a new Product

const createProduct = async (req, res) => {
  //   console.log(req?.body);
  try {
    if(req.body.title) {
      req.body.slug = slugify(req.body.title); 
    }

    // const slug = slugify(req.body.title, { lower: true });
    // res.json(slug);

    const newProduct = await Product.create(req.body);
    res.json(newProduct);
    await newProduct.save();
    if(newProduct) {
      res.json({message:'Product Created Successully', status:200})
    } else {
      res.json({status:400, error:'Failed to created product'})
    }

  } catch (error) {
    console.log('Error creating product', error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again later",
      error: error.message,
    });
  }
};

// Get a product
const getaProduct = async(req, res) => {
  const {id} = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct) 
  } catch (error) {
    throw new Error(error)
    
  }
}

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const getAllProducts = await Product.find();
    res.json(getAllProducts);
  } catch (error) {
    throw new Error(error);
  }
};

// Update a product by ID

const updateProductById = async (req, res) => {
  const { productId } = req.params;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

// Delete a product by ID

const deleteProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Sever Error" });
  }
};

export {
  createProduct,
  getAllProducts,
  getaProduct,
  updateProductById,
  deleteProductById,
};


// const { title, category, price, description, seller, stock } = req?.body;

    // const newProduct = new Product({ ...req?.body });

    // const savedProduct = await newProduct.save();

    // if (savedProduct) {
    //   res.json({ message: "Product created successfully", status: 200});
    // } else {
    //   res.json({ status: 400, error: "Failed to save the product" });
    // } 