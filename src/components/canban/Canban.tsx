import {
	DndContext,
	type DragEndEvent,
	type DragOverEvent,
	type DragStartEvent,
} from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'
import { CirclePlus } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { Column, Id, Task } from '../../app/@types/types'
import { Columns } from '../../entites/column/Columns'
import styles from './Canban.module.scss'

export default function Canban() {
	const [columns, setColumns] = useState<Column[]>([])
	const [tasks, setTasks] = useState<Task[]>([])

	const columnsId = useMemo(() => columns.map(column => column.id), [columns])
	const createNewColumn = () => {
		const columnToAdd: Column = {
			id: generateId(),
			title: `Column ${columns.length + 1}`,
		}
		setColumns([...columns, columnToAdd])
	}
	const [activeColumn, setActiveColumn] = useState<Column | null>(null)
	const [activeTask, setActiveTask] = useState<Task | null>(null)
	function generateId() {
		return Math.floor(Math.random() * 10001)
	}
	function deleteColumn(id: Id) {
		const filterColumn = columns.filter(column => column.id !== id)
		setColumns(filterColumn)
	}
	function onDragStart(event: DragStartEvent) {
		if (event.active.data.current?.type === 'Column') {
			setActiveColumn(event.active.data.current.column)
			return
		}
		if (event.active.data.current?.type === 'Task') {
			setActiveTask(event.active.data.current.task)
			return
		}
	}
	function deleteTask(id: Id) {
		const newTasks = tasks.filter(task => task.id !== id)
		setTasks(newTasks)
	}
	function onDragEnd(event: DragEndEvent) {
		const { active, over } = event
		if (!over) return

		const activeColumnId = active.id
		const overColumnId = over.id

		if (activeColumnId === overColumnId) return

		setColumns(columns => {
			const activeColumnIndex = columns.findIndex(
				column => column.id === activeColumnId
			)
			const overColumnIndex = columns.findIndex(
				column => column.id === overColumnId
			)

			return arrayMove(columns, activeColumnIndex, overColumnIndex)
		})
	}
	function updateColumn(id: Id, title: string) {
		const newColumns = columns.map(col => {
			if (col.id !== id) return col
			return { ...col, title }
		})
		setColumns(newColumns)
	}
	function onDragOver(event: DragOverEvent) {
		const { active, over } = event
		if (!over) return

		const activeId = active.id
		const overId = over.id

		if (activeId === overId) return

		const isActiveATask = active.data.current?.type === 'Task'
		const isOverATask = over.data.current?.type === 'Task'

		if (isActiveATask && isOverATask) {
			setTasks(tasks => {
				const activeIndex = tasks.findIndex(task => task.id === activeId)
				const overIndex = tasks.findIndex(task => task.id === overId)
				tasks[activeIndex].columnId = tasks[overIndex].columnId
				return arrayMove(tasks, activeIndex, overIndex)
			})
		}
	}
	function updateTask(id: Id, content: string) {
		const newTasks = tasks.map(task => {
			if (task.id !== id) return task
			return { ...task, content }
		})
		setTasks(newTasks)
	}
	function createTask(columnId: Id) {
		const newTask: Task = {
			id: generateId(),
			columnId,
			content: `Task ${columns.length + 1}`,
		}
		setTasks([...tasks, newTask])
	}
	return (
		<div className={styles.canban}>
			<div className={styles.canban__board}>
				<DndContext
					onDragStart={onDragStart}
					onDragEnd={onDragEnd}
					onDragOver={onDragOver}
				>
					<div className={styles.board__columns}>
						<SortableContext items={columnsId}>
							{columns.map(column => (
								<Columns
									updateColumn={updateColumn}
									key={column.id}
									column={column}
									deleteColumn={deleteColumn}
									createTask={createTask}
									tasks={tasks.filter(task => task.columnId === column.id)}
									deleteTask={deleteTask}
									updateTask={updateTask}
								/>
							))}
						</SortableContext>
					</div>
					<div className={styles.board__footer}>
						<button
							className={styles.board__add}
							onClick={() => {
								createNewColumn()
							}}
						>
							<CirclePlus className={styles.plus} />
						</button>
					</div>
				</DndContext>
			</div>
		</div>
	)
}
