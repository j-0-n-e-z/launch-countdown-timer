export const getTimeUnits = (days: number, hours?: number, minutes?: number, seconds?: number) => {
	if (hours === undefined && minutes === undefined && seconds === undefined) {
		;[days, hours, minutes, seconds] = [0, 0, 0, days]
	}

	if (hours !== undefined && minutes === undefined && seconds === undefined) {
		;[days, hours, minutes, seconds] = [0, 0, days, hours]
	}

	if (hours !== undefined && minutes !== undefined && seconds === undefined) {
		;[days, hours, minutes, seconds] = [0, days, hours, minutes]
	}

	if (days && (days < 0 || days > 364)) {
		throw Error('Days count must be between 0 and 364 inclusive')
	}

	if (hours && (hours < 0 || hours > 23)) {
		throw Error('Hours count must be between 0 and 23 inclusive')
	}

	if (minutes && (minutes < 0 || minutes > 59)) {
		throw Error('Minutes count must be between 0 and 59 inclusive')
	}

	if (seconds && (seconds < 0 || seconds > 59)) {
		throw Error('Seconds count must be between 0 and 59 inclusive')
	}

	return {
		days,
		hours: hours || 0,
		minutes: minutes || 0,
		seconds: seconds || 0
	}
}

export type TimeUnits = ReturnType<typeof getTimeUnits>

export function decrementTimeUnits({ days, hours, minutes, seconds }: TimeUnits): TimeUnits {
	if (seconds > 0) {
		seconds--
	} else {
		seconds = 59
		if (minutes > 0) {
			minutes--
		} else {
			minutes = 59
			if (hours > 0) {
				hours--
			} else {
				hours = 23
				if (days > 0) {
					days--
				}
			}
		}
	}
	return { days, hours, minutes, seconds }
}
