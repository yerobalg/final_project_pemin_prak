const MahasiswaController = require("./mahasiswa.controller");
const MatakuliahController = require("./matakuliah.controller");

class Controller {
  constructor(repositories, response) {
    this.mahasiswa = new MahasiswaController(repositories.mahasiswa, response);
    this.matakuliah = new MatakuliahController(repositories.matakuliah, response);
  }
}

module.exports = Controller;
