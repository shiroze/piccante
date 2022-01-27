import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize

const Order = db.define('orders', {
  no_order:{
      type: DataTypes.INTEGER
  },
  jenisMakanan:{
      type: DataTypes.STRING
  },
  namaMakanan:{
      type: DataTypes.STRING
  },
  quantity:{
      type: DataTypes.INTEGER
  },
  harga:{
      type: DataTypes.DOUBLE
  },
  total:{
      type: DataTypes.DOUBLE
  }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Order