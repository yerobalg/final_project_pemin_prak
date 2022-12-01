module.exports = (sequelize, Sequelize) => {
  const Mahasiswa = sequelize.define(
    "mahasiswa",
    {
      nim: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      angkatan: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      prodi_id: {
        type: Sequelize.INTEGER,
        references: { model: "prodi" },
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
      indexes: [{ fields: ["deleted_at"] }],
    }
  );
  return Mahasiswa;
};
