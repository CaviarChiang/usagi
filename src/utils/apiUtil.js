import axios from 'axios';

const SERVER_HOST = 'http://18.222.226.32';
//const SERVER_HOST = 'http://mrmyyesterday.com:8080';

const chatListQuery = 'chatlist-load?user_id=';
const messageHistoryQueryParam1 = 'message-load?sender_id=';
const messageHistoryQueryParam2 = '&receiver_id=';
const loginEndpoint = 'api/signin';
const loginUsernameParam = '?username=';
const loginPasswordParam = '&password=';

const relayServer = 'ws://mrmyyesterday.com:5000';

class ApiUtil {

	login(username, password) {
		return axios.get(SERVER_HOST + '/' + loginEndpoint + 
			loginUsernameParam + username + 
			loginPasswordParam + password);
	}

	loadChats(userId) {
		return axios.get(SERVER_HOST + '/' + chatListQuery + userId);
	}

	loadHistory(userId, targetId) {
		return axios.get(SERVER_HOST + '/' + 
			messageHistoryQueryParam1 + userId +
			messageHistoryQueryParam2 + targetId);
	}
}

export default ApiUtil;
