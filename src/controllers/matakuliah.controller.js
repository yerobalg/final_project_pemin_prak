class MatakuliahController {
  constructor(matakuliahRepository, response) {
    this.matakuliahRepository = matakuliahRepository;
    this.response = response;
  }

  create = async (req, res, next) => {
    const judul_buku = req.body.nama;
    try {
      const matakuliah = await this.matakuliahRepository.create(judul_buku);
      this.response.success(res, 201, "Buku berhasil ditambahkan", matakuliah);
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req, res, next) => {
    try {
      const matakuliah = await this.matakuliahRepository.getAll();
      this.response.success(res, 201, "Berhasil mengambil buku", matakuliah);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MatakuliahController;
