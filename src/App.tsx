import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { DatePicker, Button, Space } from 'antd'
import { playlistApi } from './api/player/player'
const App: React.FC = () => {
	const [count, setCount] = useState(0)
	let list = []
	playlistApi().then((res) => {
		console.log(res)
		list = res
	})
	return (
		<div className='App'>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src='/vite.svg' className='logo' alt='Vite logo' />
				</a>
				<a href='https://reactjs.org' target='_blank'>
					<img src={reactLogo} className='logo' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<Space wrap>
					<Button type='primary' onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</Button>
					<Button type='primary'>Primary Button</Button>
					<Button>Default Button</Button>
					<Button type='dashed'>Dashed Button</Button>
					<Button type='text'>Text Button</Button>
					<Button type='link'>Link Button</Button>
				</Space>
			</div>
			<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
			<DatePicker />
		</div>
	)
}

export default App
