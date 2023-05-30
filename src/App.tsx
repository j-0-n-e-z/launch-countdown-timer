import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebookSquare,
	faInstagram,
	faPinterest,
} from '@fortawesome/free-brands-svg-icons'
import TimeUnit from './TimeUnit'
import { getTimeInSeconds, timeUnits } from './helpers'

export default function App() {
	const [totalSeconds, setTotalSeconds] = useState<number>(
		getTimeInSeconds(8, 23, 55, 41)
	)

	useEffect(() => {
		if (totalSeconds > 0) {
			setTimeout(() => setTotalSeconds(prev => prev - 1), 1000)
		}
	}, [totalSeconds])

	return (
		<main className='grid font-RedHatText grid-rows-[auto_auto_1fr] justify-items-center h-screen bg-veryDarkBlue bg-stars bg-no-repeat lg:bg-pos-desktop bg-pos-mobile'>
			<h1 className='text-white uppercase lg:text-2xl text-lg lg:leading-normal leading-6 tracking-[.4rem] lg:mt-40 mt-[142px] lg:w-full w-80 text-center'>
				we’re launching soon
			</h1>
			<div className='grid grid-flow-col lg:gap-x-8 gap-x-[17px] lg:mt-28 mt-[54px]'>
				{(Object.keys(timeUnits) as Array<keyof typeof timeUnits>).map(
					timeUnit => (
						<TimeUnit
							key={timeUnit}
							label={timeUnit}
							value={timeUnits[timeUnit](totalSeconds)}
						/>
					)
				)}
			</div>
			<div className='flex mt-auto lg:mb-16 mb-10 lg:gap-x-10 gap-x-8 z-10'>
				<a
					href='#'
					target='_blank'
					className='brand-icon'
					aria-label='facebook'
				>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</a>
				<a
					href='#'
					target='_blank'
					className='brand-icon'
					aria-label='pinterest'
				>
					<FontAwesomeIcon icon={faPinterest} />
				</a>
				<a
					href='#'
					target='_blank'
					className='brand-icon'
					aria-label='instagram'
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</div>
		</main>
	)
}
