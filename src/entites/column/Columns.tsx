import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Grip, Trash2 } from 'lucide-react'
import { useState } from 'react'
import styles from './Columns.module.scss'
import type { IProps } from './types'

export const Columns = (props: IProps) => {
	const { column, deleteColumn, updateColumn } = props
	const [editMode, setEditMode] = useState(false)
	const { setNodeRef, listeners, attributes, transform, transition } =
		useSortable({
			id: column.id,
			data: {
				type: 'Column',
				column,
			},
		})
	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	}
	return (
		<div ref={setNodeRef} style={style} className={styles.columns}>
			<div className={styles.columns__top}>
				<div className={styles.top}>
					<p
						className={styles.top__title}
						onClick={() => {
							setEditMode(true)
						}}
					>
						{!editMode && column.title}
						{editMode && (
							<input
								className={styles.title__input}
								placeholder='Enter new task name'
								onChange={e => updateColumn(column.id, e.target.value)}
								autoFocus
								onBlur={() => {
									setEditMode(false)
								}}
								onKeyDown={(e) => {
									if(e.key !== 'Enter') return
									setEditMode(false)
								}}
							/>
						)}
					</p>
					<Trash2
						className={styles.trash}
						onClick={() => {
							deleteColumn(column.id)
						}}
					/>
				</div>
			</div>
			<div className={styles.columns__content}></div>
			<div className={styles.columns__footer}>
				<Grip className={styles.footer__grab} {...attributes} {...listeners} />
			</div>
		</div>
	)
}
