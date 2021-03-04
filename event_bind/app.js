let vm =  new Vue({
         
    el: '#app',
    data: {
        message: 'Hello',
        fontSize: 20,
    },


   methods: {

       increaseFont(){

            this.fontSize++;

        },


       DecreaseFont(){

           this.fontSize--;

       }


   }
      
})