class Route {
  constructor(router, controllers, middleware) {
    this.router = router;
    this.mahasiswa = controllers.mahasiswa;
    this.middleware = middleware;
  }

  authRoutes = () => {
    // TODO: add login and register routes here

    return this.router;
  }

  protectedRoutes = () => {
    this.router.post("/mahasiswa", this.mahasiswa.create);
    this.router.get("/mahasiswa/:id", this.mahasiswa.get);

    return this.router;
  };
}

module.exports = Route;
