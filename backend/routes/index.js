import express from 'express'
import { getAllBooking, createBooking } from '../controllers/Booking.js';
import { getAllJenis } from '../controllers/Jenis.js';
import { getAllMenu, getAllMenuByJenis } from '../controllers/Menu.js';
import { getOrderId, createOrder, deleteOrder, getAllOrder, getOneOrderById, updateOrder } from '../controllers/Orders.js';

import { getAllUser, getUserById } from '../controllers/Users.js'

const router = express.Router();

// router.get('/', getAllUser)
router.get('/login', getUserById)

// Booking
router.get('/booking', getAllBooking)
router.post('/booking', createBooking)

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
router.get('/menu/:id', getAllMenuByJenis)

export default router