import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import TimeUnit from './TimeUnit'
import { TimeUnits, decrementTimeUnits, getTimeUnits } from './helpers'
import Confetti from 'react-confetti'

export default function App() {
	const [timeUnits, setTimeUnits] = useState<TimeUnits>(getTimeUnits(0, 10))
	const [confettiPiecesCount, setConfettiPiecesCount] = useState(200)

	const isTimeUp = Object.values(timeUnits).reduce((a, b) => a + b) === 0

	useEffect(() => {
		if (!isTimeUp) {
			setTimeout(() => setTimeUnits(decrementTimeUnits(timeUnits)), 1000)
		} else {
			setTimeout(() => setConfettiPiecesCount(0), 3000)
		}
	}, [timeUnits, isTimeUp])

	return (
		<div className='grid h-screen grid-rows-[auto_auto_1fr] justify-items-center bg-veryDarkBlue bg-hills-and-stars bg-pos-mobile bg-no-repeat font-RedHatText lg:bg-pos-desktop'>
			<h1 className='mt-[142px] w-80 text-center text-lg uppercase leading-6 tracking-[.4rem] text-white lg:mt-40 lg:w-full lg:text-2xl lg:leading-normal'>
				we’re launching soon
			</h1>
			<main className='mt-[54px] grid grid-flow-col gap-x-[17px] lg:mt-28 lg:gap-x-8'>
				<h2 className='fixed scale-0'>Timer</h2>
				{(Object.keys(timeUnits) as Array<keyof typeof timeUnits>).map(timeUnit => (
					<TimeUnit
						key={timeUnit}
						label={timeUnit}
						value={timeUnits[timeUnit]}
					/>
				))}
			</main>
			<footer className='z-10 mb-10 mt-auto flex gap-x-8 lg:mb-16 lg:gap-x-10'>
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
			</footer>
			{isTimeUp && <Confetti numberOfPieces={confettiPiecesCount} />}
		</div>
	)
}
