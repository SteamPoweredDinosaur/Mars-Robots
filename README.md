# Mars Robots

## This Repository
I started by creating tests for the integration between MarsRobotSim and Robot, some unit tests for the Robot and implementing the grid movement.

I then wrote a parser for the input which creates a grid and the robot. 


## Running Tests
```
npm install -g mocha
npm install
mocha
```

## Next Steps


Then next steps would be to 

1. For each robot parsed in turn iterate the "command string" and call the movement functions on the robot. 

2. Writing a test for the sample input I would expect it to fail due to lack of "LOST" functionality

3. Add basic "LOST" functionality based on movement outside of the grid

4. Write a second test with an input where two robots attempt to leave the grid in the same place ("scent" functionality)

5. Add additional logic to track points where "scent" has been placed and update movement logic based on this to allow tests involving scent functionality to pass.
