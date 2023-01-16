import { BinarySearchTree } from './interfaces/binary-search-tree.interface';
import { TreeNode } from './tree-node';

export class BinarySearchTreeIterative<T> implements BinarySearchTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current: TreeNode<T> | null = this.root;
      let parent: TreeNode<T> | null = null;
      while (current) {
        parent = current;
        if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      if (parent) {
        if (value < parent.value) {
          parent.left = newNode;
        } else {
          parent.right = newNode;
        }
      }
    }
    return newNode;
  }
}
