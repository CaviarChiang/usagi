import React from 'react';
import PropTypes from 'prop-types';
import Orchestrator from '../../../Orchestrator.js';
import MessageBubble from './MessageBubble.js';

const propTypes = {
};

const defaultProps = {
};

class MessageView extends React.Component{

    constructor(props) {
        super(props);
		this.onLoadData = this.onLoadData.bind(this);
        this.state = {
            messageList: [],
        }
    }

    componentDidMount(){
		Orchestrator.APIloadHistory(this.onLoadData);
		Orchestrator.getAppData().relaySocket.onmessage = (event) => {
			let data = JSON.parse(event.data);
			Orchestrator.getAppData().messageCache[Orchestrator.getAppData().targetId].push({
				fields: {
					msg_content: data.message,
					sender: data.sender_id,
				}
			});
			this.forceUpdate();
		};
		this.scrollToBottom();
	}
	
	scrollToBottom() {
		this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}							

    onLoadData() {
		this.setState({
			messageList: Orchestrator.AppData.messageCache['2']
		})
	}
    
	render() {
		return <div className="MessageView">
            {this.state.messageList.map((item) => <MessageBubble
				message={item.fields.msg_content}
				received={item.fields.sender == Orchestrator.AppData.targetId}
			/>)}
			<div style={{ float:"left", clear: "both" }}
             	ref={(el) => { this.messagesEnd = el; }}>
        	</div>
		</div>
	}
}
MessageView.propTypes = propTypes;
MessageView.defaultProps = defaultProps;
export default MessageView;
