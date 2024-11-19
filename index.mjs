function knightMoves(start, end) {
    /**
     * Initialize queue with "start"
     * While queue is not empty
     *   Dequeue next coordinate array
     *   If last item in coordinate array is "end", return coordinate array
     *   Calculate all valid moves from last item in coordinate array
     *   For each valid move, append to coordinate array and enqueue
     */

    const queue = new Array([start]);
    while (queue.length > 0) {
        const currentPath = queue.shift();
        const lastCoordinateInPath = currentPath[currentPath.length - 1];
        if (lastCoordinateInPath[0] === end[0] && lastCoordinateInPath[1] === end[1]) {
            return currentPath;
        }
        getValidKnightMovesForCoordinate(lastCoordinateInPath[0], lastCoordinateInPath[1]).forEach((coordinate) => {
            const backtrackCoordinate = currentPath[currentPath.length - 2];
            if (backtrackCoordinate === undefined || backtrackCoordinate === null || coordinate[0] !== backtrackCoordinate[0] || coordinate[1] !== lastCoordinateInPath[1]) {
                queue.push([...currentPath, coordinate]);
            }
        });
    }
}

function getValidKnightMovesForCoordinate(x, y) {
    let validKnightMoves = new Array();
    validKnightMoves.push([x + 2, y - 1], [x + 1, y - 2], [x - 1, y - 2], [x - 2, y - 1], [x - 2, y + 1], [x - 1, y + 2], [x + 1, y + 2], [x + 2, y + 1]);
    validKnightMoves = validKnightMoves.filter((coordinate) => coordinate[0] >= 0 && coordinate[0] <= 7 && coordinate[1] >= 0 && coordinate[1] <= 7);

    return validKnightMoves;
}

// console.log(getValidKnightMovesForCoordinate(0, 7));
// console.log(getValidKnightMovesForCoordinate(3, 3));
// console.log(getValidKnightMovesForCoordinate(0, 0));
// console.log(getValidKnightMovesForCoordinate(7, 0));
// console.log(getValidKnightMovesForCoordinate(7, 7));

console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([0, 0], [7, 7]));
console.log(knightMoves([3, 3], [4, 3]));