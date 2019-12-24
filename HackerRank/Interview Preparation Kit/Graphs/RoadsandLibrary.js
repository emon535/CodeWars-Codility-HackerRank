"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  // enqueue function
  enqueue(element) {
    // adding element to the queue
    this.items.push(element);
  }

  // dequeue function
  dequeue() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  front() {
    // returns the Front element of
    // the queue without removing it.
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  // isEmpty function
  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }

  // printQueue()
  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}

class Graph {
  constructor(totalNodes) {
    this.totalNodes = totalNodes;
    this.node = new Map();
    this.visitedNodes = new Map();
  }

  // Function to Implement ;

  // AddVertex(v)

  addNewNode(v) {
    // Init a adjacent list with null array
    this.node.set(v, []);
    this.initVisitedNodes(v);
  }

  initVisitedNodes(v) {
    this.visitedNodes.set(v, false);
  }

  // AddEdge(V, E)

  addEdge(v, w) {
    this.node.get(v).push(w);
    this.node.get(w).push(v);
  }
  // printGraph()

  printGraph() {
    let connectedNodes = this.node.keys();
    console.log(this.node.v, connectedNodes);
  }

  // BFS(v)

  BFS(startingNode) {
    let count = 1;
    // create a visited array;
    // let visitedNodes= Array(this.totalNodes).fill(false);

    let nodeQueue = new Queue();
    this.visitedNodes.set(startingNode, true);
    nodeQueue.enqueue(startingNode);
    while (!nodeQueue.isEmpty()) {
      let getQueueElement = nodeQueue.dequeue();
      let connectedNodes = this.node.get(getQueueElement);
      for (let i in connectedNodes) {
        let neighbour = connectedNodes[i];
        // console.log(this.visitedNodes.get(neighbour), neighbour);
        if (!this.visitedNodes.get(neighbour)) {
          this.visitedNodes.set(neighbour, true);
          nodeQueue.enqueue(neighbour);
          count++;
        }
      }
    }
    return count;
  }

  getNeighbourCountForNode(selectedNode) {
    return this.BFS(selectedNode);
  }

  printVisitedNode() {
    console.log(this.visitedNodes);
    console.log("Keys", this.visitedNodes.keys());
  }

  // DFS (v)

  findConnectedForNode(whichNode) {
    console.log(this.node.get(whichNode));
  }
}

// Complete the roadsAndLibraries function below.
function roadsAndLibraries(n, c_lib, c_road, cities) {
  if (c_road >= c_lib) return n * c_lib;

  let sum = 0;
  let count = 0;
  let groups = [];
  let myGraph = new Graph(n);

  for (let i = 1; i <= n; i++) {
    myGraph.addNewNode(i);
  }

  cities.forEach(city => {
    myGraph.addEdge(city[0], city[1]);
  });

  for (let currentNode = 1; currentNode <= n; currentNode++) {
    if (!myGraph.visitedNodes.get(currentNode)) {
      let groupMembersCount = myGraph.getNeighbourCountForNode(currentNode);
      sum += (groupMembersCount - 1) * c_road;
      count++;
    }
  }

  console.log(count);
  sum += count * c_lib;
  console.log(myGraph);
  console.log(sum);
  return sum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const nmC_libC_road = readLine().split(" ");

    const n = parseInt(nmC_libC_road[0], 10);

    const m = parseInt(nmC_libC_road[1], 10);

    const c_lib = parseInt(nmC_libC_road[2], 10);

    const c_road = parseInt(nmC_libC_road[3], 10);

    let cities = Array(m);

    for (let i = 0; i < m; i++) {
      cities[i] = readLine()
        .split(" ")
        .map(citiesTemp => parseInt(citiesTemp, 10));
    }

    const result = roadsAndLibraries(n, c_lib, c_road, cities);

    ws.write(result + "\n");
  }

  ws.end();
}
