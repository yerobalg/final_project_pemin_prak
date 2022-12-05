class MahasiswaRepository {
  constructor(Mahasiswa, Matakuliah, Prodi) {
    this.mahasiswa = Mahasiswa;
    this.matakuliah = Matakuliah;
    this.prodi = Prodi;
  }

  create = async (data) => {
    return await this.mahasiswa.create(data);
  };

  get = async () => {
    return await this.mahasiswa.findAll();
  };

  getMahasiswaWithMatkul = async (nim) => {
    console.log(this.prodi);
    return await this.mahasiswa.findByPk(nim, {
      include: [
        {
          model: this.matakuliah,
          as: "mata_kuliah",
        },
        {
          model: this.prodi,
          as: "prodi",
        },
      ],
    });
  };

  ambilMahasiswaWithMatkul = async (nim, mkId) => {
    const mahasiswaObj = await this.mahasiswa.findByPk(nim);
    const matakuliahObj = await this.matakuliah.findByPk(mkId);
    await matakuliahObj.addMahasiswa(mahasiswaObj);
  };

  deleteMatkul = async (nim, mkId) => {
    const mahasiswaObj = await this.mahasiswa.findByPk(nim);
    const matakuliahObj = await this.matakuliah.findByPk(mkId);
    await matakuliahObj.removeMahasiswa(mahasiswaObj);
  }
}

module.exports = MahasiswaRepository;
