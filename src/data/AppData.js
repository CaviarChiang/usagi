class AppData{
	constructor(){
		this.userId = '';
		this.userName = '';
		this.targetId = '';
		this.messageCache = {};
		this.chats = [];
	}

	setUserId(userId) {
		this.userId = userId;
	}

	setTargetId(targetId) {
		this.targetId = targetId;
	}
}

export default AppData;
