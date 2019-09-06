import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	input: PropTypes.string,
};

const defaultProps = {
};

class ChatListPage extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		return <div className='kyabia :)'>
			<p>this is your space {this.props.input}</p>
		</div>
	}
}

ChatListPage.propTypes = propTypes;
ChatListPage.defaultProps = defaultProps;

export default ChatListPage;
