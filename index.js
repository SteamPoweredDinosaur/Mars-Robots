const fs = require("fs-extra")
const fileLocation = process.argv[1] || robots.txt
const { simulateRobots } = require("./src/robotInputInterpreter")

const simulateRobotsTxt = async () => {
  const fileContents = await fs.readFile(process.argv[2] || "robots.txt", "utf-8");
  console.log(simulateRobots(fileContents))
}

simulateRobotsTxt();
