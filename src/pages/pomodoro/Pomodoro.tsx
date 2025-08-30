import { Header } from '../../components/header/Header'
import styles from './Pomodoro.module.scss'

export default function Pomodoro() {
	return (
		<div className={styles.pomodoro}>
			<Header title='Pomodoro' />
		</div>
	)
}
