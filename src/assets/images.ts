import { Photo } from '../lib/interfaces';

import img1 from './square.PNG';
import img2 from './portrait.PNG';
import img3 from './landscape.PNG';
import img4 from './portrait-2.PNG';
import img5 from './square-2.PNG';
import img6 from './landscape-2.PNG';

const images: Photo[] = [
	{
		id: 1,
		type: 'square',
		content: img1,
		alt: 'img1',
		date: {
			month: 'Oct',
			day: 5,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 2,
		type: 'portrait',
		content: img2,
		alt: 'img2',
		date: {
			month: 'Oct',
			day: 12,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 3,
		type: 'landscape',
		content: img3,
		alt: 'img3',
		date: {
			month: 'Oct',
			day: 17,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 4,
		type: 'portrait',
		content: img4,
		alt: 'img4',
		date: {
			month: 'Oct',
			day: 22,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 5,
		alt: 'img5',
		type: 'square',
		content: img5,
		date: {
			month: 'Oct',
			day: 24,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 6,
		alt: 'img6',
		type: 'landscape',
		content: img6,
		date: {
			month: 'Oct',
			day: 22,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 7,
		alt: 'img7',
		type: 'portrait',
		content: img4,
		date: {
			month: 'Oct',
			day: 22,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 8,
		alt: 'img8',
		type: 'square',
		content: img5,
		date: {
			month: 'Nov',
			day: 22,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 9,
		alt: 'img9',
		type: 'square',
		content: img1,
		date: {
			month: 'Nov',
			day: 22,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 10,
		alt: 'img10',
		type: 'landscape',
		content: img3,
		date: {
			month: 'Nov',
			day: 22,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 11,
		alt: 'img11',
		type: 'portrait',
		content: img4,
		date: {
			month: 'Nov',
			day: 22,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 12,
		alt: 'img12',
		type: 'square',
		content: img5,
		date: {
			month: 'Nov',
			day: 22,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 13,
		alt: 'img13',
		type: 'landscape',
		content: img6,
		date: {
			month: 'Nov',
			day: 22,
			year: 2022,
		},
		caption: 'Sweater Weather',
	},
	{
		id: 14,
		alt: 'img14',
		type: 'portrait',
		content: img4,
		date: {
			month: 'Nov',
			day: 22,
			year: 2020,
		},
		caption: 'Sweater Weather',
	},
];

export default images;
