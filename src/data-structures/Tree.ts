import Queue from './Queue';

const LEFT = 0;
const RIGHT = 1;

export namespace TreeNamespace {
  type TreeNodeMetadata = {
    multiplicity: number;
  };

  class TreeNode<T> {
    value: T;
    descendants: TreeNode<T>[];
    parent: TreeNode<T> | null;
    meta: TreeNodeMetadata;

    constructor(value: T) {
      this.value = value;
      this.descendants = [];
      this.parent = null;
      this.meta = {
        multiplicity: 0,
      };
    }

    get left() {
      return this.descendants[LEFT];
    }

    set left(node: TreeNode<T>) {
      this.descendants[LEFT] = node;
      if (node) {
        node.parent = this;
      }
    }

    get right() {
      return this.descendants[RIGHT];
    }

    set right(node: TreeNode<T>) {
      this.descendants[RIGHT] = node;
      if (node) {
        node.parent = this;
      }
    }
  }

  class BinarySearchTree<T> {
    root: TreeNode<T> | null;
    size: number;

    constructor() {
      this.root = null;
      this.size = 0;
    }

    add(value: T) {
      const newNode = new TreeNode(value);

      if (this.root) {
        const { found, parent } = this.findNodeAndParent(value);
        if (found) {
          // duplicated: value already exist on the tree
          found.meta.multiplicity = (found.meta.multiplicity || 1) + 1;
        } else if (value < parent.value) {
          parent.left = newNode;
        } else {
          parent.right = newNode;
        }
      } else {
        this.root = newNode;
      }

      this.size += 1;
      return newNode;
    }

    private findNodeAndParent(value: T) {
      let node = this.root;
      let parent;

      while (node) {
        if (node.value === value) {
          break;
        }
        parent = node;
        node = value >= node.value ? node.right : node.left;
      }

      return { found: node, parent };
    }

    find(value: T) {
      return this.findNodeAndParent(value).found;
    }

    remove(value) {
      const nodeToRemove = this.find(value);
      if (!nodeToRemove) return false;

      // Combine left and right children into one subtree without nodeToRemove
      const nodeToRemoveChildren =
        this.combineLeftIntoRightSubtree(nodeToRemove);

      if (
        nodeToRemove.meta.multiplicity &&
        nodeToRemove.meta.multiplicity > 1
      ) {
        nodeToRemove.meta.multiplicity -= 1; // handle duplicated
      } else if (nodeToRemove === this.root) {
        // Replace (root) node to delete with the combined subtree.
        this.root = nodeToRemoveChildren;
        this.root.parent = null; // clearing up old parent
      } else {
        const side = nodeToRemove.isParentLeftChild ? 'left' : 'right';
        const { parent } = nodeToRemove; // get parent
        // Replace node to delete with the combined subtree.
        parent[side] = nodeToRemoveChildren;
      }

      this.size -= 1;
      return true;
    }

    getMax() {
      /* ... */
    }
    getMin() {
      /* ... */
    }

    *breadthFirstSearch() {
      if (!this.root) {
        return null;
      }

      const visitedSet = new Set();
      const visitQueue = new Queue<TreeNode<T>>();

      visitQueue.add(this.root);

      while (!visitQueue.isEmpty()) {
        const node = visitQueue.remove();
        if (node && !visitedSet.has(node)) {
          yield node;
          visitedSet.add(node);
          node.descendants.forEach((desc) => visitQueue.add(desc));
        }
      }
      return null;
    }
  }

  const bst = new BinarySearchTree<Number>();
  bst.add(30);
  bst.add(10);
  bst.add(40);
  bst.add(15);
  bst.add(35);
  bst.add(50);
  bst.add(12);

  const bfsGenerator = bst.breadthFirstSearch();
  console.log(bfsGenerator.next().value?.value);
  console.log(bfsGenerator.next().value?.value);
  console.log(bfsGenerator.next().value?.value);
  console.log(bfsGenerator.next().value?.value);
  console.log(bfsGenerator.next().value?.value);
  console.log(bfsGenerator.next().value?.value);
  console.log(bfsGenerator.next().value?.value);
}
