import { Trash2 } from 'lucide-react'
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

	if (editMode) {
		return (
			<div className={styles.task}>
				<div className={styles.task__content}>
					<textarea
						className={styles.content__textarea}
						value={task.content}
            autoFocus
            placeholder='Task content here'
            onBlur={handleEdit}
            onKeyDown={(e) => {
              if(e.key === 'Enter'){
                handleEdit()
              }
            }}
            onChange={(e) => updateTask(task.id, e.target.value)}
					></textarea>
				</div>
			</div>
		)
	}
	return (
		<div
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
					<Trash2
						className={styles.content__trash}
						onClick={() => {
							deleteTask(task.id)
						}}
					/>
				)}
			</div>
		</div>
	)
}
