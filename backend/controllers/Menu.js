import multer from "multer";
import Menu from "../models/menuModel.js";

// var storageFile = multer.diskStorage({
//   //buat config file storage 
//   destination : (req, file, cb)=>{
//     //set folder sebagai destinasi upload
//     cb(null, './public/images') 
//   },
//   filename : (req, file, cb)=>{ 
//     //set nama file setelah diupload 
//     console.log("FileName", file);
//     cb(null, file.originalname)
//   } 
// });

// var upload = multer({storage : storageFile}).single('gambar'); //buat object upload

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
        // upload(req,res,(err) =>{
        //     if(err) console.log(err);

        //     console.log(req.file);
        // });

        Menu.create({
          jenis: req.body.formData.jenis,
          nama: req.body.formData.nama,
          deskripsi: req.body.formData.deskripsi,
          harga: req.body.formData.harga,
          // gambar: req.file.filename,
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
      jenis: req.body.formData.jenis,
      nama: req.body.formData.nama,
      deskripsi: req.body.formData.deskripsi,
      harga: req.body.formData.harga,
      // gambar: req.file.filename,
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

