import React, { useState } from 'react';
// Componenets
import SimpleForm from './Components/SimpleForm';
import Results from './Components/Results';

const App = () => {
	const divStyles = {
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	const [result, setResult] = useState(0.0);

	return (
		<div style={divStyles}>
			{result === 0.0 ? (
				<SimpleForm callback={setResult} />
			) : (
				<Results res={result} />
			)}
		</div>
	);
};

export default App;
