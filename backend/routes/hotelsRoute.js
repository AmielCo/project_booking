import express from 'express'
import { createHotel, deleteHotel, GetAllHotels, getHotelById, updateHotel } from '../controllers/hotelController.js';
import { verifyAdmin } from '../middlewares/userCheck.js';
import Hotel from "../models/Hotel.js";

const router = express.Router();

router.post('/', verifyAdmin, createHotel);

router.put("/:id",verifyAdmin, updateHotel )

router.delete("/:id",verifyAdmin, deleteHotel);

router.get("/:id", getHotelById);

router.get("/", GetAllHotels);


export default router;