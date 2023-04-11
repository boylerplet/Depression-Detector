import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const Post = (props) => {
	const { steps } = props;
	const { r1, r2, r3, r4, r5, r6, r7, r8, r9, r10 } = steps;
	const [result, setResult] = useState(0.0);

	function setMainResult(returnResult) {
		props.callback(returnResult);
	}
	const state = {
		text: [
			r1.value,
			r2.value,
			r3.value,
			r4.value,
			r5.value,
			r6.value,
			r7.value,
			r8.value,
			r9.value,
			r10.value,
		].join(' '),
	};

	const score = useMemo(() => result, [result]);

	useEffect(() => {
		// Create a POST request to the server
		const controller = new AbortController();
		const fetchScore = async () => {
			await axios
				.post(`http://127.0.0.1:5000/chatbot`, JSON.stringify(state), {
					headers: {
						'Content-Type': 'application/json',
					},
					signal: controller.signal,
				})
				.then((res) => {
					console.log(res);
					setResult(res.data.response.result);
					setMainResult(res.data.response.result);
				})
				.catch(function(error) {
					console.log(error);
				});
		};

		fetchScore();

		// Clean up function
		return () => {
			// Cancel any pending request if the component unmounts
			controller.abort();
		};
	}, [score]);

	return (
		<div
			style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
		>
			<p>{`The text has been submitted`}</p>
			<p>{result && `Your score is ${result.toFixed(2)} %`}</p>
		</div>
	);
};

export default Post;
