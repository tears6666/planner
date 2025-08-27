import { Header } from '../../components/header/Header'
import styles from './BoardPage.module.scss'

export default function BoardPage(){
  return(
    <div className={styles.boardpage}>
      <Header />
      <section className={styles.board__canban}></section>
    </div>
  )
}