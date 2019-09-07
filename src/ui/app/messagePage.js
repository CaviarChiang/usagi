import React from 'react';
import PropTypes from 'prop-types';

import MessageBubble from '../components/messagePage/messageBubble.js';
import MessageInputBar from '../components/messagePage/messageInputBar.js';
import MessageTopBar from '../components/messagePage/messageTopBar.js';

const propTypes = {
	name: PropTypes.string,
};

const defaultProps = {
	name: 'default name',
};

class MessagePage extends React.Component{
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
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

	onSubmit(e){
		if(e.keyCode == 13){
			let newMessage = {
				message: e.target.value
			}
			this.setState({
				messageList: [...this.state.messageList, newMessage]
			})
		}
	}

	render() {
		return <div>
			<MessageTopBar title='Name of person' subTitle='some sub text'/>
			{this.state.messageList.map((item) => <MessageBubble
				message={item.message}
				received={item.received}
			/>)}
			<MessageInputBar onKeyDown={this.onSubmit}/>
		</div>
	}
}

MessagePage.propTypes = propTypes;
MessagePage.defaultProps = defaultProps;
export default MessagePage;
