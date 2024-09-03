import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({message:"unAuthenticate", error: "Access denied" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(decoded) return next()
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export default verifyToken;
