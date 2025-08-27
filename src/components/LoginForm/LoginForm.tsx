import { yupResolver } from '@hookform/resolvers/yup'
import { LogIn } from 'lucide-react'
import { useForm } from 'react-hook-form'
import type { IRegFrom } from '../../app/@types/types'
import { store } from '../../store/store'
import { Label } from '../../ui/label/Label'
import styles from './LoginForm.module.scss'
import { schema } from './schema'

export default function LoginForm(){
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<IRegFrom>({
    resolver: yupResolver(schema)
  })
  const submitForm = (data: IRegFrom) => {
    console.log({data})
    reset()
  }
  //zustand
  const { currentUser, isLoading, getUser} = store()
  if(isLoading) return <h1 style={{color: '#fff', textAlign: 'center', marginTop: '10rem'}}>Loading...</h1>
  return(
    <div className={styles.loginform}>
      <form onSubmit={handleSubmit(submitForm)} className={styles.loginform__forms}>
        <h1 className={styles.forms__title}>Log in</h1>
        <div className={styles.forms__form}>
          <Label title='Email' htmlFor='email'/>
          <input {...register('email')} type='email' name='email' placeholder='example@email.ru'/>
          <p style={{color: 'crimson'}}>{errors.email?.message}</p>
        </div>
        <div className={styles.forms__form}>
          <Label title='Password' htmlFor='password'/>
          <input {...register('password')} type='password' name='password' placeholder='example1234'/>
          <p style={{color: 'crimson'}}>{errors.password?.message}</p>
        </div>
        <button onClick={() => reset} className={styles.loginform__btn}>
          Register
          <LogIn className={styles.btn__item}/>
        </button>
      </form>
      <p className={styles.loginform__text}>Dont have an Account Registrate</p>
    </div>
  )
}