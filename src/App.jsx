import './scss/global.scss'
import HeaderHome from './components/Header/HeaderHome'
import BottomHome from './components/Bottom/BottomHome'
import Home from './pages/Home'
import Catalog from './pages/Catalog'

import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className='wrapper'>
			<HeaderHome />
			<div className='content'>
				<div className='container'>
					<Routes>
						<Route path='/' element = {<Home />} />
						<Route path='catalog.html' element = {<Catalog />} />
					</Routes>
				</div>
			</div>
			<BottomHome />
		</div>
	)
}

export default App
