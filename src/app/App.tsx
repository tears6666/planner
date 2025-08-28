import { Route, Routes } from 'react-router-dom'
import BoardPage from '../pages/boardpage/BoardPage'
import Pomodoro from '../pages/pomodoro/Pomodoro'
import { Layout } from './layout/Layout'

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/board' element={<BoardPage />} />
				<Route path='/pomodoro' element={<Pomodoro />} />
			</Route>
		</Routes>
	)
}
