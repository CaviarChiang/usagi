import ApiUtil from './utils/ApiUtil.js';
import AppData from './data/AppData.js';

const testLastMessage = {
    text: "This is a test message which is a bit long",
    timestamp: "2019-09-01T10:11:08",
};
const testId = 7956;
const testPhotoSrc = [
    "https://c-ssl.duitang.com/uploads/item/201710/13/20171013165012_nysjZ.gif",
    "https://c-ssl.duitang.com/uploads/item/201510/01/20151001184324_kaR3Q.png",
    "https://c-ssl.duitang.com/uploads/item/201803/12/20180312170520_brhyb.jpg",
    "https://c-ssl.duitang.com/uploads/item/201803/19/20180319144857_ntpuv.jpg",
    "https://c-ssl.duitang.com/uploads/item/201505/16/20150516085042_SzNXy.gif",
];

class Orchestrator{
    constructor(){
        this.ApiUtil = new ApiUtil();
        this.AppData = new AppData();
        this.AppData.setUserId('1', 'kyabia');
        this.AppData.setTargetId('2');
        this.relayConnect(this.AppData.userId);
    }

    getAppData() {
        return this.AppData;
    }

    setTargetId(targetId) {
        this.AppData.setTargetId(targetId);
    }

    APIloadChats(onSuccess, onFail) {
        this.ApiUtil.loadChats(this.AppData.userId).then((response) => {
            this.AppData.chats = response.data.map(user => {
                return {
                    id: testId,
                    user: {
                        "id": testId,
                        "photo": testPhotoSrc[Math.floor(Math.random() * testPhotoSrc.length)],
                        "name": user.fields.username,
                    },
                    lastMessage: {
                        ...testLastMessage,
                    },
                }
            });
            if(onSuccess){
                onSuccess();
            }
        });
    }
    
    APIloadHistory(onSuccess, onFail) {
        let targetId = this.AppData.targetId;
        let userId = this.AppData.userId;
        if(targetId in this.AppData.messageCache){
            onSuccess();
        }else{
            this.ApiUtil.loadHistory(userId, targetId).then((response) => {
                this.AppData.messageCache[targetId] = response.data;
                if(onSuccess){
                    onSuccess();
                }
            });
        }
    }

    relayConnect(userId){
        let data = JSON.stringify({
            user_id: userId 
        });
        this.AppData.relaySocket = new WebSocket('ws://mrmyyesterday.com:5000');
        this.AppData.relaySocket.onopen = () => {
            this.AppData.relaySocket.send(data);
        };
    }

    sendNewMessage(newMessage, onSuccess){
        //TODO write to thing
        if(this.AppData.relaySocket != null){
            this.AppData.relaySocket.send(
                JSON.stringify({
                    receiver_id: this.AppData.targetId,
                    message: newMessage
                })
            )
        }
        this.AppData.messageCache[this.AppData.targetId].push({
            fields: {
                msg_content: newMessage,
			    sender: this.AppData.userId,
            }
        });
        onSuccess();
    }
}

export default new Orchestrator();
