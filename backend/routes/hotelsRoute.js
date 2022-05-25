import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotelById,
  getHotelRooms,
  updateHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../middlewares/userCheck.js";
import Hotel from "../models/Hotel.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/find/:id", getHotelById);

router.get("/", getAllHotels);
router.get("/countByCity", countByCity);

router.get("/CountByType", countByType);
router.get("/room/:id", getHotelRooms);


export default router;
