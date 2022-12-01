module.exports = (sequelize, Sequelize) => {
  const Mahasiswa = sequelize.define(
    "mahasiswa",
    {
      nama: {
        type: Sequelize.STRING,
      },
      nim: {
        type: Sequelize.STRING,
        primaryKey:true
      },
      password: {
        type: Sequelize.STRING,
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

