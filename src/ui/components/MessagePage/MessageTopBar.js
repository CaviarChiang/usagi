import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
};

const defaultProps = {
};

class MessageTopBar extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		let className = 'MessageTopBar';
		return <div className={className}>
			<AppBar position='relative' color='inherit'>
				<Toolbar>
					<p>{this.props.title}</p>
				</Toolbar>
			</AppBar>
		</div>
	}
}

MessageTopBar.propTypes = propTypes;
MessageTopBar.defaultProps = defaultProps;

export default MessageTopBar;
