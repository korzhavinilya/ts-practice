export default class HashMap {
  buckets: any[];
  loadFactor: number;
  size: number;
  collisions: number;
  keys: any[];

  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.collisions = 0;
    this.keys = [];
  }

  set(key: any, value: any) {
    const { bucketIndex, entryIndex } = this._getIndexes(key);

    if (entryIndex === undefined) {
      // initialize array and save key/value
      const keyIndex = this.keys.push({ content: key }) - 1; // keep track of the key index
      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
      this.buckets[bucketIndex].push({ key, value, keyIndex });
      this.size++;
      // Optional: keep count of collisions
      if (this.buckets[bucketIndex].length > 1) {
        this.collisions++;
      }
    } else {
      // override existing value
      this.buckets[bucketIndex][entryIndex].value = value;
    }

    // check if a rehash is due
    if (this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {
      this.rehash(this.buckets.length * 2);
    }

    return this;
  }

  get(key: any) {
    const { bucketIndex, entryIndex } = this._getIndexes(key);

    if (entryIndex === undefined) {
      return;
    }

    return this.buckets[bucketIndex][entryIndex].value;
  }

  has(key: any) {
    return !!this.get(key);
  }

  delete(key: any) {
    const { bucketIndex, entryIndex } = this._getIndexes(key);

    if (entryIndex === undefined) {
      return false;
    }

    const keyIndex = this.buckets[bucketIndex][entryIndex].keyIndex;

    this.buckets[bucketIndex].splice(entryIndex, 1);
    delete this.keys[keyIndex];
    this.size--;

    return true;
  }

  hash(key: any) {
    let hashValue = 0;
    const stringTypeKey = `${key}${typeof key}`;

    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);
      hashValue += charCode << (index * 8);
    }

    return hashValue;
  }

  _getBucketIndex(key: any) {
    const hashValue = this.hash(key);
    return hashValue % this.buckets.length;
  }

  _getIndexes(key: any) {
    const bucketIndex = this._getBucketIndex(key);
    const values = this.buckets[bucketIndex] || [];

    for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {
      const entry = values[entryIndex];
      if (entry.key === key) {
        return { bucketIndex, entryIndex };
      }
    }

    return { bucketIndex };
  }

  rehash(newCapacity: number) {
    const newMap = new HashMap(newCapacity);

    this.keys.forEach((key) => {
      if (key) {
        newMap.set(key.content, this.get(key.content));
      }
    });

    // update bucket
    this.buckets = newMap.buckets;
    this.collisions = newMap.collisions;
    // Optional: both `keys` has the same content except that the new one doesn't have empty spaces from deletions
    this.keys = newMap.keys;
  }

  getLoadFactor() {
    return this.size / this.buckets.length;
  }
}
