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

  ambilMatkul = async (req, res, next) => {
    const { nim, mkId } = req.params;
    try {
      await this.mahasiswaRepository.ambilMahasiswaWithMatkul(nim, mkId);
      this.response.success(
        res,
        200,
        "Matakuliah berhasil ditambahkan ke Mahasiswa"
      );
    } catch (error) {
      next(error);
    }
  };

  ambilSeluruhMahasiswa = async (req, res, next) => {
    try {
      const mahasiswa = await this.mahasiswaRepository.get();
      this.response.success(
        res,
        200,
        "Berhasil mengambil seluruh mahasiswa",
        mahasiswa
      );
    } catch (error) {
      next(error);
    }
  };

  ambilMahasiswaWithMatkul = async (req, res, next) => {
    const { nim } = req.params;
    try {
      const mahasiswa = await this.mahasiswaRepository.getMahasiswaWithMatkul(
        nim
      );
      this.response.success(res, 200, "Berhasil mendapatkan data", mahasiswa);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

module.exports = MahasiswaController;
