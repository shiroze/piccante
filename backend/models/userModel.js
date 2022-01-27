import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize

const User = db.define('users', {
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default User