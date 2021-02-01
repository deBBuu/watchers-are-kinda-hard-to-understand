const app = Vue.createApp({

  data(){
    return{
      result: 0
    }
  },

  watch:{

    showResult() {
      console.log('Usuwam wynik')
      const that = this
      setTimeout(function (){
        that.result = 0;
      }, 5000)
    }

  },

  computed:{

    showResult(){
      if (this.result < 37 ){
        return 'Not there yet'
      } else if (this.result == 37) {
        return 'Masno'
      } else {
        return 'Too Much!'
      }
    }
  },

  methods:{

 
    addNumber(num){

      this.result = this.result + num
    }


  }





})

app.mount('#assignment')