import { verifyToken } from "./verifyToken.js";
import { createError } from "../utils/error.js";


export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
       
          return next(
            createError(403, "You are not authorized to perform this action")
            );
        
    }
});
};

