import { TreeNode } from '../tree-node';

export interface SearchResult<T> {
  node: TreeNode<T> | null;
  parent: TreeNode<T> | null;
}
