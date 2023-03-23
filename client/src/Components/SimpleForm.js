import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
// import components
import Post from './Post';

// all available theme props
const theme = {
	background: '#f5f8fb',
	fontFamily: 'monospace',
	headerBgColor: '#fcc327',
	headerFontColor: '#fff',
	headerFontSize: '20px',
	botBubbleColor: '#fcc327',
	botFontColor: '#fff',
	userBubbleColor: '#fff',
	userFontColor: '#4a4a4a',
};

// all available config props
const config = {
	width: "600px",
	height: "800px",
	// floating: true,
};

class SimpleForm extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<ChatBot
					steps={[
						{
							id: '1',
							message: 'Hello there! What is your name?',
							trigger: 'name',
						},
						{
							id: 'name',
							user: true,
							trigger: '2',
						},
						{
							id: '2',
							message: 'Hi {previousValue}, how are you feeling today?',
							trigger: '3',
						},
						{
							id: '3',
							options: [
								{ value: 1, label: 'I am having a great time', trigger: '4' },
								{ value: 2, label: 'Not so good', trigger: '5' },
							],
						},
						{
							id: '5',
							message: 'Sorry to hear that',
							trigger: '6',
						},
						{
							id: '4',
							message: 'That\'s Great!',
							trigger: '6',
						},
						{
							id: '6',
							message: 'Tell me more about how your day/week has been',
							trigger: 'r1',
						},
						{
							id: 'r1',
							user: true,
							trigger: 'end-message',
						},
						{
							id: 'end-message',
							component: <Post />,
							end: true,
						}
					]}
					{...config}
				/>
			</ThemeProvider>

		);
	}

}

export default SimpleForm;

