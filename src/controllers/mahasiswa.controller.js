const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY, JWT_EXPIRED_SEC } = require("../../config");

class MahasiswaController {
  constructor(mahasiswaRepository, response) {
    this.mahasiswaRepository = mahasiswaRepository;
    this.response = response;
  }

  create = async (req, res, next) => {
    const { body } = req;
    try {
      body.password = await bcrypt.hash(body.password, 10);
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

  profile = (req, res, next) => {
    const { user } = req;
    this.response.success(
      res,
      200,
      "Berhasil mendapatkan profil mahasiswa",
      user
    );
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
      if (!mahasiswa) {
        this.response.error(res, 404, "Mahasiswa tidak ditemukan", null);
        return;
      }
      this.response.success(res, 200, "Berhasil mendapatkan data", mahasiswa);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  login = async (req, res, next) => {
    const { body } = req;
    try {
      const mahasiswa = await this.mahasiswaRepository.getMahasiswaWithMatkul(
        body.nim
      );
      if (!mahasiswa) {
        this.response.error(res, 404, "Mahasiswa tidak ditemukan", null);
        return;
      }
      const comparePassword = await bcrypt.compare(
        body.password,
        mahasiswa.password
      );
      if (!comparePassword) {
        this.response.error(res, 401, "Password Salah", null);
        return;
      }

      const mahasiswaOutput = {
        nim: mahasiswa.nim,
        nama: mahasiswa.nama,
        angkatan: mahasiswa.angkatan,
        prodi_id: mahasiswa.prodi_id,
      };
      const token = jwt.sign(mahasiswaOutput, JWT_SECRET_KEY, {
        expiresIn: JWT_EXPIRED_SEC,
      });
      this.response.success(res, 200, "Login Berhasil", { mahasiswa, token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  deleteMatkul = async (req, res, next) => {
    const { nim, mkId } = req.params;
    try {
      await this.mahasiswaRepository.deleteMatkul(nim, mkId);
      this.response.success(
        res,
        200,
        "Matakuliah berhasil dihapus dari mahasiswa"
      );
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MahasiswaController;
