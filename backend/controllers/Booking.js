import { Sequelize } from "sequelize";
import Booking from "../models/bookingModel.js";

export const getAllBooking = async (req, res) => {
  try {
      const booking = await Booking.findAll()
      res.json(booking)
  } catch (error) {
      res.json({
          message: error.message
      })
  }
}

export const createBooking = async (req, res) => {
  try {
      Booking.create(req.body);

      res.json({
          'message': 'Booking Created'
      })
  } catch (error) {
      res.json({
          message: error.message
      })
  }
}

export const deleteBooking = async (req, res) => {
    try {
        await Booking.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': 'Booking Deleted'
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}