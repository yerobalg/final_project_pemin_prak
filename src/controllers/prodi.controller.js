class ProdiController {
    constructor(prodiRepository, response) {
      this.prodiRepository = prodiRepository;
      this.response = response;
    }
  
    create = async (req, res, next) => {
      const { body } = req;
      try {
        const prodi = await this.prodiRepository.create(body);
        this.response.success(
          res,
          200,
          "Prodi berhasil ditambahkan",
          prodi
        );
      } catch (error) {
        next(error);
      }
    };
  
    get = async (req, res,next) => {
      try {
        const prodi = await this.prodiRepository.getAll();
        this.response.success(res, 200, "Berhasil mendapatkan data", prodi);
      } catch (error) {
        next(error);
      }
    };
  }
  
  module.exports = ProdiController;
  