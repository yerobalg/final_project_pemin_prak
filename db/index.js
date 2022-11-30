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
db.matakuliah = require('../src/models/matakuliah.model')(sequelize,Sequelize);
db.prodi = require('../src/models/prodi.model')(sequelize,Sequelize);

db.mahasiswa.belongsToMany(db.matakuliah, {
    through: "mahasiswa_matakuliah",
    as: "mata_kuliah",
    foreignKey: "mahasiswa_id"
})
db.matakuliah.belongsToMany(db.mahasiswa, {
    through: "mahasiswa_matakuliah",
    as: "mahasiswa",
    foreignKey: "matakuliah_id"
})

db.prodi.hasMany(db.mahasiswa, {foreignKey: 'id'})
db.mahasiswa.belongsTo(db.prodi)




module.exports = db;
