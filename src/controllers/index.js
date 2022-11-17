const MahasiswaController = require("./mahasiswa.controller");

class Controller {
  constructor(repositories, response) {
    this.mahasiswa = new MahasiswaController(repositories.mahasiswa, response);
  }
}

module.exports = Controller;
