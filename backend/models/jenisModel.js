import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize

const Jenis = db.define('jenis_menu', {
    namaJenis:{
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true,
    timestamps: false
})

export default Jenis