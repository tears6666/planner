import { Route, Routes } from 'react-router-dom'
import Board from '../pages/Board/Board'
import { Layout } from './layout/Layout'

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/board' element={<Board />} />
			</Route>
		</Routes>
	)
}
