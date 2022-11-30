class Route {
  constructor(router, controllers, middleware) {
    this.router = router;
    this.mahasiswa = controllers.mahasiswa;
    this.matakuliah = controllers.matakuliah;
    this.middleware = middleware;
  }

  authRoutes = () => {
    // TODO: add login and register routes here

    return this.router;
  }

  protectedRoutes = () => {
    this.router.post("/mahasiswa", this.mahasiswa.create);
    this.router.put("/mahasiswa/:nim/matakuliah/:mkId", this.mahasiswa.ambilMatkul);
    this.router.get("/mahasiswa/:nim", this.mahasiswa.ambilMahasiswaWithMatkul);
    this.router.get("/mahasiswa/", this.mahasiswa.ambilSeluruhMahasiswa);

    this.router.post("/matakuliah", this.matakuliah.create)
    this.router.get("/matakuliah", this.matakuliah.getAll)
    return this.router;
  };
}

module.exports = Route;
