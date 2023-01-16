import {
  BinarySearchTreeTraverser,
  TraverseMode,
} from './binary-search-tree-traverser';
import { SearchResult } from './interfaces/search-result.interface';
import {
  BinarySearchTreeBalancer,
  RotateMode,
} from './binary-search-tree-balancer';
import { TreeNode } from './tree-node';

export class BinarySearchTree1<T> {
  // root: TreeNode<T> | null;
  // traverser: BinarySearchTreeTraverser<T>;
  // balancer: BinarySearchTreeBalancer<T>;
  // constructor(values?: T[]) {
  //   this.traverser = new BinarySearchTreeTraverser();
  //   this.balancer = new BinarySearchTreeBalancer();
  //   if (values && values.length) {
  //     const sortedValues = values.sort((a, b) => (a > b ? 1 : -1));
  //     this.root = this.construct(sortedValues);
  //   } else {
  //     this.root = null;
  //   }
  // }
  // add(value: T) {
  //   this.root = this.insertRecursive(this.root, value);
  //   return this.root;
  //   // return this.insertIterative(value);
  // }
  // find(value: T) {
  //   // return this.searchRecursive(this.root, value);
  //   return this.searchIterative(value);
  // }
  // traverse(mode: TraverseMode = 'depth_first_inorder') {
  //   if (this.root) {
  //     this.traverser.traverse(this.root, mode);
  //   }
  // }
  // findPredecessor(value: T) {
  //   // return this.searchPredecessorRecursive(this.root, null, value);
  //   return this.searchPredecessorIterative(value);
  // }
  // findSuccessor(value: T) {
  //   // return this.searchSuccessorRecursive(this.root, null, value);
  //   return this.searchSuccessorIterative(value);
  // }
  // remove(value: T) {
  //   // return this.removeNodeUsingSuccessor(this.root, value);
  //   return this.removeNodeUsingPredecessor(this.root, value);
  // }
  // rotate(mode: RotateMode = 'leftRotation') {
  //   if (this.root) {
  //     this.root = this.balancer.rotate(this.root, mode);
  //   }
  // }
  // balanceFromUnbalanced() {
  //   if (this.root) {
  //     this.root = this.balancer.balanceFromUnbalanced(this.root);
  //   }
  // }
  // private construct(values: T[]) {
  //   if (!values.length) {
  //     return null;
  //   }
  //   const low = 0;
  //   const high = values.length - 1;
  //   const middle = Math.floor((low + high) / 2);
  //   const root = new TreeNode(values[middle]);
  //   if (values.length > 1) {
  //     root.left = this.construct(values.slice(0, middle));
  //     root.right = this.construct(values.slice(middle + 1, values.length));
  //   }
  //   return root;
  // }
  // private insertIterative(value: T) {
  //   const newNode = new TreeNode(value);
  //   if (!this.root) {
  //     this.root = newNode;
  //   } else {
  //     let current: TreeNode<T> | null = this.root;
  //     let parent: TreeNode<T> | null = null;
  //     while (current) {
  //       parent = current;
  //       if (value < current.value) {
  //         current = current.left;
  //       } else {
  //         current = current.right;
  //       }
  //     }
  //     if (parent) {
  //       if (value < parent.value) {
  //         parent.left = newNode;
  //       } else {
  //         parent.right = newNode;
  //       }
  //     }
  //   }
  //   return newNode;
  // }
  // private insertRecursive(node: TreeNode<T> | null, value: T) {
    // if (!node) {
    //   return new TreeNode(value);
    // }
    // if (value < node.value) {
    //   node.left = this.insertRecursive(node.left, value);
    // } else {
    //   node.right = this.insertRecursive(node.right, value);
    // }
    // return node;
  // }
  // private searchIterative(value: T): SearchResult<T> {
  //   let current: TreeNode<T> | null = this.root;
  //   let parent: TreeNode<T> | null = null;
  //   while (current && current.value !== value) {
  //     parent = current;
  //     if (value < current.value) {
  //       current = current.left;
  //     } else {
  //       current = current.right;
  //     }
  //   }
  //   return { node: current, parent };
  // }
  // private searchRecursive(
  //   node: TreeNode<T> | null,
  //   value: T,
  //   parent: TreeNode<T> | null = null
  // ): SearchResult<T> {
  //   if (!node || node.value === value) {
  //     return { node, parent };
  //   }
  //   if (value < node.value) {
  //     return this.searchRecursive(node.left, value, node);
  //   } else {
  //     return this.searchRecursive(node.right, value, node);
  //   }
  // }
  // private searchPredecessorIterative(value: T) {
  //   let node = this.root;
  //   let predecessor: TreeNode<T> | null = null;
  //   if (!node) {
  //     return null;
  //   }
  //   while (true) {
  //     if (node.value > value) {
  //       node = node.left;
  //     } else if (node.value < value) {
  //       predecessor = node;
  //       node = node.right;
  //     } else {
  //       if (node.left) {
  //         predecessor = this.findMaximum(node.left);
  //       }
  //       break;
  //     }
  //     if (!node) {
  //       return predecessor;
  //     }
  //   }
  //   return predecessor;
  // }
  // private searchPredecessorRecursive(
  //   node: TreeNode<T> | null,
  //   predecessor: TreeNode<T> | null,
  //   value: T
  // ) {
  //   if (!node) {
  //     return predecessor;
  //   } else if (node.value === value) {
  //     if (node.left) {
  //       return this.findMaximum(node.left);
  //     }
  //   } else if (node.value > value) {
  //     return this.searchPredecessorRecursive(node.left, predecessor, value);
  //   } else {
  //     return this.searchPredecessorRecursive(node.right, node, value);
  //   }
  //   return predecessor;
  // }
  // private searchSuccessorIterative(value: T) {
  //   let node = this.root;
  //   let successor: TreeNode<T> | null = null;
  //   if (!node) {
  //     return null;
  //   }
  //   while (true) {
  //     if (node.value > value) {
  //       successor = node;
  //       node = node.left;
  //     } else if (node.value < value) {
  //       node = node.right;
  //     } else {
  //       if (node.right) {
  //         successor = this.findMinimum(node.right);
  //       }
  //       break;
  //     }
  //     if (!node) {
  //       return successor;
  //     }
  //   }
  //   return successor;
  // }
  // private searchSuccessorRecursive(
  //   node: TreeNode<T> | null,
  //   successor: TreeNode<T> | null,
  //   value: T
  // ) {
  //   if (!node) {
  //     return successor;
  //   } else if (node.value === value) {
  //     if (node.right) {
  //       return this.findMinimum(node.right);
  //     }
  //   } else if (node.value > value) {
  //     return this.searchSuccessorRecursive(node.left, node, value);
  //   } else {
  //     return this.searchSuccessorRecursive(node.right, successor, value);
  //   }
  //   return successor;
  // }
  // private removeNodeUsingSuccessor(value: T) {
  //   const { node: current, parent } = this.searchIterative(value);
  //   if (!current) {
  //     return false;
  //   }
  //   // Case 1: node to be deleted has no children
  //   if (!current.left && !current.right) {
  //     console.log('case 1');
  //     if (current !== this.root && parent) {
  //       if (parent.left === current) {
  //         parent.left = null;
  //       } else {
  //         parent.right = null;
  //       }
  //     } else {
  //       this.root = null;
  //     }
  //   }
  //   // Case 2: node to be deleted has two children
  //   else if (current.left && current.right) {
  //     console.log('case 2');
  //     const successor = this.findMinimum(current.right);
  //     this.removeNodeUsingSuccessor(successor.value);
  //     current.value = successor.value;
  //   }
  //   // Case 3: node to be deleted has only one child
  //   else {
  //     console.log('case 3');
  //     const child = current.left ? current.left : current.right;
  //     if (current !== this.root && parent) {
  //       if (current === parent.left) {
  //         parent.left = child;
  //       } else {
  //         parent.right = child;
  //       }
  //     } else {
  //       this.root = child;
  //     }
  //   }
  //   return true;
  // }
  // private removeNodeUsingPredecessor(node: TreeNode<T> | null, value: T) {
  //   if (!node) {
  //     return null;
  //   }
  //   if (node.value > value) {
  //     node.left = this.removeNodeUsingPredecessor(node.left, value);
  //   } else if (node.value < value) {
  //     node.right = this.removeNodeUsingPredecessor(node.right, value);
  //   } else {
  //     // Case 1: node to be deleted has no children
  //     if (!node.left && !node.right) {
  //       console.log('case 1');
  //       return null;
  //     }
  //     // Case 2: node to be deleted has two children
  //     else if (node.left && node.right) {
  //       console.log('case 2');
  //       const predecessor = this.findMaximum(node.left);
  //       node.value = predecessor.value;
  //       node.left = this.removeNodeUsingPredecessor(
  //         node.left,
  //         predecessor.value
  //       );
  //     }
  //     // Case 3: node to be deleted has only one child
  //     else {
  //       console.log('case 3');
  //       const child = node.left ? node.left : node.right;
  //       node = child;
  //     }
  //   }
  //   return node;
  // }
  // private findMaximum(node: TreeNode<T>) {
  //   while (node.right) {
  //     node = node.right;
  //   }
  //   return node;
  // }
  // private findMinimum(node: TreeNode<T>) {
  //   while (node.left) {
  //     node = node.left;
  //   }
  //   return node;
  // }
}
