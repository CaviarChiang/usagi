import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import MessageBubble from '../components/messageBubble.js';
import MessageInputBar from '../components/messageInputBar.js';
import MessageTopBar from '../components/messageTopBar.js';

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
		let list = [
			{message: 'message1', received: true},
			{message: 'message2', received: false},
			{message: 'message3', received: true},
			{message: 'message4', received: true},
			{randomObject: 'test default'},
		];
		this.state = {
			messageList: list,
		}
	}

	render() {
		
		return <div>
			<MessageTopBar title='Name of person' subTitle='some sub text'/>
			{this.state.messageList.map((item) => <MessageBubble 
				message={item.message}
				received={item.received}
			/>)}
			<MessageInputBar/>
		</div>
	}
}
MessagePage.propTypes = propTypes;
MessagePage.defaultProps = defaultProps;
export default MessagePage;
