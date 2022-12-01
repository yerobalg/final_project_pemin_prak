class ProdiRepository {
  constructor(Prodi) {
    this.prodi = Prodi;
  }

  create = async (data) => {
    return await this.prodi.create(data);
  };

  getAll = async () => {
    return await this.prodi.findAll();
  };
}

module.exports = ProdiRepository;
