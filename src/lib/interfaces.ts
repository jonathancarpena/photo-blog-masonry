enum MONTHS {
	JANUARY = 'January',
	FEBRUARY = 'February',
	MARCH = 'March',
	APRIL = 'April',
	MAY = 'May',
	JUNE = 'June',
	JULY = 'July',
	AUGUST = 'August',
	SEPTEMBER = 'September',
	OCTOBER = 'October',
	NOVEMBER = 'November',
	DECEMBER = 'December',
}

type Date = {
	year: number;
	day: number;
	month: string;
};

export interface Photo {
	id: string | number;
	type: string;
	content: string;
	date: Date;
	caption: string;
	alt: string;
}
