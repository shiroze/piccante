import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize

const Customer = db.define('customers', {
  nama:{
      type: DataTypes.STRING
  },
  alamat:{
      type: DataTypes.STRING
  },
  nohp:{
      type: DataTypes.STRING
  },
  no_order:{
      type: DataTypes.INTEGER
  },
}, {
    freezeTableName: true,
    timestamps: false
})

export default Customer