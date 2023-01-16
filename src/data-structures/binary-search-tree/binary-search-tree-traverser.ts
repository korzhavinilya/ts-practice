import Queue from '../Queue';
import Stack from '../Stack';
import { TreeNode } from './tree-node';

type DepthFirstOrderMode =
  | 'depth_first_preorder'
  | 'depth_first_inorder'
  | 'depth_first_postorder';

type BreadthFirstOrderMode = 'breadth_first_level_order_traversal';

export type TraverseMode = DepthFirstOrderMode | BreadthFirstOrderMode;

export class BinarySearchTreeTraverser<T> {
  traverse(node: TreeNode<T>, mode: TraverseMode) {
    if (mode === 'depth_first_preorder') {
      //   this.preorderRecursive(node);
      this.preorderIterative(node);
    } else if (mode === 'depth_first_postorder') {
      //   this.postorderRecursive(node);
      this.postorderIterative(node);
    } else if (mode === 'depth_first_inorder') {
      // this.inorderRecursive(node);
      this.inorderIterative(node);
    } else if (mode === 'breadth_first_level_order_traversal') {
      this.levelOrderRecursive(node);
      // this.levelOrderIterative(node);
    }
  }

  private preorderRecursive(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value);
      this.preorderRecursive(node.left);
      this.preorderRecursive(node.right);
    }
  }

  private preorderIterative(node: TreeNode<T>) {
    const visitStack = new Stack<TreeNode<T>>();
    visitStack.push(node);

    while (!visitStack.isEmpty()) {
      const node = visitStack.pop();
      if (node) {
        console.log(node.value);
        if (node.right) {
          visitStack.push(node.right);
        }
        if (node.left) {
          visitStack.push(node.left);
        }
      }
    }
  }

  private postorderRecursive(node: TreeNode<T> | null) {
    if (node) {
      this.postorderRecursive(node.left);
      this.postorderRecursive(node.right);
      console.log(node.value);
    }
  }

  private postorderIterative(node: TreeNode<T>) {
    const visitStack = new Stack<TreeNode<T>>();
    const outputStack = new Stack<TreeNode<T>>();

    visitStack.push(node);

    while (!visitStack.isEmpty()) {
      const node = visitStack.pop();
      if (node) {
        outputStack.push(node);
        if (node.left) {
          visitStack.push(node.left);
        }
        if (node.right) {
          visitStack.push(node.right);
        }
      }
    }

    while (!outputStack.isEmpty()) {
      const node = outputStack.pop();
      if (node) {
        console.log(node.value);
      }
    }
  }

  private inorderRecursive(node: TreeNode<T> | null) {
    if (node) {
      this.inorderRecursive(node.left);
      console.log(node.value);
      this.inorderRecursive(node.right);
    }
  }

  private inorderIterative(node: TreeNode<T>) {
    const visitStack = new Stack<TreeNode<T>>();
    let current: TreeNode<T> | null | undefined = node;

    while (!visitStack.isEmpty() || current) {
      if (current) {
        visitStack.push(current);
        current = current.left;
      } else {
        current = visitStack.pop();
        if (current) {
          console.log(current.value);
          current = current.right;
        }
      }
    }
  }

  private levelOrderRecursive(node: TreeNode<T> | null) {
    let level = 1;

    while (this.printLevel(node, level)) {
      level++;
    }
  }

  private printLevel(node: TreeNode<T> | null, level: number) {
    if (!node) {
      return false;
    }

    if (level === 1) {
      console.log(node.value);
      return true;
    }

    const left = this.printLevel(node.left, level - 1);
    const right = this.printLevel(node.right, level - 1);

    return left || right;
  }

  private levelOrderIterative(node: TreeNode<T>) {
    const visitQueue = new Queue<TreeNode<T>>();
    visitQueue.add(node);

    while (!visitQueue.isEmpty()) {
      const childNode = visitQueue.remove();
      if (childNode) {
        console.log(childNode.value);
        if (childNode.left) {
          visitQueue.add(childNode.left);
        }
        if (childNode.right) {
          visitQueue.add(childNode.right);
        }
      }
    }
  }
}
