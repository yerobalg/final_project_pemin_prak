class MahasiswaRepository {
  constructor(Mahasiswa) {
    this.mahasiswa = Mahasiswa;
  }

  create = async (data) => {
    return await this.mahasiswa.create(data);
  };

  get = async (id) => {
    return await this.mahasiswa.findByPk(id);
  };
}

module.exports = MahasiswaRepository;
