class AppData{
    constructor(){
        this.userId = '';
        this.userName = '';
        this.targetId = '';
        this.messageCache = {}
    }

    setUserId(userId) {
        this.userId = userId;
    }

    setTargetId(targetId) {
        this.targetId = targetId;
    }
}

export default AppData;