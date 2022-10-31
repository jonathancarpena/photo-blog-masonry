import { Photo } from '../lib/interfaces';

import img1 from './1.PNG';
import img2 from './2.PNG';
import img3 from './3.PNG';
import img4 from './4.PNG';
import img5 from './5.PNG';
import img6 from './6.PNG';
import img7 from './7.PNG';
import img8 from './8.PNG';
import img9 from './9.PNG';
import img10 from './10.PNG';
import img11 from './11.PNG';
import img12 from './12.PNG';

// Images are from https://www.instagram.com/cdxtech/

interface SampleImages extends Photo {
	width: number;
	height: number;
}
const images: SampleImages[] = [
	// October 2022
	{
		id: 1,
		type: '',
		content: img1,
		alt: 'img1',
		width: 1036,
		height: 1036,
		date: {
			month: 'Oct',
			day: 5,
			year: 2022,
		},
		caption: 'Aesthetic Keychain holder',
	},
	{
		id: 2,
		type: '',
		content: img2,
		alt: 'img2',
		width: 755,
		height: 1091,
		date: {
			month: 'Oct',
			day: 12,
			year: 2022,
		},
		caption: 'Current Desk Setup',
	},
	{
		id: 3,
		type: '',
		content: img3,
		alt: 'img3',
		width: 739,
		height: 1131,
		date: {
			month: 'Oct',
			day: 17,
			year: 2022,
		},
		caption: 'Apple Ecosystem takeover',
	},
	{
		id: 4,
		type: '',
		content: img4,
		alt: 'img4',
		width: 400,
		height: 600,
		date: {
			month: 'Oct',
			day: 22,
			year: 2022,
		},
		caption: 'Well if you look at the time.',
	},
	{
		id: 5,
		alt: 'img5',
		type: '',
		content: img5,
		width: 899,
		height: 528,
		date: {
			month: 'Oct',
			day: 24,
			year: 2022,
		},
		caption: 'Sleek Leather DeskMat',
	},
	{
		id: 6,
		alt: 'img6',
		type: '',
		content: img6,
		width: 897,
		height: 484,
		date: {
			month: 'Oct',
			day: 22,
			year: 2022,
		},
		caption: 'Sweater Weather.',
	},
	{
		id: 7,
		alt: 'img7',
		type: '',
		content: img7,
		width: 750,
		height: 750,
		date: {
			month: 'Oct',
			day: 30,
			year: 2022,
		},
		caption: '3:36. Time to Work.',
	},
	// November 2022
	{
		id: 8,
		alt: 'img8',
		type: '',
		content: img8,
		width: 798,
		height: 1047,
		date: {
			month: 'Nov',
			day: 3,
			year: 2022,
		},
		caption: 'Samsung S22 Ultra.',
	},
	{
		id: 9,
		alt: 'img9',
		type: '',
		content: img9,
		width: 821,
		height: 1055,
		date: {
			month: 'Nov',
			day: 7,
			year: 2022,
		},
		caption: 'Cool Wallet. Cool Light.',
	},
	{
		id: 10,
		alt: 'img10',
		type: '',
		content: img10,
		width: 832,
		height: 832,
		date: {
			month: 'Nov',
			day: 9,
			year: 2022,
		},
		caption: 'A small hint of color.',
	},
	{
		id: 11,
		alt: 'img11',
		type: '',
		content: img11,
		width: 734,
		height: 734,
		date: {
			month: 'Nov',
			day: 18,
			year: 2022,
		},
		caption: 'My dream film camera.',
	},
	{
		id: 12,
		alt: 'img12',
		type: '',
		content: img12,
		width: 857,
		height: 504,
		date: {
			month: 'Nov',
			day: 23,
			year: 2022,
		},
		caption: 'Xbox Controller with a Red Skin',
	},
];

export default images;
