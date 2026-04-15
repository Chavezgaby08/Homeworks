export interface NodeData {
  id: number;
  name: string;
  type: "folder" | "file";
  user: string;
}

export class TreeNode {

  value: NodeData;
  children: TreeNode[];

  constructor(value: NodeData) {
    this.value = value;
    this.children = [];
  }

  addChild(node: TreeNode) {
    if (this.value.type === "file") {
      return;
    }
    this.children.push(node);
  }
}

export class Tree {

  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  setRoot(node: TreeNode) {
    this.root = node;
  }

  findNode(id: number, current: TreeNode | null = this.root): TreeNode | null {
    if (!current) return null;

    if (current.value.id === id) return current;

    for (let child of current.children) {
      const found = this.findNode(id, child);
      if (found) return found;
    }

    return null;
  }
}