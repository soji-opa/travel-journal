import geolocation from '../images/geolocation-icon.png';

export default function Card(props) {
	return (
		<div className='card'>
			<div className='image--div'>
				<img
					src={require(`../images/${props.destination.imageUrl}`)}
					alt='country'
					className='card-img'
				/>
			</div>

			<div className='card--description'>
				<div className='card-location'>
					<img src={geolocation} alt='icon' />
					<h2 className='description-title'>{props.destination.title}</h2>
					<a
						href={props.destination.googleMapsUrl}
						target='_blank'
						rel='noreferrer'
					>
						View on Google maps
					</a>
				</div>
				<h3 className='location-title'>{props.destination.location}</h3>
				<p className='card-date'>
					{props.destination.startDate} - {props.destination.endDate}
				</p>
				<p className='card-text'>{props.destination.description}</p>
			</div>
		</div>
	);
}
