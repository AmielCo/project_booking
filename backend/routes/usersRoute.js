import express from "express";
import {
  deleteUser,
  GetAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";

import { verifyAdmin, verifyUser } from "../middlewares/userCheck.js";


const router = express.Router();


router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUserById);

router.get("/", verifyAdmin, GetAllUsers);

export default router;
