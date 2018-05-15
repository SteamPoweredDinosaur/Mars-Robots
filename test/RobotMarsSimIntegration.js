const chai = require("chai");
const MarsRobotSim = require("../src/MarsRobotSim");
const Robot = require("../src/Robot")

const expect = chai.expect;

const setupGrid = () => {
  const marsRobotSim = new MarsRobotSim({gridSize: {x: 5, y: 3}});
  const robot1 = new Robot({position: {x: 1, y: 1}, orientation: "E" })
  return {
    marsRobotSim, robot1
  }
}

describe("MarsRobotSim", () => {
  it("Should be able to add robot and rotate robot right", () => {
    const { marsRobotSim, robot1 } = setupGrid();
    marsRobotSim.addRobot(robot1);
    robot1.moveRight();
    expect(marsRobotSim.robots[0].getOrientation()).to.equal("S")
  })

  it("Should be able to create grid, add robot, rotate right then move forward", () => {
    const { marsRobotSim, robot1 } = setupGrid();
    marsRobotSim.addRobot(robot1);
    robot1.moveRight();
    robot1.moveForward();

    expect(marsRobotSim.robots[0].getOrientation()).to.equal("S")
    expect(marsRobotSim.robots[0].getPosition().x).to.equal(1);
    expect(marsRobotSim.robots[0].getPosition().y).to.equal(0);
  })
})
