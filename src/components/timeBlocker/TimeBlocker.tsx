import { useEffect, useState } from 'react'
import styles from './TimeBlocker.module.scss'

export const TimeBlocker = () => {
	const [time, setTime] = useState(25 * 60) //  25minutes
	const [isRunning, setIsRunning] = useState(false)
	const [mode, setMode] = useState('focus')
	const [cycles, setCycles] = useState(0)

	useEffect(() => {
		let timer
		if (isRunning) {
			timer = setInterval(() => {
				setTime(prev => {
					if (prev === 1) {
						handleTimerEnd()
						return 0
					}
					return prev - 1
				})
			}, 1000)
		}
		return () => clearInterval(timer)
	}, [isRunning])

	const handleTimerEnd = () => {
		setIsRunning(false)
		if (mode === 'focus') {
			setMode('break')
			setTime(5 * 60)
		} else {
			setMode('focus')
			setTime(25 * 60)
			setCycles(c => c + 1)
		}
	}
	const formatTime = () => {
		const mins = Math.floor(time / 60)
			.toString()
			.padStart(2, '0')
		const secs = (time % 60).toString().padStart(2, '0')
		return `${mins}:${secs}`
	}
	const handleReset = () => {
		setIsRunning(false)
		setTime(mode === 'focus' ? 25 * 60 : 5 * 60)
	}
	return (
		<div className={styles.timeBlocker}>
			<h1 className={styles.timeBlocker__title}>Timer</h1>
			<h2>{mode === 'focus' ? 'Focus time' : 'Break Time'}</h2>
			<div className={styles.timeBlocker__timer}>{formatTime()}</div>
			<div className={styles.timeBlocker__btns}>
				<button className={styles.btn} onClick={() => setIsRunning(!isRunning)}>
					{isRunning ? 'Pause' : 'Start'}
				</button>
				<button className={styles.btn} onClick={handleReset}>
					Reset
				</button>
			</div>
		</div>
	)
}
