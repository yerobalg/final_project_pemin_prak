const Matakuliah = require("../models/matakuliah.model");
const Mahasiswa = required("../models/mahasiswa.model.js");
Mahasiswa.belongsToMany(Matakuliah, { through: "mahasiswa_matakuliah" });
Matakuliah.belongsToMany(Mahasiswa, { through: "mahasiswa_matakuliah" });

class MatakuliahRepository {
  constructor(Matakuliah) {
    this.Matakuliah = Matakuliah;
  }

  create = async (judul) => {
    return await this.Matakuliah.create(judul);
  };

  getById = async (id) => {
    return await this.Mahasiswa.findAll(
      {
        where: {
          nim: id,
        },
      },
      {
        include: this.Matakuliah,
      }
    );
  };
}

module.exports = MatakuliahRepository;
