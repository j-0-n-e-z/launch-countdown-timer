export const pad = (num: number) => num.toString().padStart(2, '0')

export const getDays = (time: number) => ~~(time / 86400)

export const getHours = (time: number) =>
	~~((time - getDays(time) * 86400) / 3600)

export const getMinutes = (time: number) =>
	~~((time - getDays(time) * 86400 - getHours(time) * 3600) / 60)

export const getSeconds = (time: number) =>
	~~(
		time -
		getDays(time) * 86400 -
		getHours(time) * 3600 -
		getMinutes(time) * 60
	)

export const getTimeInSeconds = (
	daysOrHours: number,
	hoursOrMinutes: number,
	minutesOrSeconds: number,
	seconds?: number
) => {
	if (!seconds) {
		return daysOrHours * 3600 + hoursOrMinutes * 60 + minutesOrSeconds
	}
	return (
		daysOrHours * 86400 +
		hoursOrMinutes * 3600 +
		minutesOrSeconds * 60 +
		seconds
	)
}
