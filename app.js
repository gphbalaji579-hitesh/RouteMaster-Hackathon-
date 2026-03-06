// BFS Pathfinding Algorithm Implementation in JavaScript

// BFS class to encapsulate functionality
class BFS {
    constructor(grid, targets) {
        this.grid = grid;           // 2D array representing the canvas grid
        this.targets = targets;     // List of target positions
        this.visited = [];          // Visited nodes
        this.path = [];             // Path taken
        this.stepCounter = 0;       // Step count for animation
    }

    // Perform BFS to find paths to all targets
    findPaths() {
        let queue = [];
        const start = this.getStartPosition();
        queue.push(start);
        this.visited.push(start);

        while (queue.length > 0) {
            let current = queue.shift();
            this.path.push(current);

            if (this.targets.includes(current)) {
                this.targets.splice(this.targets.indexOf(current), 1); // Remove the target once found
                this.stepCounter++;
                this.updateStepCounter(); // Update step counter
            }

            const neighbors = this.getNeighbors(current);
            for (const neighbor of neighbors) {
                if (!this.visited.includes(neighbor) && this.isWalkable(neighbor)) {
                    queue.push(neighbor);
                    this.visited.push(neighbor);
                }
            }
        }
    }

    // Get valid neighboring positions
    getNeighbors(position) {
        const [x, y] = position;
        const neighbors = [];

        // 4-directional movement
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (this.isValidPosition(newX, newY)) {
                neighbors.push([newX, newY]);
            }
        }
        return neighbors;
    }

    // Check boundaries and walkable cells
    isValidPosition(x, y) {
        return (x >= 0 && y >= 0 && x < this.grid.length && y < this.grid[0].length);
    }

    // Check if the cell can be walked on
    isWalkable(position) {
        return this.grid[position[0]][position[1]] === 0; // 0 indicates walkable, 1 indicates obstacle
    }

    // Get the starting position (hardcoded as [0, 0] for simplicity)
    getStartPosition() {
        return [0, 0]; // Adjust this based on your needs
    }

    // Update step counter function
    updateStepCounter() {
        document.getElementById('step-counter').innerText = `Step ${this.stepCounter}/${this.path.length}`;
    }

    // Replay functionality
    replay() {
        this.resetPathfinding();
        this.findPaths(); // Restart the algorithm
    }
}

// Create a new BFS instance and initialize the pathfinding
const grid = [[0, 0, 1], [0, 1, 0], [0, 0, 0]]; // Example grid
const targets = [[2, 2], [1, 0]]; // Example targets
const bfs = new BFS(grid, targets);
bfs.findPaths();

// Visualization logic (to be implemented separately)
// function drawGrid() {} // Placeholder for grid drawing
// function animatePath() {} // Placeholder for path animation.