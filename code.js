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
