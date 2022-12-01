const MahasiswaRepository = require("./mahasiswa.repo");
const ProdiRepository = require("./prodi.repo");

class Repository {
  constructor(db) {
    this.db = db;
    this.mahasiswa = new MahasiswaRepository(db.mahasiswa);
    this.prodi = new ProdiRepository(db.prodi);
  }
}

module.exports = Repository;
