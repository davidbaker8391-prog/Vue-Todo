type TTodos = {
  todos: { name: string; done: boolean }[]
}

export default {
  addTodo(state: TTodos, payload: string) {
    state.todos.push({ name: payload, done: false })
  },
}
