import styles from './Input.module.scss'

export const Input = () => {
  return(
    <input type='text' className={styles.input} placeholder='Add Task +'/>
  )
}
