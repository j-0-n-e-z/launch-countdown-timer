const secondsInDay = 86400
const secondsInHour = 3600
const secondsInMinute = 60

export const getDays = (totalSeconds: number) =>
	Math.floor(totalSeconds / secondsInDay)

export const getHours = (totalSeconds: number) =>
	Math.floor(
		(totalSeconds - getDays(totalSeconds) * secondsInDay) / secondsInHour
	)

export const getMinutes = (totalSeconds: number) =>
	Math.floor(
		(totalSeconds -
			getDays(totalSeconds) * secondsInDay -
			getHours(totalSeconds) * secondsInHour) /
			secondsInMinute
	)

export const getSeconds = (totalSeconds: number) =>
	Math.floor(
		totalSeconds -
			getDays(totalSeconds) * secondsInDay -
			getHours(totalSeconds) * secondsInHour -
			getMinutes(totalSeconds) * secondsInMinute
	)

export const getTimeInSeconds = (
	daysOrHours: number,
	hoursOrMinutes: number,
	minutesOrSeconds: number,
	seconds?: number
) => {
	if (!seconds) {
		return (
			daysOrHours * secondsInHour +
			hoursOrMinutes * secondsInMinute +
			minutesOrSeconds
		)
	}
	return (
		daysOrHours * secondsInDay +
		hoursOrMinutes * secondsInHour +
		minutesOrSeconds * secondsInMinute +
		seconds
	)
}

export const timeUnits = ['days', 'hours', 'minutes', 'seconds'] as const
export type TimeUnit = (typeof timeUnits)[number]

export function getTimeUnitValue(timeUnit: TimeUnit, totalSeconds: number) {
	switch (timeUnit) {
		case 'days':
			return getDays(totalSeconds)
		case 'hours':
			return getHours(totalSeconds)
		case 'minutes':
			return getMinutes(totalSeconds)
		case 'seconds':
		default:
			return getSeconds(totalSeconds)
	}
}
