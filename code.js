function convertToAdjList(adjMatrix) {
    var adjList = [];
    for (var i = 0; i < adjMatrix.length; i++) {
        adjList.push([]);
        for (var j = 0; j < adjMatrix.length; j++) {
            if (adjMatrix[i][j]) {
                adjList[i].push(j)
            }  
        }
    }
    return adjList;
}

function convertToAdjMatrix(adjList) {
    var adjMatrix = []
    for (var i = 0; i < adjList.length; i++) {
        adjMatrix.push(new Array(adjList.length).fill(0));
        for (var j = 0; j < adjList[i].length; j++) {
            adjMatrix[i][adjList[i][j]] = 1
        }
    }
    return adjMatrix;
}