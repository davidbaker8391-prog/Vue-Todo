import { uid } from 'uid'

export default () => ({
  todoText: '',
  errorMessage: '',
  todos: [{ id: uid(), name: 'My First Todo', done: false }],
})
