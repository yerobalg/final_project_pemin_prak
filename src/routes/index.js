class Route {
  constructor(router, controllers, middleware) {
    this.router = router;
    this.mahasiswa = controllers.mahasiswa;
    this.prodi = controllers.prodi;
    this.matakuliah = controllers.matakuliah;
    this.middleware = middleware;
  }

  authRoutes = () => {
    // TODO: add login and register routes here
    this.router.post("/register", this.mahasiswa.create);
    this.router.post("/login", this.mahasiswa.login);

    return this.router;
  };

  protectedRoutes = () => {
    this.router.post(
      "/mahasiswa/:nim/matakuliah/:mkId",
      this.middleware.authMiddleware,
      this.mahasiswa.ambilMatkul
    );
    this.router.put(
      "/mahasiswa/:nim/matakuliah/:mkId",
      this.middleware.authMiddleware,
      this.mahasiswa.deleteMatkul
    );
    this.router.get(
      "/mahasiswa/profile",
      this.middleware.authMiddleware,
      this.mahasiswa.profile
    );
    this.router.get("/mahasiswa/:nim", this.mahasiswa.ambilMahasiswaWithMatkul);
    this.router.get("/mahasiswa/", this.mahasiswa.ambilSeluruhMahasiswa);

    this.router.get("/prodi", this.prodi.get);

    this.router.post(
      "/matakuliah",
      this.middleware.authMiddleware,
      this.matakuliah.create
    );
    this.router.get("/matakuliah", this.matakuliah.getAll);
    return this.router;
  };
}

module.exports = Route;
