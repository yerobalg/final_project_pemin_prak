const express = require("express");
const db = require("./db");
const Repository = require("./src/repositories");
const Controller = require("./src/controllers");
const Route = require("./src/routes");
const Middleware = require("./src/middlewares");
const Util = require("./utils");

// Init util
const util = new Util();

// Init repository
const repositories = new Repository(db);

// Init controller
const controllers = new Controller(repositories, util.response);

// Init middleware
const middleware = new Middleware(util.response);

// Init route
const route = new Route(express.Router(), controllers);

// Init app
const app = express();
app.use(express.json());
app.use("api/v1/auth", route.authRoutes());
app.use("/api/v1/", route.protectedRoutes());
app.use(middleware.errorHandler);
app.use(middleware.notFoundHandler);

app.listen(8080, async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("database connected");

    console.log("server running on port 8080");
  } catch (error) {
    console.log(error);
  }
});
