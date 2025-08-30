import { Column } from '../../entities/column/Column'
import styles from './CanBan.module.scss'

export default function CanBan(){
  return(
    <div className={styles.canban}>
      <Column title='Today'/>
      <Column title='Tomorrow'/>
      <Column title='This week'/>
      <Column title='Later'/>
      <Column title='Completed'/>
    </div>
  )
}