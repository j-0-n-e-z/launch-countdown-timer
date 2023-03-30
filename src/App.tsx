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
import TimeItem from './TimeItem'

export default function App() {
	const [time, setTime] = useState((8 * 24 + 23) * 60 * 60 + 55 * 60 + 41)

	const getDays = (time: number) => ~~(time / 86400)
	const getHours = (time: number) => ~~((time - getDays(time) * 86400) / 3600)
	const getMinutes = (time: number) =>
		~~((time - getDays(time) * 86400 - getHours(time) * 3600) / 60)
	const getSeconds = (time: number) =>
		~~(
			time -
			getDays(time) * 86400 -
			getHours(time) * 3600 -
			getMinutes(time) * 60
		)

	useEffect(() => {
		const interval = setInterval(() => {
			if (time > 0) setTime(time => time - 1)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const timeItems: Record<string, () => number> = {
		days: () => getDays(time),
		hours: () => getHours(time),
		minutes: () => getMinutes(time),
		seconds: () => getSeconds(time)
	}

	return (
		<div className='grid content-start justify-center justify-items-center h-screen bg-veryDark'>
			<div className='absolute top-0 left-[50%] translate-x-[-50%] w-full flex justify-center'>
				<img src={bgStars} alt='stars' />
			</div>
			<div className='absolute bottom-0 left-[50%] translate-x-[-50%] w-full flex justify-center'>
				<img src={patternHills} alt='hills' />
			</div>
			<h1 className='text-white uppercase lg:text-2xl lg-text-lg tracking-[.4rem] lg:mt-40 mt-36 lg:w-full w-80 text-center'>
				we’re launching soon
			</h1>
			<div className='grid grid-flow-col lg:gap-8 gap-2 lg:mt-28 mt-16'>
				{Object.keys(timeItems).map(timeItem => (
					<TimeItem
						key={timeItem}
						timeItem={timeItem}
						getTimeItem={timeItems[timeItem]}
					/>
				))}
			</div>
			<div className='absolute lg:bottom-16 bottom-10 flex gap-10 z-10'>
				<a href='#' className='brand-link'>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</a>
				<a href='#' className='brand-link'>
					<FontAwesomeIcon icon={faPinterest} />
				</a>
				<a href='#' className='brand-link'>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</div>
		</div>
	)
}
