import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Snackbar from '@material-ui/core/Snackbar';

import UserPhoto from '../components/common/userPhoto';
import Orchestrator from '../../orchestrator';

const kyabia = {
	"id": 11198,
	"photo": "https://c-ssl.duitang.com/uploads/item/201704/22/20170422072348_5T3iS.jpeg",
	"name": "Kyabia Chiang",
}

const kyle = {
	"id": 1792,
	"photo": "https://c-ssl.duitang.com/uploads/item/201606/10/20160610191324_eLNUQ.gif",
	"name": "Zyle Khou",
}

const testData = [
	{
		id: 7956,
		user: kyle,
		lastMessage: {
			text: "I miss you",
			timestamp: "2019-09-05T10:17:09",
		},
	},
	{
		id: 6123,
		user: kyabia,
		lastMessage: {
			text: "I miss you too!",
			timestamp: "2019-09-05T10:19:11",
		},
	},
]

const styles = ({
	icon: {
		fontSize: 14,
		margin: 0,
	},
	avatar: {
		margin: 0,
		width: 60,
		height: 60,
	},
});

const propTypes = {
	input: PropTypes.string,
};

const defaultProps = {};

class ChatListPage extends React.Component {
	constructor(props) {
		super(props);
		this.onLoadData = this.onLoadData.bind(this);
		this.state = {
			chats: testData,
		}
	}

	componentDidMount() {
		Orchestrator.loadChats(this.onLoadData);
	}

	onLoadData() {
		this.setState({
			chats: [...this.state.chats, ...Orchestrator.AppData.chats],
		});
	}

	render() {
		return <div className='kyabia :)'>
			<p>this is your space {this.props.input}</p>
			<UserPhoto user={kyabia}></UserPhoto>
			<UserPhoto user={kyle}></UserPhoto>

			{this.state.chats.map((chat, index) => (
				<ListItem button className="user" key={index}>
					<UserPhoto user={chat.user} />
					<div className="details">
						<p className="name">{chat.user.name}</p>
						<p className="lastMessage">{chat.lastMessage.text}</p>
					</div>
					<div className="status">
						<Moment date={chat.lastMessage.timestamp} />
					</div>

					<Snackbar
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						autoHideDuration={1000}
						open={false}
						ContentProps={{
							'aria-describedby': 'message-id',
						}}
						message={<span id="message-id">{chat.user.name} online</span>}
					/>
				</ListItem>
			))}
		
		</div>
	}
}

ChatListPage.propTypes = propTypes;
ChatListPage.defaultProps = defaultProps;

export default withStyles(styles)(ChatListPage);
