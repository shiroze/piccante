import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize

const Booking = db.define('booking', {
  nama:{
      type: DataTypes.STRING
  },
  nohp:{
      type: DataTypes.STRING
  },
  email:{
      type: DataTypes.STRING
  },
  orang:{
      type: DataTypes.INTEGER
  },
  tanggal:{
      type: DataTypes.DATE
  }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Booking