import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize

const Menu = db.define('menu', {
    jenis:{
        type: DataTypes.INTEGER
    },
    nama:{
        type: DataTypes.STRING
    },
    deskripsi:{
        type: DataTypes.STRING
    },
    harga:{
        type: DataTypes.DOUBLE
    },
    gambar: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Menu