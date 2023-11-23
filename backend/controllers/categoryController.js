import { Category } from "../models/categoryModel";

// Create a new Category

const createCategory = async (req, res) => {
    try {
        const {name, subcategories} = req.body;

        const newCategory = new Category({
            name,
            subcategories,
        });

        await newCategory.save();

        res.status(201).json({message:'Category created successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'Internal Sever Error'});
    }
};

// Create a new Product with a specific category and subcategory

const createProduct = async (req, res) => {
    try {
        const {name, category, subcategory, price} = req.body;

        // Find the category by name
        const foundCategory = await Category.findOne({name:category});

        if(!foundCategory) {
            return res.status(404).json({error:'Category not found'});
        }

        // Find the subcategory within the category

        const foundSubCategory = foundCategory.subcategories.find(sub => sub.name === subcategory);

        if(!foundSubCategory){
            return res.status(404).json({error:'Subcategory not found in the specific category'});
        };

        const newProduct = new Product({
            name,
            category:{
                name:foundCategory.name,
                subcategory:foundSubCategory.name,
            },
            price,
        });

        await newProduct.save();

        res.status(201).json({message:'Product created Successfully', product:newProduct})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'Internal Server Error'});
        
    }
};

// Get all categories

const getAllCategories = async(req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'Internal Server error'})
    }
}

export {createCategory,createProduct, getAllCategories};