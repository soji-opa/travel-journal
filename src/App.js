import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import data from '../src/data';

function App() {
	const card = data.map((item) => <Card key={item.id} destination={item} />);

	return (
		<div className='App'>
			<Header />
			<div className='card-list'>{card}</div>
		</div>
	);
}

export default App;
