module.exports = (sequelize, Sequelize) => {
    const Prodi = sequelize.define(
      "prodi",
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true
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
        indexes: [{ unique: true}, { fields: ["deleted_at"] }],
      }
    );
    return Prodi;
  };
  