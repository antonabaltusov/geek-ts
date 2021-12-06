import {ITodo, TodosCollection} from './todos-collection.js'

function getTodoById(id:number) {
  return fetch('https://jsonplaceholder.typicode.com/todos/'+id)
    .then((response)=>{
      return response.text()
    })
    .then<ITodo>((responseText)=>{
      return JSON.parse(responseText)
    })
    .then((data)=>{
      return data
    })
}

export function getTodosByCount (count:number){
  for (let i = 1; i <= count; i++) {
    getTodoById(i).then((data)=>{
      TodosCollection.set(data.id, data)
    })
  }
  return TodosCollection;
}
