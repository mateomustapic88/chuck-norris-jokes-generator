import React, { useEffect, useState } from 'react';

const api_url = 'http://api.icndb.com/jokes/random';

function App() {
	const [joke, setJoke] = useState('');

	const generateJoke = () => {
		fetch(api_url)
			.then((res) => res.json())
			.then((data) => setJoke(data.value.joke));
	};

	useEffect(() => {
		generateJoke();
	}, []);

	return (
		<div className='box'>
			<h2>Chuck Norris Jokes Generator</h2>
			<p dangerouslySetInnerHTML={{ __html: joke }} />
			<button onClick={generateJoke}>
				Get new joke <span role='img'>&#128514;</span>
			</button>
		</div>
	);
}

export default App;
