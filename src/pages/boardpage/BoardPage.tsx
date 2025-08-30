import CanBan from '../../components/canban/CanBan'
import { Header } from '../../components/header/Header'
import styles from './BoardPage.module.scss'

export default function BoardPage() {
	return (
		<div className={styles.boardpage}>
			<Header title='Board' />
			<CanBan />
		</div>
	)
}
