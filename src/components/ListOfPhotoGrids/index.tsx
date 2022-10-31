import PhotoGrid from './PhotoGrid';
import './styles.css';
import { useState } from 'react';
import { Photo } from '../../lib/interfaces';
import Modal from '../Modal';

type Props = {
	datedPhotos: {
		[monthYear: string]: Photo[];
	};
};

function ListOfPhotoGrids({ datedPhotos }: Props) {
	const [photoOpen, setOpenPhoto] = useState<Photo | null>(null);

	function handleClose() {
		setOpenPhoto(null);
	}
	function handleOpen(item: Photo) {
		setOpenPhoto(item);
	}

	return (
		<div className="photoList">
			{Object.keys(datedPhotos).map((key, idx) => {
				const temp = key.split(' ');
				return (
					<PhotoGrid
						key={idx}
						year={temp[1]}
						month={temp[0]}
						handleOpen={handleOpen}
						photos={datedPhotos[key]}
					/>
				);
			})}

			{photoOpen && (
				<Modal
					date={photoOpen.date}
					photo={photoOpen.content}
					caption={photoOpen.caption}
					handleClose={handleClose}
				/>
			)}
		</div>
	);
}

export default ListOfPhotoGrids;
