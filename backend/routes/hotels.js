import express from 'express'
import Hotel from "../models/Hotel.js";

const router = express.Router();

router.post('/', async (req, res) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(201).send(savedHotel);
    }
    catch (err) {
       res.status(500).json(err);
    }
})

router.put("/:id", async (req, res) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        console.log(updatedHotel);
        res.status(201).json(updatedHotel);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

router.delete("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndDelete(
      req.params.id
    );
    res.status(201).json("Hotel deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(
      req.params.id,
    );
    res.status(201).json(hotel);
  } catch (err) {
    res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    const failed = true;
    const err = new Error();
    err.status = 404;
    err.message = "Not found"
    if (failed)return next()
  try {
    const hotels = await Hotel.find();
    res.status(201).json(hotels);
  } catch (err) {
      next(err);
  }
});





export default router;