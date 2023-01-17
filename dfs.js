// 深度优先搜索

const dfs = (head) => {
  if (!head) return [];
  const result = [];
  const temp = [head];
  while (temp.length > 0) {
    const node = temp.pop();
    result.push(node);
    if (node.children && node.children.length > 0) {
      for (let i = node.children.length; i > -1; i--) {
        temp.push(node);
      }
    }
  }
};
