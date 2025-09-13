import { ClipboardList, ListChecks, Timer } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './SideBar.module.scss'

export default function SideBar() {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar__top}>
				<h1 className={styles.top__title}>
					<ListChecks className={styles.title__item} />
					React Planner
				</h1>
				<p className={styles.beta}>beta</p>
				<nav className={styles.top__nav}>
					<ul className={styles.nav__list}>
						<Link to='/board'>
							<li className={styles.list__item}>
								<ClipboardList className={styles.item} /> Tasks
							</li>
						</Link>
						<Link to='/pomodoro'>
							<li className={styles.list__item}>
								<Timer className={styles.item} /> Pomodoro
							</li>
						</Link>
					</ul>
				</nav>
			</div>
			<div className={styles.sidebar__footer}>
				<p className={styles.footer__text}>Made By. tears6666</p>
				<a href='https://github.com/tears6666'>GitHub</a>
			</div>
		</div>
	)
}
