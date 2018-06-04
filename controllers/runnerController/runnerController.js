const Joi = require("joi");

let runnerController = (Runner) => {
    runnerModel = Runner.runnerModel;
    runnerSchema = Runner.runnerSchema
    
    const postRunner = (req, res) => {
        
        // Returning an http status of 400 and the error from Joi if the client sent an incorrrect data
        const result = Joi.validate(req.body, runnerSchema);
        if(result.error) return res.status(400).send(result.error.details[0].message);

        let runner = new runnerModel(req.body);
        runner.save();
        res.status(201).send(runner);
    }

    const getAllRunners = (req, res) => {
        let query = {};
        if (req.query.runnerType) {
          query.runnerType = req.query.runnerType;
        }
  
        runnerModel.find(query, (err, runners) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(runners);
          }
        });
      }

      let getSpecificRunner = (req, res) => {
        res.json(req.runner);
      }

    const putSpecificRunner = (req, res) => {
        req.runner.name = req.body.name;
        req.runner.age = req.body.age;
        req.runner.runnerType = req.body.runnerType;
        req.runner.worldRecord = req.body.worldRecord;
        req.runner.save((err) => {
          if (err) {
              // If error while saving data send the error
              res.status(500).send(err);
          } else {
              res.send(req.runner);
          }
      });
    }

    const patchSpecificRunner = (req, res) => {
        if(req.body.id)
            delete req.body._id;

        //Javascript For in >> For each property in the object do something and that property can be acessed by: req.body[p]
        for(let p in req.body){
            req.runner[p] = req.body[p];
        }
        req.runner.save((err) => {
            if (err) {
                // If error while saving data send the error
                res.status(500).send(err);
            } else {
                res.send(req.runner);
            }
        })
    }

    const deleteSpecificRunner = (req, res) => {
        req.runner.remove((err) => {
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(204).send(`Runner with ID ${req.params.runnerId} was deleted`);
            }
        });
    }
  

    // Revealing Module Pattern
    return {
        postRunner: postRunner,
        getAllRunners: getAllRunners,
        getSpecificRunner: getSpecificRunner,
        putSpecificRunner: putSpecificRunner,
        patchSpecificRunner: patchSpecificRunner,
        deleteSpecificRunner: deleteSpecificRunner
    }
};

module.exports = runnerController;