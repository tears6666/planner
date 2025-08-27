import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import BoardPage from '../pages/boardpage/BoardPage'
import LoginPage from '../pages/loginpage/LoginPage'
import Pomodoro from '../pages/pomodoro/Pomodoro'
import { Layout } from './layout/Layout'

export default function App() {
	const [isAuth, setIsAuth] = useState(false)
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route
				path='/'
				element={isAuth ? <Layout /> : <Navigate to='/login' replace />}
			>
				<Route path='/board' element={<BoardPage />} />
				<Route path='/pomodoro' element={<Pomodoro />} />
			</Route>
		</Routes>
	)
}
