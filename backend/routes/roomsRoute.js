import express from "express";
import { createRoom, deleteRoom, GetAllRooms, getRoomById, updateRoom, updateRoomAvailability } from "../controllers/roomController.js";
import { verifyAdmin } from "../middlewares/userCheck.js";

const router = express.Router();


router.post("/:hotelid", verifyAdmin, createRoom);

router.put("/availability/:id", updateRoomAvailability);

router.put("/:id", verifyAdmin, updateRoom);

router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

router.get("/:id", getRoomById);

router.get("/", GetAllRooms);

export default router;
