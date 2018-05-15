const chai = require("chai");
const MarsRobotSim = require("../src/MarsRobotSim");
const Robot = require("../src/Robot")

const expect = chai.expect;

describe("Robot", () => {
  it("Should be able to initialize robot with orientation", () => {
    const robot1 = new Robot({position: {x: 1, y: 1}, orientation: "E" })
    expect(robot1.getOrientation()).to.equal("E")
  })

  it("Should be to rotate from West to North", () => {
    const robot1 = new Robot({position: {x: 1, y: 1}, orientation: "W" })
    robot1.moveRight();
    expect(robot1.getOrientation()).to.equal("N")
  })

  it("Should be to rotate from North to East", () => {
    const robot1 = new Robot({position: {x: 1, y: 1}, orientation: "N" })
    robot1.moveRight();
    expect(robot1.getOrientation()).to.equal("E")
  })

  it("Should be to rotate from North to West", () => {
    const robot1 = new Robot({position: {x: 1, y: 1}, orientation: "N" })
    robot1.moveLeft();
    expect(robot1.getOrientation()).to.equal("W")
  })

  it("Should be to rotate from East to North", () => {
    const robot1 = new Robot({position: {x: 1, y: 1}, orientation: "E" })
    robot1.moveLeft();
    expect(robot1.getOrientation()).to.equal("N")
  })

  it("Should be able to move forward whilst pointing North", () => {
    const robot1 = new Robot({position: {x: 1, y: 1}, orientation: "N" })
    robot1.moveForward();
    expect(robot1.getPosition().x).to.equal(1)
    expect(robot1.getPosition().y).to.equal(2)
  })

  it("Should be able to move forward whilst pointing South", () => {
    const robot1 = new Robot({position: {x: 1, y: 1}, orientation: "S" })
    robot1.moveForward();
    expect(robot1.getPosition().x).to.equal(1)
    expect(robot1.getPosition().y).to.equal(0)
  })

  it("Should be able to move forward whilst pointing West", () => {
    const robot1 = new Robot({position: {x: 1, y: 1}, orientation: "W" })
    robot1.moveForward();
    expect(robot1.getPosition().x).to.equal(0)
    expect(robot1.getPosition().y).to.equal(1)
  })

  it("Should be able to move forward whilst pointing East", () => {
    const robot1 = new Robot({position: {x: 1, y: 1}, orientation: "E" })
    robot1.moveForward();
    expect(robot1.getPosition().x).to.equal(2)
    expect(robot1.getPosition().y).to.equal(1)
  })
})
