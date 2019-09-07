import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';

const propTypes = {
	text: PropTypes.string,
	subTitle: PropTypes.string,
};

const defaultProps = {
};

class MessageInputBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
	}

	render() {
		let className = 'MessageInputBar';
		return <div className={className}>
			<AppBar position='relative'>
				<Toolbar>
					<TextField/>
				</Toolbar>
			</AppBar>
		</div>
	}
}

MessageInputBar.propTypes = propTypes;
MessageInputBar.defaultProps = defaultProps;

export default MessageInputBar;
