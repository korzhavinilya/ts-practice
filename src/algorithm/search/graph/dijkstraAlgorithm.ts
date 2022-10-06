//Not complete

function dijkstraAlgorithm(graph: any, start: string, end: string) {
  const costs = [];
  const processed = [];
  const neighbors = {};

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 10000000000000;
    }
  });

  let node = findLowestCostNode(costs, processed);
}

function findLowestCostNode(costs: any[], processed: any[]) {
  let lowestCost = 10000000000000;
  let lowestNode;
  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
}

export { dijkstraAlgorithm };
