const MahasiswaRepository = require("./mahasiswa.repo");
const ProdiRepository = require("./prodi.repo");
const MatakuliahRepository = require("./matakuliah.repo");

class Repository {
  constructor(db) {
    this.db = db;
    this.mahasiswa = new MahasiswaRepository(
      db.mahasiswa,
      db.matakuliah,
      db.prodi
    );

    this.prodi = new ProdiRepository(db.prodi);
    this.matakuliah = new MatakuliahRepository(db.matakuliah);
  }
}

module.exports = Repository;
