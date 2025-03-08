# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

My method iterates through the number of rows and columns of the adjacency matrix by using two
nested for loops. Since the matrix is a square matrix with a number of rows equal to the number 
of vertices, my algorithm only depends on the number of vertices and has a complexity of $\Theta(|V|^2)$

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

My method iterates through the number of rows of the adjacency list and then iterates through
the number of values in each of those rows. Each row represents a vertex. Each value inside each
row represents an edge. Therefore, the algorithm depends both on the number of vertices and edges. 
While the loops are nested, each edge will only be visited once. As a result, the algorithm will 
iterate through the total number of vertices and the total number of edges, giving us a complexity of 
$\Theta(|V| + |E|)$

"I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice."
