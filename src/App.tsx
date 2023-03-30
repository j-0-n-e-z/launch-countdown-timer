import { useEffect, useState } from 'react'
import './App.css'
import bgStars from './assets/images/bg-stars.svg'
import patternHills from './assets/images/pattern-hills.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebookSquare,
	faInstagram,
	faPinterest
} from '@fortawesome/free-brands-svg-icons'

function App() {
	const [time, setTime] = useState((8 * 24 + 23) * 60 * 60 + 55 * 60 + 41)

	const getDays = () => ~~(time / 86400)
	const getHours = () => ~~((time - getDays() * 86400) / 3600)
	const getMinutes = () =>
		~~((time - getDays() * 86400 - getHours() * 3600) / 60)
	const getSeconds = () =>
		~~(time - getDays() * 86400 - getHours() * 3600 - getMinutes() * 60)

	useEffect(() => {
		const interval = setInterval(() => {
			if (time > 0) setTime(time => time - 1)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const pad = (num: number) => num.toString().padStart(2, '0')

	return (
		<div className='grid content-start justify-center justify-items-center h-screen bg-veryDark'>
			<img className='absolute top-0 left-0' src={bgStars} alt='stars' />
			<img
				className='absolute bottom-0 left-[50%] translate-x-[-50%]'
				src={patternHills}
				alt='hills'
			/>
			<h1 className='text-white uppercase text-xl tracking-[.4rem] mt-40'>
				we're launching soon
			</h1>
			<div className='grid grid-flow-col gap-8 mt-28'>
				<div className='flex flex-col gap-5 items-center'>
					<div className='timer-item'>
						<div className='z-10 w-2 h-3 rounded-[0_100%_100%_0] bg-veryDark'></div>
						<div className='z-10 text-[80px] text-softRed'>
							{pad(getDays())}
						</div>
						<div className='z-10 w-2 h-3 rounded-[100%_0_0_100%] bg-veryDark'></div>
						<div className='absolute z-0 w-full h-[1px] bg-veryDarkBlue'></div>
					</div>
					<div className='text-grayBlue text-sm tracking-[.3rem] uppercase'>
						days
					</div>
				</div>
				<div className='flex flex-col gap-5 items-center'>
					<div className='timer-item'>
						<div className='z-10 w-2 h-3 rounded-[0_100%_100%_0] bg-veryDark'></div>
						<div className='z-10 text-[80px] text-softRed'>
							{pad(getHours())}
						</div>
						<div className='z-10 w-2 h-3 rounded-[100%_0_0_100%] bg-veryDark'></div>
						<div className='absolute z-0 w-full h-[1px] bg-veryDarkBlue'></div>
					</div>
					<div className='text-grayBlue text-sm tracking-[.3rem] uppercase'>
						hours
					</div>
				</div>
				<div className='flex flex-col gap-5 items-center'>
					<div className='timer-item'>
						<div className='z-10 w-2 h-3 rounded-[0_100%_100%_0] bg-veryDark'></div>
						<div className='z-10 text-[80px] text-softRed'>
							{pad(getMinutes())}
						</div>
						<div className='z-10 w-2 h-3 rounded-[100%_0_0_100%] bg-veryDark'></div>
						<div className='absolute z-0 w-full h-[1px] bg-veryDarkBlue'></div>
					</div>
					<div className='text-grayBlue text-sm tracking-[.3rem] uppercase'>
						minutes
					</div>
				</div>
				<div className='flex flex-col gap-5 items-center'>
					<div className='timer-item'>
						<div className='w-2 h-3 rounded-[0_100%_100%_0] bg-veryDark z-10'></div>
						<div className='text-[80px] text-softRed z-10'>
							{pad(getSeconds())}
						</div>
						<div className='w-2 h-3 rounded-[100%_0_0_100%] bg-veryDark z-10'></div>
						<div className='absolute z-0 w-full h-[1px] bg-veryDarkBlue'></div>
					</div>
					<div className='text-grayBlue text-sm tracking-[.3rem] uppercase'>
						seconds
					</div>
				</div>
			</div>
			<div className='flex gap-10 mt-[350px] z-10'>
				<a
					href='#'
					className='cursor-pointer text-grayBlue hover:text-white text-3xl'
				>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</a>
				<a
					href='#'
					className='cursor-pointer text-grayBlue hover:text-white text-3xl'
				>
					<FontAwesomeIcon icon={faPinterest} />
				</a>
				<a
					href='#'
					className='cursor-pointer text-grayBlue hover:text-white text-3xl'
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</div>
		</div>
	)
}

export default App
