import { BinarySearchTreeRecursive } from '../binary-search-tree/binary-search-tree-recursive';
import { TreeNode } from '../binary-search-tree/tree-node';

export class AvlTreeRecursive<T> extends BinarySearchTreeRecursive<T> {
  protected insertNode(node: TreeNode<T> | null, value: T) {
    node = super.insertNode(node, value);
    this.updateHeight(node);
    return this.rebalance(node);
  }

  protected updateHeight(node: TreeNode<T>): void {
    const leftChildHeight = this.getHeight(node.left);
    const rightChildHeight = this.getHeight(node.right);
    node.height = Math.max(leftChildHeight, rightChildHeight) + 1;
  }

  protected getHeight(node: TreeNode<T> | null): number {
    if (!node) {
      return 0;
    }
    return node.height;
  }

  protected getBalance(node: TreeNode<T> | null): number {
    if (!node) {
      return 0;
    }
    return this.getHeight(node.right) - this.getHeight(node.left);
  }

  private rebalance(node: TreeNode<T>) {
    const nodeBalanceFactor = this.getBalance(node);
    const leftChildBalanceFactor = this.getBalance(node.left);
    const rightChildBalanceFactor = this.getBalance(node.right);

    console.log(node.value, {
      h: this.getHeight(node),
      nbf: nodeBalanceFactor,
      lbf: leftChildBalanceFactor,
      rbf: rightChildBalanceFactor,
    });

    // Left-heavy
    if (nodeBalanceFactor < -1) {
      if (leftChildBalanceFactor <= 0) {
        console.log('right rotation on', node.value);

        node = this.rotateRight(node);
      } else {
        console.log('left right rotation on', node.value);
        if (node.left) {
          node.left = this.rotateLeft(node.left);
        }
        node = this.rotateRight(node);
      }
    }

    // Right-heavy
    if (nodeBalanceFactor > 1) {
      if (rightChildBalanceFactor >= 0) {
        console.log('left rotation on', node.value);
        node = this.rotateLeft(node);
      } else {
        console.log('right left rotation on', node.value);
        if (node.right) {
          node.right = this.rotateRight(node.right);
        }
        node = this.rotateLeft(node);
      }
    }

    return node;
  }

  private rotateRight(node: TreeNode<T>) {
    if (!node.left) {
      return node;
    }

    const root = node.left;
    node.left = root.right;
    root.right = node;

    this.updateHeight(node);
    this.updateHeight(root);

    return root;
  }

  private rotateLeft(node: TreeNode<T>) {
    if (!node.right) {
      return node;
    }

    const root = node.right;
    node.right = root.left;
    root.left = node;

    this.updateHeight(node);
    this.updateHeight(root);

    return root;
  }
}
