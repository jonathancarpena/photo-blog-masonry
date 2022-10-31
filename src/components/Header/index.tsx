import './styles.css';

const CameraSvg = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 24 24"
			fill="none"
			stroke="white"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			style={{
				margin: '10px',
				backgroundColor: '#1E1E1E',
				padding: '1rem',
				borderRadius: '5px',
			}}
		>
			<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
			<circle cx="12" cy="13" r="4"></circle>
		</svg>
	);
};
function Header() {
	return (
		<header>
			<h1 className="title">
				<CameraSvg />
				<p>
					<span>react</span>
					<span>masonry</span>
				</p>
			</h1>
		</header>
	);
}

export default Header;
