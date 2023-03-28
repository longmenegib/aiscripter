import User from "../../../../models/user";
import generateJWT from "../token/generatetoken";
import bcrypt from 'bcrypt';

const handler = async(req, res) => {
  const requestMethod = req.method;
  res.setHeader('Content-Type', 'application/json');
  
  switch (requestMethod) {
    case 'POST':
        const { email, password, name } = req.body;

        try {
            // Check if user exists
            const user = await User.findOne({ email });
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
        
            // Check if password is correct
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
              return res.status(400).json({ message: 'Invalid credentials' });
            }
        
            // Create and send token
            let token_id = generateJWT({email: user.email, id: user._id});
            res.status(200).json({ user: user, token: token_id });
          } catch (error) {
            res.status(500).json({ message: 'Something went wrong' });
          }
      break;
    default:
      res.status(200).json({ message: 'login page',  success: true})
  }
}

export default handler;