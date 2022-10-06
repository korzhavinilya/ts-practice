interface Builder<T> {
  build(): T;
}

class QueryBuilder implements Builder<string> {
  queries: string[];

  constructor() {
    this.queries = [];
  }

  addQuery(query: string) {
    this.queries.push(query);
    return this;
  }

  build() {
    return this.queries.join(' ');
  }
}

const builder = new QueryBuilder();
console.log(builder.addQuery('a').addQuery('b').addQuery('c').build());
