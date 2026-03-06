# RouteMaster Project

## Description
RouteMaster is an innovative solution designed to streamline route planning and optimization for various applications, enabling users to efficiently compute routes based on multi-target criteria in real-time.

## Features
- Multi-target route planning
- Real-time updates and adjustments
- User-friendly interface
- Integration with existing mapping services

## Usage Instructions
1. Clone the repository: `git clone https://github.com/gphbalaji579-hitesh/RouteMaster-Hackathon-`
2. Navigate to the project directory: `cd RouteMaster-Hackathon-`
3. Install required dependencies: `npm install`
4. Start the application: `npm start`

## Sample JSON Input
```json
{
  "targets": [
    { "latitude": 37.7749, "longitude": -122.4194 },
    { "latitude": 34.0522, "longitude": -118.2437 }
  ],
  "start": { "latitude": 36.1699, "longitude": -115.1398 }
}
```

## BFS Multi-Target Logic Explanation
The BFS (Breadth-First Search) algorithm is employed to efficiently locate the shortest path in a graph or a spatial area. In a multi-target scenario:
1. The algorithm initiates at a start point and explores neighboring nodes. 
2. Each target is treated as a node in the search space.
3. The algorithm ensures that the paths to all targets are evaluated simultaneously, allowing for the computation of the optimal route that visits multiple points in the least amount of time.
4. By using BFS, the system can quickly adapt to real-time changes, such as traffic conditions or route diversions, providing an updated route plan dynamically.