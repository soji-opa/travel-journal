import japanimage from '../images/japanimage.png';
import geolocation from '../images/geolocation-icon.png';

export default function Card(props) {
	return (
		<div className='card'>
			<div className='image--div'>
				<img src={props.image} className='card-img' />
			</div>
			<div className='card--description'>
				<div className='card-location'>
					<img src={geolocation} />
					<h2 className='description-title'>{props.location}</h2>
					<a href={props.link} target='_blank'>
						View on Google maps
					</a>
				</div>
				<h3 className='location-title'>{props.title}</h3>

				<p className='card-date'>
					{props.startdate} - {props.enddate}
				</p>

				<p className='card-text'>{props.description}</p>
			</div>
		</div>
	);
}
