const chai = require("chai");
const simulateRobots = require("../src/robotInputInterpreter");

const expect = chai.expect;

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
