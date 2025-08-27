import RegForm from '../../components/LoginForm/LoginForm'
import styles from './LoginPage.module.scss'

export default function LoginPage(){
  return(
    <div className={styles.loginpage}>
      <RegForm />
    </div>
  )
}