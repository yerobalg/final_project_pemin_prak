const MahasiswaController = require("./mahasiswa.controller");
const ProdiController = require("./prodi.controller");
const MatakuliahController = require("./matakuliah.controller");

class Controller {
  constructor(repositories, response) {
    this.mahasiswa = new MahasiswaController(repositories.mahasiswa, response);
    this.prodi = new ProdiController(repositories.prodi, response);
    this.matakuliah = new MatakuliahController(
      repositories.matakuliah,
      response
    );
  }
}

module.exports = Controller;
