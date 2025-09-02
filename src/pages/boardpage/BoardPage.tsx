import Canban from '../../components/canban/Canban'
import { Header } from '../../components/header/Header'
import styles from './BoardPage.module.scss'

export default function BoardPage() {
	return (
		<div className={styles.boardpage}>
			<Header title='Tasks' />
			<Canban />
		</div>
	)
}
