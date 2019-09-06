import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import MessageBubble from '../components/messageBubble.js';

//these are here just to annotate the properties that can be passed down
const propTypes = {
	name: PropTypes.string,
	prompt: PropTypes.oneOf([
		'success',
		'warning',
		'error',
		'wrench',
		'offline',
		'info',
	]),
};

//automatically sets these as defualt if none was passed down
const defaultProps = {
	name: 'default name',
};

class MessagePage extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		let list = [
			{message: 'message1', received: true},
			{message: 'message2', received: false},
			{message: 'message3', received: true},
			{message: 'message4', received: true},
			{randomObject: 'test default'},
		];
		return <div>
			{list.map((item) => <MessageBubble 
				message={item.message}
				received={item.received}
			/>)}
			<TextField/>
		</div>
	}
}
MessagePage.propTypes = propTypes;
MessagePage.defaultProps = defaultProps;
export default MessagePage;
