import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

const propTypes = {
	message: PropTypes.string,
	received: PropTypes.bool,
};

const defaultProps = {
	message: 'default message',
	received: false
};

class ChatBubble extends React.Component{
	render() {
		let received = this.props.received;
		let className = received? 'Bubble Received' : 'Bubble';
		return <div className={className}>
			<Card>
				{this.props.message}
			</Card>
		</div>
	}
}
ChatBubble.propTypes = propTypes;
ChatBubble.defaultProps = defaultProps;
export default ChatBubble;
