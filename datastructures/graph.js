// Breadth First Seach (BFS)
// CS datastructures in JS
// https://github.com/benoitvallon/computer-science-in-javascript/tree/master/data-structures-in-javascript
//https://www.youtube.com/watch?v=s-CYnVz-uh4

console.log('CREATE A GRAPH IN JS');
//TODO: Create a graph representation in javascript

//TODO: ADD A PARENT AS I GO
class Vertex {

  constructor(name) {
    this.name = name;
    this.edges = [];
  }

  addEdges(edges) {
    this.edges = edges; //An array of vertexes
  }
}

class Graph {

  constructor() {
    this.vertexes = [];
  }

  addVertex(vertex) {
    this.vertexes.push(vertex);
  }

  //DFS

  //TODO: Add Level for shortest path
  transverseBFS(vertexStart) {
    //let s = this.vertexes[0];
    let frontier = [];
    let visited = [];
    let levelCounter = 1;

    frontier.push(vertexStart);
    visited[vertexStart] = true;

    console.log(vertex);
    while(frontier.length) {
      let vertex = frontier.shift();

      for(let i = 0; i < vertex.edges.length; i++) {
        if(!~visited.indexOf(vertex.edges[i])) {
          visited[vertex.edges[i]] = true;

          //TODO: What if there is multiple points
          vertex.edges[i].level = {'level': levelCounter, parent: vertex};

          console.log(vertex.edges[i]);
          frontier.push(vertex.edges[i]);
          if(i === vertex.edges.length - 1) {
            levelCounter++;
          }
        }
      }
    }
  }

  //TODO: Write DFS Visit algorithim
  //TODO: Make sure to include edge cases
  dfsVisit(vertexStart) {
    let visited = [];

    vertexStart.edges.forEach( (vertice) =>  {
      if(!~visited.indexOf(vertice)) {
      console.log(vertice);
      visited[vertice] = true;
      this.dfsVisit(vertice);
    }
  });
  }

  //TODO: Write DFS algorithim
  // Time Cpmplexity: linear  O(V + E)
  dfs() {
    let visited = [];

    console.log('GRAPH VERTEXES');
    console.log(this.vertexes);
    this.vertexes.forEach( (vertice) => {
      console.log('VERTICE');
    console.log(vertice);
    if(!~visited.indexOf(vertice)) {
      visited[vertice] = true;
      this.dfsVisit(vertice);
      console.log('');
    }
  });
  }

}

let graph = new Graph();

let vertex = new Vertex('A');
let vertex1 = new Vertex('B');
let vertex2 = new Vertex('C');
let vertex3 = new Vertex('D');
let vertex4 = new Vertex('E');
let vertex5 = new Vertex('F');
let vertex6 = new Vertex('G');


vertex.addEdges([vertex1, vertex2]);
vertex2.addEdges([vertex3]);
vertex3.addEdges([vertex4]);
vertex5.addEdges([vertex6]);

graph.addVertex(vertex);
graph.addVertex(vertex1);
graph.addVertex(vertex2);
graph.addVertex(vertex3);
graph.addVertex(vertex4);
graph.addVertex(vertex5);
graph.addVertex(vertex6);

graph.transverseBFS(vertex);

console.log('TRANVSVERSE DFS');
graph.dfsVisit(vertex);

console.log('DFS');
graph.dfs();


//TODO: Learn weighted graphs
//TODO: Learn topological sort
//TODO: Learn edge classifications
//TODO: Learn if graph is a cycle

//TODO: Solve rubix cube probelm 2 x 2
