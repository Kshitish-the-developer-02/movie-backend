import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
import asyncHandler from "./asyncHandler.js";

// check if the user is authenticate or not
const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from the 'jwt' cookie
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("not authorized ,token failed");
    }
  } else {
    res.status(401);
    throw new Error("not authorized,no token");
  }
});

// check if the user is admin or not
const authorizedAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("not authorized as an admin");
  }
};

export { authenticate, authorizedAdmin };
