class MahasiswaController {
  constructor(mahasiswaRepository, response) {
    this.mahasiswaRepository = mahasiswaRepository;
    this.response = response;
  }

  create = async (req, res, next) => {
    const { body } = req;
    try {
      const mahasiswa = await this.mahasiswaRepository.create(body);
      this.response.success(
        res,
        200,
        "Mahasiswa berhasil ditambahkan",
        mahasiswa
      );
    } catch (error) {
      next(error);
    }
  };

  get = async (req, res) => {
    const { id } = req.params;
    try {
      const mahasiswa = await this.mahasiswaRepository.get(id);
      this.response.success(res, 200, "Berhasil mendapatkan data", mahasiswa);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MahasiswaController;
