import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Trash2 } from 'lucide-react'
import { useState } from 'react'
import type { ITaskProps } from '../../app/@types/types'
import styles from './Task.module.scss'

export const Task = ({ task, deleteTask, updateTask }: ITaskProps) => {
	const [mouseIsOver, setMouseIsOver] = useState(false)
	const [editMode, setEditMode] = useState(false)

	const handleEdit = () => {
		setEditMode(prev => !prev)
		setMouseIsOver(false)
	}
	const { setNodeRef, listeners, attributes, transform, transition } =
		useSortable({
			id: task.id,
			data: {
				type: 'Task',
				task,
			},
		})
	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	}
	if (editMode) {
		return (
			<div ref={setNodeRef} style={style} className={styles.task}>
				<div className={styles.task__content}>
					<textarea
						className={styles.content__textarea}
						value={task.content}
						autoFocus
						placeholder='Task content here'
						onBlur={handleEdit}
						onKeyDown={e => {
							if (e.key === 'Enter') {
								handleEdit()
							}
						}}
						onChange={e => updateTask(task.id, e.target.value)}
					></textarea>
				</div>
			</div>
		)
	}
	return (
		<div
			ref={setNodeRef}
			style={style}
			onClick={handleEdit}
			className={styles.task}
			onMouseEnter={() => {
				setMouseIsOver(true)
			}}
			onMouseLeave={() => {
				setMouseIsOver(false)
			}}
		>
			<div className={styles.task__content}>
				{task.content}
				{mouseIsOver && (
					<div className={styles.content__media}>
						<Trash2
							className={styles.media__trash}
							onClick={() => {
								deleteTask(task.id)
							}}
						/>
						<GripVertical
							{...attributes}
							{...listeners}
							className={styles.media__grip}
						/>
					</div>
				)}
			</div>
		</div>
	)
}
