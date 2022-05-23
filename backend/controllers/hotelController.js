import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
      const savedHotel = await newHotel.save();
      res.status(201).send(savedHotel);
    } catch (err) {
      next(err);
    }
}

export const updateHotel = async (req, res, next) => {
   try {
     const updatedHotel = await Hotel.findByIdAndUpdate(
       req.params.id,
       { $set: req.body },
       { new: true }
     );
     console.log(updatedHotel);
     res.status(201).json(updatedHotel);
   } catch (err) {
     next(err);
   }
};

export const deleteHotel = async (req, res, next) => {
   try {
     const updatedHotel = await Hotel.findByIdAndDelete(req.params.id);
     res.status(201).json("Hotel deleted");
   } catch (err) {
    next(err);
   }
};

export const getHotelById = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(201).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const GetAllHotels = async (req, res, next) => {
   try {
     const hotels = await Hotel.find();
     res.status(201).json(hotels);
   } catch (err) {
     next(err);
   }
};