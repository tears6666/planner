import {
	DndContext,
	type DragEndEvent,
	type DragStartEvent,
} from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'
import { CirclePlus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Columns } from '../../entites/column/Columns'
import styles from './Canban.module.scss'
import type { Column, Id } from './types'

export default function Canban() {
	const [columns, setColumns] = useState<Column[]>([])
	const columnsId = useMemo(() => columns.map(column => column.id), [columns])
	const createNewColumn = () => {
		const columnToAdd: Column = {
			id: generateId(),
			title: `Column ${columns.length + 1}`,
		}
		setColumns([...columns, columnToAdd])
	}
	const [activeColumn, setActiveColumn] = useState<Column | null>(null)

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
	return (
		<div className={styles.canban}>
			<div className={styles.canban__board}>
				<DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
					<div className={styles.board__columns}>
						<SortableContext items={columnsId}>
							{columns.map(column => (
								<Columns
									updateColumn={updateColumn}
									key={column.id}
									column={column}
									deleteColumn={deleteColumn}
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
