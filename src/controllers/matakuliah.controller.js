const Mahasiswa = require('../models/mahasiswa.model')

class MatakuliahController {
  constructor(matakuliahRepository, response) {
    this.matakuliahRepository = matakuliahRepository;
    this.response = response;
  }

  create = async (req, res, next) => {
    const { body } = req;
    try {
      const matakuliah = await this.matakuliahRepository.create(body);
      this.response.success(res, 201, "Buku berhasil ditambahkan", matakuliah);
    } catch (error) {
      next(error);
    }
  };

  getById = async(req,res) => {
    const {nim} = req.params
    try {
        const matakuliah = await this.matakuliahRepository.getById(nim)
        this.response.success(res,200,"Berhasil menampilkan buku",matakuliah)
    } catch (error) {
        next(error)
    }
  }
}

module.exports = MatakuliahController
