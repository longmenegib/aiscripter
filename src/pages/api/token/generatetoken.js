import jwt from "jsonwebtoken";

function generateJWT() {
    let payload = {
        email: 'gibrillongmene@gmail.com',
        role: 'ceoaisripter',
    };
  
    return jwt.sign(payload, process.env.JWT_KEY, {
    });
}

export default generateJWT;