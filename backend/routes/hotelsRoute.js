import express from 'express'
import { createHotel, deleteHotel, GetAllHotels, getHotelById, updateHotel } from '../controllers/hotelController.js';
import Hotel from "../models/Hotel.js";

const router = express.Router();

router.post('/', createHotel);

router.put("/:id", updateHotel )

router.delete("/:id", deleteHotel);

router.get("/:id", getHotelById);

router.get("/", GetAllHotels);


export default router;