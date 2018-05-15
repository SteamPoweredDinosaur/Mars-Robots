const chai = require("chai");
const { parseRobot, parseRobotsAndGrid } = require("../src/robotParser");

const expect = chai.expect;

describe("robotParser", () => {
  describe("parseRobotsAndGrid", () => {
    it("Should parse sample input", () => {

      const parsedRobotsAndGrid = parseRobotsAndGrid(
        `5 3
  1 1 E
  RFRFRFRF

  3 2 N
  FRRFLLFFRRFLL

  0 3 W
  LLFFFLFLFL`)

      expect(parsedRobotsAndGrid.marsRobotSim.gridSize.x).to.equal(5)
      expect(parsedRobotsAndGrid.marsRobotSim.gridSize.y).to.equal(3)
      expect(parsedRobotsAndGrid.robotsWithCommands.length).to.equal(3)

      expect(parsedRobotsAndGrid.robotsWithCommands[0].robot.getPosition().x).to.equal(1)
      expect(parsedRobotsAndGrid.robotsWithCommands[0].robot.getPosition().y).to.equal(1)
      expect(parsedRobotsAndGrid.robotsWithCommands[0].robot.getOrientation()).to.equal("E")
      expect(parsedRobotsAndGrid.robotsWithCommands[0].commandString).to.equal("RFRFRFRF")

      expect(parsedRobotsAndGrid.robotsWithCommands[1].robot.getPosition().x).to.equal(3)
      expect(parsedRobotsAndGrid.robotsWithCommands[1].robot.getPosition().y).to.equal(2)
      expect(parsedRobotsAndGrid.robotsWithCommands[1].robot.getOrientation()).to.equal("N")
      expect(parsedRobotsAndGrid.robotsWithCommands[1].commandString).to.equal("FRRFLLFFRRFLL")

      expect(parsedRobotsAndGrid.robotsWithCommands[2].robot.getPosition().x).to.equal(0)
      expect(parsedRobotsAndGrid.robotsWithCommands[2].robot.getPosition().y).to.equal(3)
      expect(parsedRobotsAndGrid.robotsWithCommands[2].robot.getOrientation()).to.equal("W")
      expect(parsedRobotsAndGrid.robotsWithCommands[2].commandString).to.equal("LLFFFLFLFL")
    })
  })

  describe("parseRobot", () => {
    it("Should be able to get robot position, command string and return remaining input", () => {
      const robotStringRepresentationLines = "\n3 2 E\n FRRFLLFFRRFLL\n3 2 N\nFRRFLLFFRRFLL".split("\n")
      const {robot, commandString, remainingInput} = parseRobot(robotStringRepresentationLines)
      expect(robot.getPosition().x).to.equal(3)
      expect(robot.getPosition().y).to.equal(2)
      expect(robot.getOrientation()).to.equal("E")
      expect(commandString).to.equal("FRRFLLFFRRFLL")
      //TODO: Use chai's array comparision here
      expect(remainingInput[0]).to.equal("3 2 N")
      expect(remainingInput[1]).to.equal("FRRFLLFFRRFLL")
    })
  })
})
