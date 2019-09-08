import ApiUtil from './utils/apiUtil.js';
import JsonUtil from './utils/jsonUtil.js';
import AppData from './data/appData.js';

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
            console.log(response);
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
