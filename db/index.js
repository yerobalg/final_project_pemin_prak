const config = require('../config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.DB_DATABASE,
    config.DB_USERNAME,
    config.DB_PASSWORD,
    {
        host: config.DB_HOST,
        dialect: 'postgres',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.mahasiswa = require('../src/models/mahasiswa.model')(sequelize, Sequelize);
db.prodi = require('../src/models/prodi.model')(sequelize,Sequelize);

module.exports = db;
