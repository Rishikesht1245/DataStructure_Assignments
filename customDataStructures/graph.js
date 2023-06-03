class Graph{
      constructor(){
            this.adjacencyList = {};
      }

      addVertex(vertex){
            // if key is doesn't exists
            if(!this.adjacencyList[vertex]){
                  this.adjacencyList[vertex] = new Set();
            }
      }

      addEdge(vertex1, vertex2){
            // creating vertexes if it doesn't exists
            if(!this.adjacencyList[vertex1]){
                  this.addVertex(vertex1);
            }
            if(!this.adjacencyList[vertex2]){
                  this.addVertex(vertex2);
            }
            // creating the edges vertex1 has edge to vertex2 likewise.
            // if A has edge to B then, B also has edge to B that's why used two add methods
            this.adjacencyList[vertex1].add(vertex2);
            this.adjacencyList[vertex2].add(vertex1);
      }
      // method to check if two vertecies have edge or not
      hasEdge(vertex1, vertex2){
            // has is a mehtod present in set data structure
            return (this.adjacencyList[vertex1].has(vertex2) && 
                    this.adjacencyList[vertex2].has(vertex1))        
      }

      //method to delete an edge and vertex from a graph
      removeEdge(vertex1, vertex2){
            // delete the edges from the graph
            this.adjacencyList[vertex1].delete(vertex2);
            this.adjacencyList[vertex2].delete(vertex1);
      }

      removeVertex(vertex){
            if(!this.adjacencyList[vertex]){
                  return;
            }
            for(let adjacentVertex of this.adjacencyList[vertex]){
                  this.removeEdge(vertex,adjacentVertex);
            }
            delete this.adjacencyList[vertex];
      }


      display(){
            for(let vertex in this.adjacencyList){
                  // spred operator is used to convert the vertexes into array
                  console.log(vertex + '=>' +[...this.adjacencyList[vertex]]);
            }
      }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge("A","B");
graph.addEdge("B","C");

graph.display();

console.log(graph.hasEdge("A","C"));
console.log("-------- After Removal ---------");

graph.removeVertex("B"); // connection bw A and B will be removed
graph.display();


