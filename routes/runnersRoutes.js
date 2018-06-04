const express = require("express");

let routes = Runner => {
  let runnersRouter = express.Router();
  let runnerController = require('../controllers/runnerController/runnerController')(Runner);

  runnersRouter
    .route("/")
    // Route: /api/runners >> Body: {name, age, runnerType, worldRecord}
    .post(runnerController.postRunner)
    // Route: /api/runners OR /api/runners?runnerType=Short Distance
    .get(runnerController.getAllRunners);

  // .use >> For every route with runnerId ("/:runnerId") >> We are going to do this middleware/ interceptor
  runnersRouter.use("/:runnerId", (req, res, next) => {
    // Find the runner by id
    Runner.runnerModel.findById(req.params.runnerId, (err, runner) => {
      if (err) {
        // If error send the error
        res.status(500).send(err);
      } else if (runner) {
        // If runner is found we add it to the request body and continue
        req.runner = runner;
        next();
      } else {
        // If runner not found send not found
        res.status(404).send("No Runner found");
      }
    });
  });
  
  runnersRouter
    .route("/:runnerId")
    // Route: /api/runners/1
    .get(runnerController.getSpecificRunner)
    // Route: /api/runners/1 >> Body: {name, age, runnerType, worldRecord}
    .put(runnerController.putSpecificRunner)
    // Route: /api/runners/1 >> Body: {name, age, runnerType, worldRecord}
    .patch(runnerController.patchSpecificRunner)
    // Route: /api/runners/1
    .delete(runnerController.deleteSpecificRunner);
  return runnersRouter;
};

module.exports = routes;
