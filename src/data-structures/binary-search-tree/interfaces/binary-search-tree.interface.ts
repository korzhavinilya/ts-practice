import { TreeNode } from '../tree-node';

export interface BinarySearchTree<T> {
  get root(): TreeNode<T> | null;

  set root(node: TreeNode<T> | null);

  insert(value: T): void;
}
