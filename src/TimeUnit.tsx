import { FC } from 'react'

type TimeUnitProps = {
	value: number
	label: string
}

const TimeUnit: FC<TimeUnitProps> = ({ value, label }) => {
	return (
		<div className='flex flex-col lg:gap-y-5 gap-y-[10px] items-center'>
			<div className='relative lg:h-36 h-[68px] lg:w-36 w-[68px] bg-darkBlue grid items-center grid-flow-col grid-cols-[auto_1fr_auto] lg:rounded-lg rounded-sm'>
				<div className='time-unit-dot'></div>
				<div className='z-10 lg:text-[80px] text-4xl text-softRed text-center'>
					{value.toString().padStart(2, '0')}
				</div>
				<div className='time-unit-dot -scale-x-100'></div>
				<div className='absolute z-0 w-full h-[1px] bg-veryDarkBlue'></div>
			</div>
			<div className='text-grayBlue lg:text-sm text-[8px] lg:tracking-[.3rem] tracking-[.15rem] uppercase'>
				{label}
			</div>
		</div>
	)
}

export default TimeUnit
