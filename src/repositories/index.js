const MahasiswaRepository = require("./mahasiswa.repo");

class Repository {
  constructor(db) {
    this.db = db;
    this.mahasiswa = new MahasiswaRepository(db.mahasiswa);
  }
}

module.exports = Repository;
