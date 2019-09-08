import React from 'react';
import PropTypes from 'prop-types';

import Orchestrator from '../../Orchestrator.js';

import MessageInputBar from '../components/MessagePage/MessageInputBar.js';
import MessageTopBar from '../components/MessagePage/MessageTopBar.js';
import MessageView from '../components/MessagePage/MessageView.js';

const propTypes = {
};

const defaultProps = {
	name: 'default name',
};

class MessagePage extends React.Component{
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onSubmitHelper = this.onSubmitHelper.bind(this);
		this.state = {
			messageList: [],
		}
	}

	onSubmit(e){
		if(e.keyCode == 13){
			Orchestrator.sendNewMessage(e.target.value, this.onSubmitHelper);
		}
	}

	onSubmitHelper() {
		this.forceUpdate();
	}

	render() {
		return <div>
			<MessageTopBar title='Name of person' subTitle='some sub text'/>
			<MessageView/>
			<MessageInputBar onKeyDown={this.onSubmit}/>
		</div>
	}
}

MessagePage.propTypes = propTypes;
MessagePage.defaultProps = defaultProps;
export default MessagePage;
