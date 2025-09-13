import { Header } from '../../components/header/Header'
import { TimeBlocker } from '../../components/timeBlocker/TimeBlocker'
import styles from './Pomodoro.module.scss'

export default function Pomodoro() {
	return (
		<div className={styles.pomodoro}>
			<Header title='Pomodoro' />
			<div className={styles.pomodoro__content}>
				<TimeBlocker />
			</div>
		</div>
	)
}
