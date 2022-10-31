import { useEffect, useState } from 'react';
import ListOfPhotoGrids from './components/ListOfPhotoGrids';
import Layout from './components/Layout';
import Photos from './assets/images';
import { Photo } from './lib/interfaces';
import { createClient } from 'contentful';
import { destructureDate, generatePhotoType } from './lib/utils';

interface State {
	DatedPhotos: {
		[monthYear: string]: Photo[];
	};
}

function App() {
	const [datedPhotos, setDatedPhotos] = useState<State['DatedPhotos'] | null>(
		null
	);
	const [loading, setLoading] = useState(true);

	// UNCOMMENT FOR CONTENTFUL //
	// useEffect(() => {
	// 	const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID || null;
	// 	const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || null;
	// 	if (spaceId && accessToken) {
	// 		const client = createClient({
	// 			space: spaceId,
	// 			accessToken: accessToken,
	// 		});

	// 		const fetchData = async () => {
	// 			const { items } = await client.getEntries({
	// 				content_type: 'blogPhoto',
	// 			});
	// 			const temp: State['DatedPhotos'] = {};
	// 			items.forEach((item: any) => {
	// 				const { year, month, day } = destructureDate(item.sys.createdAt);
	// 				const type = generatePhotoType(
	// 					item.fields.photo.fields.file.details.image.width,
	// 					item.fields.photo.fields.file.details.image.height
	// 				);
	// 				const key = `${month} ${year}`;
	// 				const content = item.fields.photo.fields.file.url;
	// 				const alt = item.fields.photo.fields.title;
	// 				const caption = item.fields.caption;
	// 				const id = item.sys.id;

	// 				const photo = {
	// 					id,
	// 					content,
	// 					alt,
	// 					caption,
	// 					type,
	// 					date: { year, month, day },
	// 				};
	// 				if (temp.hasOwnProperty(key)) {
	// 					temp[key] = [...temp[key], photo];
	// 				} else {
	// 					temp[key] = [photo];
	// 				}
	// 			});

	// 			if (Object.keys(temp).length > 0) {
	// 				setDatedPhotos(temp);
	// 			}

	// 			setLoading(false);
	// 		};

	// 		if (!datedPhotos && loading) {
	// 			fetchData();
	// 		}
	// 	}
	// }, [datedPhotos, loading]);

	// COMMENT IF PREMADE ASSETS //
	useEffect(() => {
		if (!datedPhotos) {
			const temp: any = {};
			Photos.forEach((item) => {
				if (temp.hasOwnProperty(`${item.date.month} ${item.date.year}`)) {
					temp[`${item.date.month} ${item.date.year}`] = [
						...temp[`${item.date.month} ${item.date.year}`],
						item,
					];
				} else {
					temp[`${item.date.month} ${item.date.year}`] = [item];
				}
			});

			if (Object.keys(temp).length > 0) {
				setDatedPhotos(temp);
			}

			setLoading(false);
		}
	}, [datedPhotos]);

	return (
		<Layout>
			<>
				{!datedPhotos && loading && (
					<h1
						style={{
							position: 'absolute',
							top: '45%',
						}}
					>
						Loading...
					</h1>
				)}

				{!datedPhotos && !loading && (
					<h1
						style={{
							position: 'absolute',
							top: '45%',
						}}
					>
						Just Dust.
					</h1>
				)}

				{datedPhotos && !loading && (
					<ListOfPhotoGrids datedPhotos={datedPhotos} />
				)}
			</>
		</Layout>
	);
}

export default App;
