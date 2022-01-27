import { Sequelize } from "sequelize";
import Customer from "../models/customerModel.js";
import Order from "../models/orderModel.js";

export const getAllOrder = async (req, res) => {
    try {
        const orders = await Order.findAll()
        res.json(orders)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const getOneOrderById = async (req, res) => {
    try {
        const order = await Order.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(order)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const getOrderId = async (req, res) => {
  try {
      await Order.findOne({
        attributes: ["no_order"],
        order: Sequelize.literal('no_order DESC')
      }).then((value) => {
        // console.log(value.get('no_order'));
        res.json(value === null ? 1 : value.get('no_order') + 1);
      });
  } catch (error) {
      res.json({
          message: error.message
      })
  }
}

export const createOrder = async (req, res) => {
    try {
        var list = req.body.formData.data;

        await list.forEach(element => {
          Order.create({
            no_order: req.body.formData.no_order,
            jenisMakanan: element.jenis,
            namaMakanan: element.nama,
            quantity: element.qty,
            harga: element.harga,
            total: element.total
          });
        });

        Customer.create(req.body.formData);

        res.json({
            'message': 'Order Created'
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const updateOrder = async (req, res) => {
    try {
        await Order.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': 'Order Updated'
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const deleteOrder = async (req, res) => {
    try {
        await Order.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': 'Order Deleted'
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}