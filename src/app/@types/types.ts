export type Id = string | number
export interface Column {
	id: Id
	title: string
}
export type Task = {
	id: Id
	columnId: Id
	content: string
}
export interface IProps {
	column: Column
	deleteColumn: (id: Id) => void
	updateColumn: (id: Id, title: string) => void
	createTask: (columnId: Id) => void
	deleteTask: (id: Id) => void
	updateTask: (id: Id, content: string) => void
	tasks: Task[]
}
export interface ITaskProps {
	deleteTask: (id: Id) => void
	task: Task
	updateTask: (id: Id, content: string) => void
}
export type timer = number | string
