import type { PropsTitleType } from '../../app/@types/types'
import styles from './Header.module.scss'

export const Header = ({ title }: PropsTitleType) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.header__title}>{title}</h1>
		</header>
	)
}
