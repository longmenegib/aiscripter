import User from "../../../../models/user";
import bcrypt from 'bcrypt';
import dbConnect from "../../../../lib/mongodb";
import generateJWT from "../token/generatetoken";

const saltRounds = 10;

const handler = async (req, res) => {
    const requestMethod = req.method;
    res.setHeader('Content-Type', 'application/json');
    await dbConnect();
    switch (requestMethod) {
        case 'POST':
            const { email, password, name } = req.body;

            try {
                // Check if user already exists
                const existingUser = await User.findOne({ email });
                if (existingUser) {
                    return res.status(400).json({ message: 'User already exists', success: false });
                }

                // Generate salt for hashing
                const salt = await bcrypt.genSalt(saltRounds);
                const hashedPassword = await bcrypt.hash(password, salt);

                const newUser = new User({
                    email,
                    password: hashedPassword,
                    name,
                    subscription: "basic", // Set the default subscription to "basic"
                    requestsThisMonth: 0, // Set the default requests left to 10
                    subscriptionEndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // Set the subscription expiration to 30 days from now
                });
                await newUser.save();

                //login the user
                const user = await User.findOne({ email });
                // Create and send token
                let token_id = generateJWT({ email: user.email, id: user._id });
                res.status(201).json({ user: user, token: token_id, message: 'User created successfully' });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Server error', success: false });
            }
            break;
        case 'GET':
            res.status(200).json({ message: 'register get', success: true })
            break;
        default:
            // let token = generateJWT();
            res.status(200).json({ message: 'users pages', success: true })
    }
}

export default handler;