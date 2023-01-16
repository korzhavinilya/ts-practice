export class TreeNode<T> {
  value: T;
  height: number;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}
