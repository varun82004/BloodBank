// authMiddleware.js

import jwt from "jsonwebtoken";

/**
 * JWT Authentication Middleware
 * Verifies the token from the Authorization header and attaches userId to req.body.
 */
const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing or malformed",
      });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Invalid or expired token",
        });
      }

      req.body.userId = decoded.userId;
      next();
    });
  } catch (error) {
    console.error("Authentication Middleware Error:", error);
    return res.status(401).json({
      success: false,
      message: "Authentication failed",
      error: error.message,
    });
  }
};

export default authMiddleware;
