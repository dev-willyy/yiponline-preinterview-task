interface Dates {
	getDate(): number,
	getDay(): number,
	getHours(): number,
	getMinutes(): number,
	getSeconds(): number,
	toLocaleTimeString(...args: any): String,
	toLocaleDateString(...args: any): String,
	getFullYear(): number
}

const today: Dates = new Date();
const dayNumber: number = today.getDate();
const currentDay: number = today.getDay();
const month: String = today.toLocaleDateString('default', { month: 'long' });
const year: number = today.getFullYear();

const currentDate = `${dayNumber} ${month}, ${year}`

const weekDays: Array<string> = [
	'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
]

function currentTime(): String {
	const hours = today.getHours().toString().padStart(2, '0');
	const minutes = today.getMinutes().toString().padStart(2, '0');
	const seconds = today.getSeconds().toString().padStart(2, '0');
	return `${hours}:${minutes}:${seconds}`;
}

function autoSwitchNameOfDay(todayIndex: number): String {
	if (todayIndex === 0) return weekDays[0];
	if (todayIndex === 1) return weekDays[1];
	if (todayIndex === 2) return weekDays[2];
	if (todayIndex === 3) return weekDays[3];
	if (todayIndex === 4) return weekDays[4];
	if (todayIndex === 5) return weekDays[5];
	if (todayIndex === 6) return weekDays[6];

	return '';
}

function generateWeekDaysArray(todayIndex: number): Array<string> {
	const weekDaysArray = [];

	for (let i = todayIndex + 1; i < weekDays.length; i++) {
		weekDaysArray.push(weekDays[i])
	}

	for (let i = 0; i < todayIndex + 1; i++) {
		weekDaysArray.push(weekDays[i])
	}

	return weekDaysArray;
}

export {
	currentDate,
	currentDay,
	weekDays,
	year,
	currentTime,
	autoSwitchNameOfDay,
	generateWeekDaysArray
}
