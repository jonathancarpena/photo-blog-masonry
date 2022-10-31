export function destructureDate(date: string): {
	year: number;
	day: number;
	month: string;
} {
	const temp = date.split('T')[0].split('-');
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	return {
		year: parseInt(temp[0]),
		day: parseInt(temp[2]),
		month: months[parseInt(temp[1]) - 1],
	};
}

export function generatePhotoType(width: number, height: number): string {
	const ratio = width / height;

	if (ratio <= 0.8) {
		return 'portrait';
	} else if (ratio > 0.8 && ratio < 1.125) {
		return 'square';
	} else {
		return 'landscape';
	}
}
