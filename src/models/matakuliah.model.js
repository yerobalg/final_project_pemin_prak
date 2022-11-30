module.exports = (sequelize, Sequelize) => {
  const Matakuliah = sequelize.define(
    "matakuliah",
    {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
      },
      nama: {
        type: Sequelize.STRING,
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
  return Matakuliah;
};
