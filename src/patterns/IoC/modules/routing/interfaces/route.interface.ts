export default interface Route {
  isMatch(path: string): boolean;
  getSortOrder(): number;
  handle(): void;
}
