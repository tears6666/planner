import { User } from 'lucide-react'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.header__title}>Board</h1>
			<button className={styles.header__auth}>
				<User className={styles.auth__item} />
				Log In
			</button>
		</header>
	)
}
