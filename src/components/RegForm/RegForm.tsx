import { yupResolver } from '@hookform/resolvers/yup'
import { LogIn } from 'lucide-react'
import { useForm } from 'react-hook-form'
import type { IRegFrom } from '../../app/@types/types'
import { Label } from '../../ui/label/Label'
import styles from './RegForm.module.scss'
import { schema } from './schema'

export default function RegForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IRegFrom>({
		resolver: yupResolver(schema),
	})
	const submitForm = (data: IRegFrom) => {
		console.log({ data })
		reset()
	}
	return (
		<div className={styles.loginform}>
			<form
				onSubmit={handleSubmit(submitForm)}
				className={styles.loginform__forms}
			>
				<h1 className={styles.forms__title}>Registration</h1>
				<div className={styles.forms__form}>
					<Label title='Email' htmlFor='email' />
					<input
						{...register('email')}
						type='email'
						name='email'
						placeholder='example@email.ru'
					/>
					<p style={{ color: 'crimson' }}>{errors.email?.message}</p>
				</div>
				<div className={styles.forms__form}>
					<Label title='Password' htmlFor='password' />
					<input
						{...register('password')}
						type='password'
						name='password'
						placeholder='example1234'
					/>
					<p style={{ color: 'crimson' }}>{errors.password?.message}</p>
				</div>
				<button className={styles.loginform__btn}>
					<LogIn className={styles.btn__item} />
					Register
				</button>
			</form>
			<div className={styles.forms__btn}>
				{/* <button onClick={loginWithGoogle} className={styles.loginform__btn}>
					<Chromium className={styles.btn__item} />
					Google
				</button> */}
			</div>
			<p className={styles.loginform__text}>Dont have an Account Login</p>
		</div>
	)
}
