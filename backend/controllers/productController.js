import Product from "../models/productModel";

const createProduct = async (req, res) => {
  
  try {
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

  const id = req?.query?.pid
  // console.log(req?.query) 
  console.log(id)
  try {
    const findProduct = await Product.findById(id);
    return res.json(findProduct);
  } catch (error) {
    throw new Error(error);
    
  }
}

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const getAllProducts = await Product.find();
    res.json(getAllProducts);
  } catch (error) {
    res.status(500).json({message:'Something went wrong!Please try again'})
    throw new Error(error);
  }
};

// Update a product by ID

const updateProductById = async (req, res) => {
 
  const id = req?.query?.pid
  console.log(id)
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(updatedProduct);

    console.log(id)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

// Delete a product by ID

const deleteProductById = async (req, res) => {
  const Id  = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(Id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(deletedProduct);
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

