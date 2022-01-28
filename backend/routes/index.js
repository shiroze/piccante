import express from 'express';
import multer from "multer";

import { getAllBooking, createBooking, deleteBooking } from '../controllers/Booking.js';
import { getAllJenis } from '../controllers/Jenis.js';
import { getAllMenu, getAllMenuByJenis, getOneMenuById, createMenu, updateMenu, deleteMenu } from '../controllers/Menu.js';
import { getOrderId, createOrder, deleteOrder, getAllOrder, getOneOrderById, updateOrder } from '../controllers/Orders.js';
import { getAllUser, getUserById } from '../controllers/Users.js'


const storageFile = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   cb(null, "./public/images");
  // },
  destination: "./public/images",
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({storage : storageFile}).single('gambar'); //buat object upload

const router = express.Router();

// router.get('/', getAllUser)
router.get('/login', getUserById)

// Booking
router.get('/booking', getAllBooking)
router.post('/booking', createBooking)
router.delete('/booking/:id', deleteBooking)

// Orders
router.get('/genorder', getOrderId)
router.get('/orders', getAllOrder)
router.post('/orders', createOrder)
router.get('/orders/:id', getOneOrderById)
router.patch('/orders/:id', updateOrder)
router.delete('/orders/:id', deleteOrder)

// Jenis Menu
router.get('/jenis', getAllJenis)

// Menu
router.get('/menu', getAllMenu)
router.post('/menu', upload, createMenu)
router.patch('/menu/:id', upload, updateMenu)
router.get('/menu/:id', getOneMenuById)
router.get('/menu/:id', getAllMenuByJenis)
router.delete('/menu/:id', deleteMenu)

export default router