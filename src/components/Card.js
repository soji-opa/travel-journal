import japanimage from '../images/japanimage.png';
import geolocation from '../images/geolocation-icon.png';

export default function Card() {
	return (
		<div className='card'>
			<div>
				<img src={japanimage} className='card-img' />
			</div>
			<div className='card--description'>
				<div className='card-location'>
					<img src={geolocation} />
					<h2 className='description-title'>JAPAN</h2>
					<a href='#'> View on Google maps</a>
				</div>
				<h3 className='location-title'>Mount Fuji</h3>

				<p className='card-date'>12 Jan, 2021 - 24 Jan, 2021</p>

				<p className='card-description'>
					Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
					(12,380 feet). Mount Fuji is the single most popular tourist site in
					Japan, for both Japanese and foreign tourists.'
				</p>
			</div>
		</div>
	);
}
