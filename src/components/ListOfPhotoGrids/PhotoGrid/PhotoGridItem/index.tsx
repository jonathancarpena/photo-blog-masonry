import { Photo } from '../../../../lib/interfaces';
import './styles.css';

interface Props {
	data: Photo;
	handleOpen: (item: Photo) => void;
}

function PhotoGridItem({ data, handleOpen }: Props) {
	const { date, content, alt, type } = data;
	function generateStyles(type: string): string {
		if (type === 'portrait') {
			return 'photoGrid__item--portrait';
		} else if (type === 'landscape') {
			return 'photoGrid__item--landscape';
		} else {
			return 'photoGrid__item--square';
		}
	}

	return (
		<div
			onClick={() => handleOpen(data)}
			className={`photoGrid__item ${generateStyles(type)} `}
		>
			<img src={content} alt={alt} />

			<div className="photoGrid__item__overlay">
				<p>{date.day}</p>
			</div>
		</div>
	);
}

export default PhotoGridItem;
