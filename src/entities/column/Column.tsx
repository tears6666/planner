import type { PropsTitleType } from '../../app/@types/types'
import { Input } from '../../ui/input/Input'
import styles from './Column.module.scss'

export const Column = ({title}: PropsTitleType) =>{
  return(
    <div className={styles.column}>
      <h3 className={styles.column__title}>{title}</h3>
      <div className={styles.column__content}>

      </div>
      <Input />
    </div>
  )
}