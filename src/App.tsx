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
import {
	getDays,
	getHours,
	getMinutes,
	getSeconds,
	getTimeInSeconds
} from './helpers'

export default function App() {
	const [seconds, setSeconds] = useState(getTimeInSeconds(8, 23, 55, 41))

	useEffect(() => {
		const interval = setInterval(() => {
			if (seconds > 0) setSeconds(seconds => seconds - 1)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const timeItems: Record<string, () => number> = {
		days: () => getDays(seconds),
		hours: () => getHours(seconds),
		minutes: () => getMinutes(seconds),
		seconds: () => getSeconds(seconds)
	}

	return (
		<div className='grid grid-rows-[auto_auto_1fr] justify-items-center h-screen bg-veryDark'>
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
						getTime={timeItems[timeItem]}
					/>
				))}
			</div>
			<div className='flex self-end lg:mb-16 mb-10 gap-10 z-10'>
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
