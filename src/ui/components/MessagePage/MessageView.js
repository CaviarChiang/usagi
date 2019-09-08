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
		Orchestrator.loadHistory(this.onLoadData);
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
		</div>
	}
}
MessageView.propTypes = propTypes;
MessageView.defaultProps = defaultProps;
export default MessageView;
