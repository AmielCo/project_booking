import express from "express";
import {
  deleteUser,
  GetAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const router = express.Router();

 router.get("/checkauthentication", verifyToken, (req,res,next)=>{
   res.send("hello user, you are logged in")
 })

  router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete");
  });

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.get("/:id", getUserById);

router.get("/", GetAllUsers);

export default router;
