import React from 'react';
import { Photo } from '../../../lib/interfaces';
import PhotoGridItem from './PhotoGridItem';
import './styles.css';

type Props = {
	photos: Photo[];
	month: string;
	year: string;
	handleOpen: (item: Photo) => void;
};

function PhotoGrid({ photos, month, year, handleOpen }: Props) {
	return (
		<div className="gridContainer">
			<h2 className={`gridContainer__label `}>
				{month.toUpperCase()} {year}
			</h2>
			{photos.map((item, idx) => (
				<PhotoGridItem key={idx} handleOpen={handleOpen} data={item} />
			))}
		</div>
	);
}

export default PhotoGrid;
