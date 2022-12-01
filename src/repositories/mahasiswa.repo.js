class MahasiswaRepository {
  constructor(Mahasiswa, Matakuliah) {
    this.mahasiswa = Mahasiswa;
    this.matakuliah = Matakuliah;
  }

  create = async (data) => {
    return await this.mahasiswa.create(data);
  };

  get = async () => {
    return await this.mahasiswa.findAll();
  };

  getMahasiswaWithMatkul = async (nim) => {
    return await this.mahasiswa.findByPk(nim, {
      include: {
        model: this.matakuliah,
        as: "mata_kuliah",
      },
    });
  };

  ambilMahasiswaWithMatkul = async (nim, mkId) => {
    const mahasiswaObj = await this.mahasiswa.findByPk(nim);
    const matakuliahObj = await this.matakuliah.findByPk(mkId);
    await matakuliahObj.addMahasiswa(mahasiswaObj);
  };
}

module.exports = MahasiswaRepository;
