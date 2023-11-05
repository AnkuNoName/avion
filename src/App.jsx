import './scss/global.scss'
import HeaderHome from './components/Header/HeaderHome'
import BottomHome from './components/Bottom/BottomHome'
import Home from './pages/Home'

function App() {
	return (
		<div className='wrapper'>
			<HeaderHome />
			<div className='content'>
				<div className='container'>
					<Home />
				</div>
			</div>
			<BottomHome />
		</div>
	)
}

export default App
