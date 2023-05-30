import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebookSquare,
	faInstagram,
	faPinterest,
} from '@fortawesome/free-brands-svg-icons'
import TimeUnit from './TimeUnit'
import { decrementTimeUnits, getTimeUnits } from './helpers'
import Confetti from 'react-confetti'

export default function App() {
	const [timeUnits, setTimeUnits] = useState(getTimeUnits(0, 10))
	const [confettiPiecesCount, setConfettiPiecesCount] = useState(200)

	const totalTime = Object.values(timeUnits).reduce((a, b) => a + b)

	useEffect(() => {
		if (totalTime > 0) {
			setTimeout(
				() => setTimeUnits(timeUnits => decrementTimeUnits(timeUnits)),
				1000
			)
		} else {
			setTimeout(() => setConfettiPiecesCount(0), 3000)
		}
	}, [timeUnits])

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
							value={timeUnits[timeUnit]}
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
			{totalTime === 0 && <Confetti numberOfPieces={confettiPiecesCount} />}
		</main>
	)
}