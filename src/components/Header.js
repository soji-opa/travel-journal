import globe from '../images/globe.png';

export default function Header() {
	return (
		<header>
			<img src={globe} className='header-img' />
			<h1 className='header-text'> my travel journal.</h1>
		</header>
	);
}
