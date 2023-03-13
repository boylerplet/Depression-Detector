import React, { useState } from "react";

function Chatbot() {
	const [inputText, setInputText] = useState("");
	const [response, setResponse] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("http://127.0.0.1:5000/chatbot", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ text: inputText }),
		});
		const data = await response.json();
		console.log(data);
		setResponse(data.response.res);
		setInputText("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
				/>
				<button type="submit">Send</button>
			</form>
			{response && <p>{response}</p>}
		</div>
	);
}

export default Chatbot;
