const CHANNEL = 'LOADING_PROGRESS';

const WithLoading = {
   listenLoading(fnHandler){
     this.emitter.addListener(CHANNEL, fnHandler)
     return () => {
       this.emitter.removeListener(fnHandler)
     }
   },

   triggerLoading(actionType, value){
     this.emitter.emit(CHANNEL, actionType, value)
   }
};

export default WithLoading
