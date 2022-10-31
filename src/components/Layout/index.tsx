import './styles.css';
import Header from '../Header';
type Props = {
	children: JSX.Element;
};

function Layout({ children }: Props) {
	return (
		<div className="appContainer">
			<Header />
			<main className="main">{children}</main>
		</div>
	);
}

export default Layout;
