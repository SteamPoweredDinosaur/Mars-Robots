class MarsRobotSim {
  
  constructor({gridSize}) {
    this.gridSize = gridSize;
    this.robots = [];
  }

  addRobot(robot) {
    this.robots.push(robot)
  }
}

module.exports = MarsRobotSim;
