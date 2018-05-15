const fs = require("fs-extra")
const fileLocation = process.argv[1] || robots.txt
const { parseRobotsAndGrid } = require("./src/robotParser")

const simulateRobotsTxt = async () => {
  const fileContents = await fs.readFile(process.argv[2] || "robots.txt", "utf-8");
  console.log(parseRobotsAndGrid(fileContents))
}

simulateRobotsTxt();
