import { BinarySearchTree1 } from './binary-search-tree';
import { TreeNode } from './tree-node';

export class BinarySearchTreeValidator {
  static validate(bst: BinarySearchTree1<number>) {
    return this.performValidation(
      bst.root,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER
    );
  }

  private static performValidation(
    node: TreeNode<number> | null,
    minKey: number,
    maxKey: number
  ) {
    if (!node) {
      return true;
    }

    console.log({ node: node?.value, min: minKey, max: maxKey });

    if (node.value < minKey || node.value > maxKey) {
      return false;
    }

    return (
      this.performValidation(node.left, minKey, node.value) &&
      this.performValidation(node.right, node.value, maxKey)
    );
  }
}
