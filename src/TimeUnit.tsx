import { FC } from 'react'

type TimeUnitProps = {
	value: number
	label: string
}

const TimeUnit: FC<TimeUnitProps> = ({ value, label }: TimeUnitProps) => {
	return (
		<div className='flex flex-col items-center gap-y-[10px] lg:gap-y-5'>
			<div className='relative grid h-[68px] w-[68px] grid-flow-col grid-cols-[auto_1fr_auto] items-center rounded-sm bg-darkBlue lg:h-36 lg:w-36 lg:rounded-lg'>
				<div className='time-unit-dot'></div>
				<div className='z-10 text-center text-4xl text-softRed lg:text-[80px]'>{value.toString().padStart(2, '0')}</div>
				<div className='time-unit-dot -scale-x-100'></div>
				<div className='absolute z-0 h-[1px] w-full bg-veryDarkBlue'></div>
			</div>
			<div className='text-[8px] uppercase tracking-[.15rem] text-grayBlue lg:text-sm lg:tracking-[.3rem]'>{label}</div>
		</div>
	)
}

export default TimeUnit
