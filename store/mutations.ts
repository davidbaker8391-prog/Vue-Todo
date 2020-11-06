import { uid } from 'uid'

type TTodos = {
  todos: { id: string; name: string; done: boolean }[]
}

export default {
  addTodo(state: TTodos, payload: string) {
    state.todos.push({ id: uid(), name: payload, done: false })
  },
  toggleDone(state: TTodos, index: number) {
    state.todos[index].done = !state.todos[index].done
  },
  deleteTodo(state: TTodos, index: number) {
    state.todos.splice(index, 1)
  },
}
