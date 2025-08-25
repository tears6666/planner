import { Header } from '../../components/header/Header'
import styles from './Board.module.scss'

export default function Board(){
  return(
    <div className={styles.board}>
      <Header />
      <section className={styles.board__canban}></section>
    </div>
  )
}