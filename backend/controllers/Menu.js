import Menu from "../models/menuModel.js"

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

