class MatakuliahRepository {
  constructor(Matakuliah) {
    this.Matakuliah = Matakuliah;
  }

  create = async (judul) => {
    return await this.Matakuliah.create({
      nama: judul,
    });
  };

  getAll = async () => {
    return await this.Matakuliah.findAll();
  };
}

module.exports = MatakuliahRepository;
