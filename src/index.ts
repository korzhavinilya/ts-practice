interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface CreateTodo {
  title: string;
}

const todoDto: CreateTodo = {
  title: 'title',
};

const todo: Todo = {
  id: '1',
  title: 'title',
  completed: false,
};

fn(todoDto);

function fn(todo: Todo) {
  console.log('1');
}
