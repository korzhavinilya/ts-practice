import { BinarySearchTree } from '../binary-search-tree/interfaces/binary-search-tree.interface';
import { AvlTreeRecursive } from './avl-tree-recursive';

const avl: BinarySearchTree<number> = new AvlTreeRecursive();

// Case 1: Right-heavy Left-rotate
// avl.insert(1);
// avl.insert(2);
// avl.insert(3);

// Case 2: Right-heavy Right-left-rotate
// avl.insert(1);
// avl.insert(3);
// avl.insert(2);

// Case 3: Left-heavy Right-rotate
// avl.insert(3);
// avl.insert(2);
// avl.insert(1);

// Case 4: Left-heavy Left-right-rotate
// avl.insert(3);
// avl.insert(1);
// avl.insert(2);

avl.insert(20);

avl.insert(15);
avl.insert(35);

avl.insert(10);

avl.insert(5);

avl.insert(2);

console.dir(avl, { depth: 999 });
