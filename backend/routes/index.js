import express from 'express';
import bodyParser from 'body-parser';
import { getAllBooking, createBooking, deleteBooking } from '../controllers/Booking.js';
import { getAllJenis } from '../controllers/Jenis.js';
import { getAllMenu, getAllMenuByJenis, createMenu, updateMenu, deleteMenu } from '../controllers/Menu.js';
import { getOrderId, createOrder, deleteOrder, getAllOrder, getOneOrderById, updateOrder } from '../controllers/Orders.js';

import { getAllUser, getUserById } from '../controllers/Users.js'

import multer from "multer";

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false })); 
router.use(bodyParser.json());
router.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*'); res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  if (req.method === "OPTIONS") {
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested- With, Content-Type, Accept, Authorization');
    return res.status(200).json({}); 
  }
  next();
});

var storageFile = multer.diskStorage({
  //buat config file storage 
  destination : (req, file, cb)=>{
    //set folder sebagai destinasi upload
    cb(null, './images') 
  },
  filename : (req, file, cb)=>{ 
    //set nama file setelah diupload 
    cb(null, Date.now() + file.originalname)
  } 
});
var upload = multer({storage : storageFile}) //buat object upload


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
router.post('/menu', upload.single('fileImage'), createMenu)
router.patch('/menu/:id', upload.single('fileImage'), updateMenu)
// router.get('/menu/:id', getOneOrderById)
router.get('/menu/:id', getAllMenuByJenis)
router.delete('/menu/:id', deleteMenu)

export default router