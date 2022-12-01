const MahasiswaController = require("./mahasiswa.controller");
const ProdiController = require("./prodi.controller");

class Controller {
  constructor(repositories, response) {
    this.mahasiswa = new MahasiswaController(repositories.mahasiswa, response);
    this.prodi = new ProdiController(repositories.prodi, response);
  }
}

module.exports = Controller;
