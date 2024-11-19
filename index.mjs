function knightMoves(start, end) {
    /**
     * Initialize queue with "start"
     * While queue is not empty
     *   Dequeue next coordinate array
     *   If last item in coordinate array is "end", return coordinate array
     *   Calculate all valid moves from last item in coordinate array
     *   For each valid move, append to coordinate array and enqueue
     */
}

function getValidKnightMovesForCoordinate(x, y) {
    let validKnightMoves = new Array();
    validKnightMoves.push([x + 2, y - 1], [x + 1, y - 2], [x - 1, y - 2], [x - 2, y - 1], [x - 2, y + 1], [x - 1, y + 2], [x + 1, y + 2], [x + 2, y + 1]);
    validKnightMoves = validKnightMoves.filter((coordinate) => coordinate[0] >= 0 && coordinate[0] <= 7 && coordinate[1] >= 0 && coordinate[1] <= 7);

    return validKnightMoves;
}

console.log(getValidKnightMovesForCoordinate(0, 7));
console.log(getValidKnightMovesForCoordinate(3, 3));
console.log(getValidKnightMovesForCoordinate(0, 0));
console.log(getValidKnightMovesForCoordinate(7, 0));
console.log(getValidKnightMovesForCoordinate(7, 7));