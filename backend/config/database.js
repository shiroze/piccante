import { Sequelize  } from "sequelize";

const db = new Sequelize('piccante', 'root', '#K0p1d03l03', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;
