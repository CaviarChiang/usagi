import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';

const propTypes = {
	onKeyDown: PropTypes.func,
};

const defaultProps = {
};

class MessageInputBar extends React.Component{
	constructor(props){
		super(props);
		this.onKeyDown = this.onKeyDown.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
			text: ''
		}
	}

	onChange(e) {
		this.setState({text: e.target.value});
	}

	onKeyDown(e) {
		if(e.keyCode == 13){
			this.setState({text: ''});
			this.props.onKeyDown(e);
		}
	}

	render() {
		let className = 'MessageInputBar';
		return <div className={className}>
			<AppBar position='relative'>
				<Toolbar>
					<TextField
						value={this.state.text}
						placeholder='type a message'
						onChange={this.onChange}
						onKeyDown={this.onKeyDown}
						fullWidth={true}
						autoFocus={true}
						margin='dense'
        				variant='outlined'
					/>
				</Toolbar>
			</AppBar>
		</div>
	}
}

MessageInputBar.propTypes = propTypes;
MessageInputBar.defaultProps = defaultProps;
export default MessageInputBar;
