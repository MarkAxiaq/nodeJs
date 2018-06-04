const should = require("should");
const sinon = require("sinon");
const Joi = require("joi");

describe('Runner Controller Tests', () =>{
    describe('postRunner test', () =>{
        // Arrange Common Stuff
        const Runner = function(runner){ 
            this.save = () => {};
        }
        let runnerController = require('./runnerController')(Runner);

        // it('should not allow required properties to be empty', () => {
        //     // Arrange
        //     let req = {
        //         body: {
        //             age: 12
        //         }
        //     }
        //     let res = {
        //         status: sinon.spy(),
        //         send: sinon.spy()
        //     }

        //     // Act
        //     runnerController.postRunner(req, res);

        //     // Assert
        //     res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
        // })

        // it('should return status 201 if everything is fine', () => {
        //     // Arrange
        //     let req = {
        //         body: {
        //             name: 'Mark',
        //             age: 12,
        //             runnerType: 'Long Distance'
        //         }
        //     }
        //     let res = {
        //         status: sinon.spy(),
        //         send: sinon.spy()
        //     }

        //     // Act
        //     runnerController.postRunner(req, res);

        //     // Assert
        //     res.status.calledWith(201).should.equal(true, '201 Status ' + res.status.args[0][0]);
        // })
    })
})