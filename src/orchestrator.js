import ApiUtil from './utils/apiUtil.js';
import JsonUtil from './utils/jsonUtil.js';
import AppData from './data/appData.js';

const testLastMessage = {
    text: "This is a test message",
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
    }

    getAppData() {
        return this.AppData;
    }

    setTargetId(targetId) {
        this.AppData.setTargetId(targetId);
    }

    loadChats(onSuccess, onFail) {
        this.ApiUtil.loadChats(this.AppData.userId).then((response) => {
            // console.log(response);
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
    
    loadHistory(onSuccess, onFail) {
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
}

export default new Orchestrator();
