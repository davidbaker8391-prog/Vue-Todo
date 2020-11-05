export default {
  addTodo(state: any, payload: any) {
    state.todos.push({ name: payload, done: false })

    //console.log('Mutation called')
    //console.log(state)
    // console.log(payload)
  },
}
