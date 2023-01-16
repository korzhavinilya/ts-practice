/**
 * h - is tree height
 *
 * Complexity O(h)
 *
 */

import { BinarySearchTree1 } from './binary-search-tree';
import { BinarySearchTreeIterative } from './binary-search-tree-iterative';
import { BinarySearchTreeRecursive } from './binary-search-tree-recursive';
import { BinarySearchTreeValidator } from './binary-search-tree-validator';
import { BinarySearchTree } from './interfaces/binary-search-tree.interface';
import { TreeNode } from './tree-node';

/* 
                   3
                 /   \
                /     \
               1       4
                \       \
                 \       \  
                  2       5
*/
// const bst = new BinarySearchTree<number>([1, 2, 3, 4, 5]);

// const bst = new BinarySearchTree1<number>();

/* 
                   15
                 /    \
                /      \
               10       20
              /  \      /  \
             /    \    /    \
            8     12  18     25
                     /  \      \
                    /    \      \
                   16    19     30

*/
// bst.add(15);

// bst.add(10);
// bst.add(20);

// bst.add(8);
// bst.add(12);
// bst.add(18);
// bst.add(25);

// bst.add(16);
// bst.add(19);
// bst.add(30);

/* 
                   5
                 /   \
                /     \
               3      8
                    /  \
                   /    \
                  7     10
*/
// bst.add(5);

// bst.add(3);
// bst.add(8);

// bst.add(7);
// bst.add(10);

/* 
                   8
                 /   \
                /     \
               5      10
             /  \
            /    \
           3     7
*/
// bst.rotateLeft();

/* 
                   3
                     \
                      \
                      5
                       \
                        \ 
                        8
                      /  \
                     /    \
                    7     10
*/
// bst.rotateRight();

// const searchResult = bst.find(20);
// console.log({ searchResult });

// const predecessorResult = bst.findPredecessor(16);
// console.log({ predecessorResult });

// const successorResult = bst.findSuccessor(8);
// console.log({ successorResult });

// bst.remove(20);

/* 
* Invalid BST
                   20
                 /   \
                /     \
               10     30
                    /  \
                   /    \
                  5     40
*/
// bst.add(20);

// bst.add(10);
// bst.add(30);

// bst.add(40);

// if (bst.root && bst.root.right) {
//   bst.root.right.left = new TreeNode(5);
// }

// const isBst = BinarySearchTreeValidator.validate(bst);
// console.log({ isBst });

// console.dir(bst, { depth: 999 });

/* 
                    15
                 /      \
                /        \ 
               10        20
              /  \      /  \
             /    \    /    \
            8     12  18     25
*/
// bst.traverse('depth_first_preorder'); // 15 10 8 12 20 18 25
// bst.traverse('depth_first_postorder'); // 8 12 10 18 25 20 15
// bst.traverse('depth_first_inorder'); // 8 10 12 15 18 20 25
// bst.traverse('breadth_first_level_order_traversal'); // 15 10 20 8 12 18 25

/* 
                   20
                 /    
                /      
               15       
              /     
             /     
            10
           /
          /
         5
       /  \
      /    \
    2       8 
*/
// bst.add(20);

// bst.add(15);

// bst.add(10);

// bst.add(5);
// bst.add(2);
// bst.add(8);

/* 
                    8 
                 /      \
                /        \ 
               2         15
                \       /  \
                 \     /    \
                  5   10    20
*/
// bst.balanceFromUnbalanced();

/*
        20
      /
     /
    10
      \
       \
        15
*/
// bst.add(20);
// bst.add(10);
// bst.add(15);

/*
        15
      /   \
     /     \
    10     20
*/
// bst.rotate('leftRightRotation');

/*
        10
          \
           \
           20
          /
        /
      15
*/
// bst.add(10);
// bst.add(20);
// bst.add(15);

/*
        15
      /   \
     /     \
    10     20
*/
// bst.rotate('rightLeftRotation');

// console.dir(bst.root, { depth: 999 });
// bst.traverse('depth_first_preorder');

const bst: BinarySearchTree<number> = new BinarySearchTreeIterative();
// const bst: BinarySearchTree<number> = new BinarySearchTreeRecursive();
bst.insert(1);
bst.insert(2);
bst.insert(3);

console.dir(bst, { depth: 999 });
