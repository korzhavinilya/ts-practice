import { TreeNode } from './tree-node';

export type RotateMode =
  | 'leftRotation'
  | 'rightRotation'
  | 'leftRightRotation'
  | 'rightLeftRotation';

export class BinarySearchTreeBalancer<T> {
  rotate(root: TreeNode<T> | null, mode: RotateMode) {
    if (!root || (!root.right && !root.left)) {
      return root;
    }

    if (mode === 'leftRotation') {
      return this.leftRotation(root);
    } else if (mode === 'rightRotation') {
      return this.rightRotation(root);
    } else if (mode === 'leftRightRotation') {
      return this.leftRightRotation(root);
    } else {
      return this.rightLeftRotation(root);
    }
  }

  balanceFromUnbalanced(root: TreeNode<T>) {
    const nodes: TreeNode<T>[] = [];
    this.pushTreeNodes(root, nodes);
    return this.buildBalancedBST(nodes);
  }

  private leftRotation(root: TreeNode<T>) {
    const newRoot = root.right;
    root.right = newRoot?.left || null;
    if (newRoot) {
      newRoot.left = root;
    }
    return newRoot;
  }

  private rightRotation(root: TreeNode<T>) {
    const newRoot = root.left;
    root.left = newRoot?.right || null;
    if (newRoot) {
      newRoot.right = root;
    }
    return newRoot;
  }

  private leftRightRotation(root: TreeNode<T>) {
    if (root.left) {
      const leftRoot = this.leftRotation(root.left);
      root.left = leftRoot;
    }

    return this.rightRotation(root);
  }

  private rightLeftRotation(root: TreeNode<T>) {
    if (root.right) {
      const rightRoot = this.rightRotation(root.right);
      root.right = rightRoot;
    }

    return this.leftRotation(root);
  }

  private pushTreeNodes(node: TreeNode<T> | null, nodes: TreeNode<T>[]) {
    if (node) {
      this.pushTreeNodes(node.left, nodes);
      nodes.push(node);
      this.pushTreeNodes(node.right, nodes);
    }
  }

  private buildBalancedBST(nodes: TreeNode<T>[]) {
    if (!nodes.length) {
      return null;
    }

    const start = 0;
    const end = nodes.length - 1;
    const mid = Math.floor((start + end) / 2);

    const node = nodes[mid];
    node.left = this.buildBalancedBST(nodes.slice(start, mid));
    node.right = this.buildBalancedBST(nodes.slice(mid + 1, end + 1));

    return node;
  }
}
