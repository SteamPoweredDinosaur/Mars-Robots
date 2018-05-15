const MarsRobotSim = require("./MarsRobotSim")
const Robot = require("./Robot")

const parseRobot = (inputLines) => {

  if(inputLines.length === 0) {
    return null;
  }

  if(inputLines[0].trim() == "") {
    console.log(inputLines.slice(1))
    return parseRobot(inputLines.slice(1))
  } 

  const positionParts = inputLines[0].split(" ")
  const positionX = Number(positionParts[0])
  const positionY = Number(positionParts[1])
  const orientation = positionParts[2]

  console.log(orientation)
  
  const robot = new Robot({position: {x: positionX, y: positionY}, orientation: orientation})

  const commandString = inputLines[1].trim()


  //TODO: Would be good too extend this parser to keep track of line numbers and give a more helpful
  // error here
  if(!commandString.match(/^[LFR]*$/)) {
    throw Error(`Not a command string ${commandString}`)
  }

  return {
    robot, commandString, 
    "remainingInput": inputLines.slice(2)
  }

} 

const simulateRobots = (robotsInput) => {
  const robotsLines = robotsInput.split("\n");
  const gridSize = robotsLines[0].split(" ");
  const gridSizeX = Number(gridSize[0]);
  const gridSizeY = Number(gridSize[1]);

  const marsRobotSim = new MarsRobotSim({gridSize: {x: gridSizeX, y: gridSizeY}});

  const nextRobot = parseRobot(robotsLines.slice(1));
}

module.exports =  { simulateRobots, parseRobot };
