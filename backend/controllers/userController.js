import User from '../models/userModel'
import generateToken from '../config/jwToken';

// Register an user
const registerUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        // create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        // user already exits
        res.json({ message: 'User already Exists', status: 400 })
    }

}

// Authenticate a user

const authUser = async (req, res) => {
    const { email, password } = req.body;
    try {
       const findUser = await User.findOne({email})
       if(findUser && (await findUser.isPasswordMatched(password))) {
         res.json({
            _id:findUser?._id,
            email:findUser?.email,
            token:generateToken(findUser?._id)
         })
       }
    } catch (error) {
        res.json({message:'Internal Server Error', status:500})
        console.log(error.message)
    }

}

// Get all users
const getAllUsers = async(req, res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers)
    } catch (error) {
        res.json({message:'Internal Server Error', status:500})
        console.log(error.message);
    }
}

// Get A Single User

const getSingleUser = async(req, res) => {
    const _id = req?.query?.userId;
    try {
        const singleUser = await User.findById(_id);
        res.json(singleUser);
    } catch (error) {
        res.json({message:'Internal Server Error', status:500})
        console.log(error.message);
    }
}


const deleteAUser = async(req, res) => {
    const _id = req.query?.userId;
    try {
        const deletedUser = await User.findByIdAndDelete(_id);
        res.json(deletedUser);
    } catch (error) {
        res.json({message:'Internal Server Error', status:500})
        console.log(error.message);
    }

}

// Update a User

const updateaUser = async (req, res) => {
    const _id = req?.query?.userId;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id, 
            req.body,
            {new:true}
        );
        res.json(updatedUser);
        if(!updatedUser){
            return res.json({message:'User not found', status:404})
        }
    } catch (error) {
        res.json({message:'Internal Server Error', status:500})
        console.log(error.message);
    }
}



export { registerUser, authUser, getAllUsers,getSingleUser, deleteAUser, updateaUser }