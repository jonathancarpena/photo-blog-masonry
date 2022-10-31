import React from 'react';
import { Photo } from '../../lib/interfaces';
import './styles.css';
type Props = {
	photo: string;
	caption: string;
	date: Photo['date'];
	handleClose: () => void;
};

function Modal({ photo, date, caption, handleClose }: Props) {
	return (
		<>
			<div className="modal">
				<img src={photo} alt={photo} />
				<div className="modal__info">
					<p className="modal__info__date">
						{`${date.month} ${date.day}, ${date.year}`}
					</p>
					<p className="modal__info__caption">{caption}</p>
				</div>
			</div>

			<button className="modal__close" onClick={handleClose}>
				✖
			</button>

			<div onClick={handleClose} className="modal__background">
				.
			</div>
		</>
	);
}

export default Modal;
