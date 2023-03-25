import jwt from "jsonwebtoken";

const authenticate = (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    if (Math.floor(Date.now() / 1000) > decodedToken?.exp) {
      res.status(401).json({ success: false, message: "Accès impossible" });
    } else {
      return;
    }
  } catch {
    res.status(401).json({ success: false, message: "Accès impossible" });
  }
};
export default authenticate;
