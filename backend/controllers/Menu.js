import multer from "multer";
import Menu from "../models/menuModel.js";

export const getAllMenu = async (req, res) => {
    try {
        const allMenu = await Menu.findAll()
        res.json(allMenu)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const getAllMenuByJenis = async (req, res) => {
    try {
        const allMenu = await Menu.findAll({
            where: {
                jenis: req.params.id
            }
        })
        res.json(allMenu)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const getOneMenuById = async (req, res) => {
    try {
        const menu = await Menu.findOne({
          where: {
            id: req.params.id
          }
        })
        res.json(menu)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const createMenu = async (req, res) => {
    try {
        await Menu.create({
          jenis: req.body.jenis,
          nama: req.body.nama,
          deskripsi: req.body.deskripsi,
          harga: req.body.harga,
          gambar: req.file.filename,
        });

        res.json({
            'message': 'Menu Created'
        });
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const updateMenu = async (req, res) => {
  try {
    await Menu.update({
      jenis: req.body.jenis,
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      harga: req.body.harga,
      gambar: req.file.filename,
    }, {
      where: {
          id: req.params.id
      }
    })

      res.json({
          'message': 'Menu Created'
      })
  } catch (error) {
      res.json({
          message: error.message
      })
  }
}

export const deleteMenu = async (req, res) => {
    try {
        await Menu.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': 'Menu Deleted'
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

