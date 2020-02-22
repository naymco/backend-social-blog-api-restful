const { createContainer, asClass, asValue, asFunction } = require("awilix");

// Config
const config = require("../Config");
const app = require(".");

// Servicios
const { HomeService } = require("../Services");

// Controllers
const { HomeController } = require("../Controllers");

// Routes
const { HomeRoutes } = require("../Routes/index.routes");
const Routes = require("../Routes");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    HomeService: asClass(HomeService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
  });

module.exports = container;
