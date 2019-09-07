import React from 'react';
import PropTypes from 'prop-types';

import UserPhoto from '../components/common/userPhoto';

const propTypes = {
	input: PropTypes.string,
};

const defaultProps = {
};

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

class ChatListPage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className='kyabia :)'>
			<p>this is your space {this.props.input}</p>
			<UserPhoto user={kyabia}></UserPhoto>
			<UserPhoto user={kyle}></UserPhoto>
		</div>
	}
}

ChatListPage.propTypes = propTypes;
ChatListPage.defaultProps = defaultProps;

export default ChatListPage;
