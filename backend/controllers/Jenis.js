import Jenis from "../models/jenisModel.js"

export const getAllJenis = async (req, res) => {
    try {
        const allJenis = await Jenis.findAll()
        res.json(allJenis)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

