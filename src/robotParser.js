const MarsRobotSim = require("./MarsRobotSim")
const Robot = require("./Robot")

const parseRobot = (inputLines) => {

  if(inputLines[0].trim() == "") {
    return parseRobot(inputLines.slice(1))
  } 

  const positionParts = inputLines[0].trim().split(" ")
  const positionX = Number(positionParts[0])
  const positionY = Number(positionParts[1])
  const orientation = positionParts[2]
  
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

const parseRobotsAndGrid = (robotsInput) => {
  const robotsLines = robotsInput.split("\n");
  const gridSize = robotsLines[0].split(" ");
  const gridSizeX = Number(gridSize[0]);
  const gridSizeY = Number(gridSize[1]);

  const marsRobotSim = new MarsRobotSim({gridSize: {x: gridSizeX, y: gridSizeY}});

  let robotsWithCommands = []

  let remainingInput = robotsLines.slice(1)

  while(remainingInput.length > 1) {
    let nextRobot = parseRobot(remainingInput);
    robotsWithCommands.push({
      robot: nextRobot.robot,
      commandString: nextRobot.commandString
    })
    remainingInput = nextRobot.remainingInput;
  } 

  return {marsRobotSim, robotsWithCommands};
}

module.exports =  { parseRobotsAndGrid, parseRobot };
