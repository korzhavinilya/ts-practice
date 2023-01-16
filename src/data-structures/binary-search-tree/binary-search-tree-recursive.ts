import { BinarySearchTree } from './interfaces/binary-search-tree.interface';
import { TreeNode } from './tree-node';

export class BinarySearchTreeRecursive<T> implements BinarySearchTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    this.root = this.insertNode(this.root, value);
  }

  protected insertNode(node: TreeNode<T> | null, value: T) {
    if (!node) {
      return new TreeNode(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else {
      node.right = this.insertNode(node.right, value);
    }

    return node;
  }
}
