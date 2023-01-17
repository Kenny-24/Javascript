// 广度优先搜索
const bfs = (head) => {
  if (!head) return [];
  const result = [];
  const temp = [head];
  while (temp.length > 0) {
    const node = temp.shift();
    result.push(node);
    if (node.children && node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        result.push(node.children[i]);
      }
    }
  }
  return result;
};
