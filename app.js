// BFS Algorithm Implementation for Multi-Target Pathfinding

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let grid = [];
let start = { x: 0, y: 0 };
let targets = [{ x: 10, y: 10 }, { x: 15, y: 15 }];
let steps = 0;

// Initialize the grid
function initGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < cols; j++) {
            grid[i][j] = 0; // 0 represents an empty cell
        }
    }
}

// BFS Algorithm
function bfs(start, targets) {
    let queue = [start];
    let visited = new Set();
    visited.add(start.x + ',' + start.y);

    while (queue.length) {
        steps++;
        let current = queue.shift();
        ctx.fillStyle = 'black';
        ctx.fillRect(current.x * 20, current.y * 20, 20, 20); // Visualize

        if (targets.some(target => target.x === current.x && target.y === current.y)) {
            return true; // Found one of the targets
        }

        for (let [dx, dy] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            let neighbor = { x: current.x + dx, y: current.y + dy };
            if (isValid(neighbor, visited)) {
                queue.push(neighbor);
                visited.add(neighbor.x + ',' + neighbor.y);
            }
        }
    }
    return false; // No targets found
}

// Validate cell
function isValid(cell, visited) {
    return cell.x >= 0 && cell.y >= 0 && cell.x < grid.length && cell.y < grid[0].length && !visited.has(cell.x + ',' + cell.y);
}

// Step Counter
function displaySteps() {
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Steps: ${steps}`, 10, 20);
}

// Replay functionality
function replay() {
    steps = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    initGrid(20, 20);
    bfs(start, targets);
    displaySteps();
}

// Start the script
initGrid(20, 20);
bfs(start, targets);
displaySteps();