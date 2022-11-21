const MahasiswaRepository = require("./mahasiswa.repo");
const MatakuliahRepository = require("./matakuliah.repo");

class Repository {
  constructor(db) {
    this.db = db;
    this.mahasiswa = new MahasiswaRepository(db.mahasiswa);
    this.matakuliah = new MatakuliahRepository(db.matakuliah);
  }
}

module.exports = Repository;
