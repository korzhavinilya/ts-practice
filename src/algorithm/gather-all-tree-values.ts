const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }],
    },
    {
      value: 4,
      children: [{ value: 5 }, { value: 6 }],
    },
  ],
};

console.log(getTreeValuesRecursive(tree));
// console.log(getTreeValuesStack(tree));

function getTreeValuesRecursive(tree: any) {
  let values: number[] = [];

  if (tree.value) {
    values.push(tree.value);
  }

  if (tree.children?.length) {
    for (const child of tree.children) {
      values = [...values, ...getTreeValuesRecursive(child)];
    }
  }

  return values;
}

function getTreeValuesStack(tree: any) {
  const values: number[] = [];
  const stack = [tree];

  while (stack.length > 0) {
    const node = stack.pop();

    if (node.value) {
      values.push(node.value);
    }

    if (node.children?.length) {
      stack.push(...node.children);
    }
  }

  return values;
}
