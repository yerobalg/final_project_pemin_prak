module.exports = (sequelize, Sequelize) => {
  const Mahasiswa = sequelize.define(
    "mahasiswa",
    {
      nim: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      nama: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      angkatan: {
        type:Sequelize.INTEGER,
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
      indexes: [{ unique: true, fields: ["nim"] }, { fields: ["deleted_at"] }],
    }
  );
  return Mahasiswa;
};

