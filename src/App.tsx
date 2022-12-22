import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { DatePicker, Button, Space } from 'antd'
import { playlistApi } from './api/player/player'
function MyButton() {
	return <Button>I'm a button</Button>
}
function LikeButton() {
	const [liked, setLiked] = useState(false)

	if (liked) {
		console.log('liked1111111')

		return <div onClick={() => setLiked(false)}>NotLike</div>;
	}

	return (<Button onClick={() => setLiked(true)}>liked</Button>)
}
const user = {
	name: 'Hedy',
	imageUrl: 'https://t11.baidu.com/it/u=3005961094,4112124005&fm=58',
	imageSize: 99,
}
const App: React.FC = () => {
	const [count, setCount] = useState(0)
	return (
		<div className='App'>
			<LikeButton></LikeButton>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src='/vite.svg' className='logo' alt='Vite logo' />
				</a>
				<a href='https://reactjs.org' target='_blank'>
					<img src={reactLogo} className='logo' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<MyButton />
			<img
				className='avatar'
				src={user.imageUrl}
				alt={user.name}
				style={{ width: user.imageSize, height: user.imageSize }}
			></img>
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
