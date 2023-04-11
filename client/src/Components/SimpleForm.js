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
	width: '600px',
	height: '800px',
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
							message: `Hello there! I am a chatbot who was created to talk to people in a safe and secure environment
							think of me as a friend i don't judge i can't i'm a computer
							i'm here to learn about people and would love to learn about you
						    i'll ask a few questions to get us started and please feel free to tell me anything your answers are totally confidential. First off, where are you originally from`,
							trigger: 'r1',
						},
						{
							id: 'r1',
							user: true,
							trigger: '2',
						},
						{
							id: '2',
							message: 'Do you like the place you currently live in ?',
							trigger: 'r2',
						},

						{
							id: 'r2',
							user: true,
							trigger: '3',
						},
						{
							id: '3',
							message: 'Why so, can you explain?',
							trigger: 'r3',
						},
						{
							id: 'r3',
							user: true,
							trigger: '4',
						},
						{
							id: '4',
							message:
								'Do you travel a lot? how often do you travel to your hometown?',
							trigger: 'r4',
						},
						{
							id: 'r4',
							user: true,
							trigger: '5',
						},
						{
							id: '5',
							message: 'How good are you at controlling your temper',
							trigger: 'r5',
						},
						{
							id: 'r5',
							user: true,
							trigger: '6',
						},
						{
							id: '6',
							message: 'Can you tell me more about it',
							trigger: 'r6',
						},
						{
							id: 'r6',
							user: true,
							trigger: '7',
						},
						{
							id: '7',
							message:
								'When was the last time you felt really happy. Tell me all about it',
							trigger: 'r7',
						},
						{
							id: 'r7',
							user: true,
							trigger: '8',
						},
						{
							id: '8',
							message:
								'When was the last time you argued with someone and what was it about',
							trigger: 'r8',
						},
						{
							id: 'r8',
							user: true,
							trigger: '9',
						},
						{
							id: '9',
							message:
								'How did you feel in that moment? tell me more about that',
							trigger: 'r9',
						},
						{
							id: 'r9',
							user: true,
							trigger: '10',
						},
						{
							id: '10',
							message:
								'Tell me about how your life has been in the past 2 years. The things you wanted to accomplish, the experiences you had, how did you feel about your life etc. ',
							trigger: 'r10',
						},
						{
							id: 'r10',
							user: true,
							trigger: '11',
						},
						{
							id: '11',
							message: 'Thank you for taking the time to talk to me',
							trigger: 'end-message',
						},
						{
							id: 'end-message',
							component: <Post callback={this.props.callback} />,
							end: true,
						},
					]}
					{...config}
				/>
			</ThemeProvider>
		);
	}
}

export default SimpleForm;
