import { Outlet } from 'react-router-dom'
import SideBar from '../../components/sidebar/SideBar'

export const Layout = () => {
	return (
		<div style={{ display: 'flex' }}>
			<SideBar />
			<Outlet />
		</div>
	)
}
