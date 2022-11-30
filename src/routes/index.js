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
    this.router.get("/mahasiswa/:id", this.mahasiswa.get);
    this.router.post("/matakuliah", this.matakuliah.create)
    this.router.get("/matakuliah", this.matakuliah.getAll)
    return this.router;
  };
}

module.exports = Route;
