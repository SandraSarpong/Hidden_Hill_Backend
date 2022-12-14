import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
//import Hotel from "../models/Hotel.js";
//import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
<<<<<<< HEAD
// router.post("/", verifyAdmin, createHotel);
router.post("/createHotel", createHotel);

//UPDATE
//router.put("/:id", verifyAdmin, updateHotel);
router.put("/:id", updateHotel);
//DELETE
//router.delete("/:id", verifyAdmin, deleteHotel);
=======
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);
//DELETE
>>>>>>> aafa01253bd280337da293c9d23d01c56cf6f7d8
router.delete("/:id", deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
