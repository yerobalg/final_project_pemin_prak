class Route {
  constructor(router, controllers, middleware) {
    this.router = router;
    this.mahasiswa = controllers.mahasiswa;
    this.prodi = controllers.prodi;
    this.middleware = middleware;
  }

  authRoutes = () => {
    // TODO: add login and register routes here

    return this.router;
  }

  protectedRoutes = () => {
    this.router.post("/mahasiswa", this.mahasiswa.create);
    this.router.get("/mahasiswa/:id", this.mahasiswa.get);
    this.router.get("/prodi", this.prodi.get);

    return this.router;
  };
}

module.exports = Route;
