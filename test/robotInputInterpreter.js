const chai = require("chai");
const { simulateRobots, parseRobot } = require("../src/robotInputInterpreter");

const expect = chai.expect;

describe("robotInputInterpreter", () => {
  describe("simulateRobots", () => {
    it("Should succeed on sample input", () => {

      const robotOuput = simulateRobots(
        `5 3
  1 1 E
  RFRFRFRF

  3 2 N
  FRRFLLFFRRFLL

  0 3 W
  LLFFFLFLFL`)

      expect(robotOuput).to.equal(
        `1 1 E
  3 3 N LOST
  2 3 S
  `
      )
    })
  })

  describe("parseRobot", () => {
    it("Should be able to get robot position and command string", () => {
      const robotStringRepresentationLines = "\n3 2 E\n FRRFLLFFRRFLL\nAdditional input to parse".split("\n")
      const {robot, commandString, remainingInput} = parseRobot(robotStringRepresentationLines)
      expect(robot.getPosition().x).to.equal(3)
      expect(robot.getPosition().y).to.equal(2)
      expect(robot.getOrientation()).to.equal("E")
      expect(commandString).to.equal("FRRFLLFFRRFLL")
      expect(remainingInput[0]).to.equal("Additional input to parse")
    })
  })
})
