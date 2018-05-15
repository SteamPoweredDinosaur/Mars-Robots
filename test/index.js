const chai = require("chai");
const MarsRobotSim = require("../src/MarsRobotSim");
const Robot = require("../src/Robot")

const expect = chai.expect;

describe("MarsRobotSim", () => {
  it("Should be able to add robot and rotate robot right", () => {
    const marsRobotSim = new MarsRobotSim({gridSize: {x: 5, y: 3}});
    const robot1 = new Robot({position: {x: 1, y: 1}, orientation: "E" })
    marsRobotSim.addRobot(robot1);
    robot1.moveRight();
    expect(marsRobotSim.robots[0].getOrientation()).to.equal("S")
  })
})
