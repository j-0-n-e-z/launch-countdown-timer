import React, { FC } from 'react'
import { pad } from './helpers'

type TimeItemProps = {
	getTimeItem: () => number
	timeItem: string
}

const TimeItem: FC<TimeItemProps> = ({ getTimeItem, timeItem }) => {
	return (
		<div className='flex flex-col lg:gap-5 gap-3 items-center'>
			<div className='timer-item'>
				<div className='z-10 lg:w-2 lg:h-3 w-1 h-2 rounded-[0_100%_100%_0] bg-veryDark'></div>
				<div className='z-10 lg:text-[80px] text-2xl text-softRed'>
					{pad(getTimeItem())}
				</div>
				<div className='z-10 lg:w-2 lg:h-3 w-1 h-2 rounded-[100%_0_0_100%] bg-veryDark'></div>
				<div className='absolute z-0 w-full h-[1px] bg-veryDarkBlue'></div>
			</div>
			<div className='text-grayBlue lg:text-sm text-[8px] lg:tracking-[.3rem] tracking-widest uppercase'>
				{timeItem}
			</div>
		</div>
	)
}

export default TimeItem
