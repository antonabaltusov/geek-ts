export interface ITodo {
  userId: number
  id: number
  title: string
  completed:boolean
}

export const TodosCollection: Map<number, ITodo> = new Map()
