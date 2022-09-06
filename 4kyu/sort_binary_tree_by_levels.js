function treeByLevels(rootNode) {
  const output = [];

  if (rootNode) {
    const queue = [];
    queue.push(rootNode);
    while (queue.length) {
      const node = queue.shift();
      output.push(node.value);

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  return output;
}
