const Mahasiswa = require("./mahasiswa.model");
module.exports = (sequelize, Sequelize) => {
  const Matakuliah = sequelize.define(
    "matakuliah",
    {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nama: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.BIGINT,
        defaultValue: Sequelize.literal("FLOOR(EXTRACT(EPOCH FROM NOW()))"),
      },
      updatedAt: {
        type: Sequelize.BIGINT,
        defaultValue: Sequelize.literal("FLOOR(EXTRACT(EPOCH FROM NOW()))"),
      },
    },
    {
      paranoid: true,
      freezeTableName: true,
      underscored: true,
      indexes: [{ unique: true, fields: ["id"] }, { fields: ["deleted_at"] }],
    }
  );
  Matakuliah.hasMany(Mahasiswa, { through: "mahasiswa_matakuliah" });
  Mahasiswa.hasMany(Matakuliah, { through: "mahasiswa_matakuliah" });
  return Matakuliah;
};
