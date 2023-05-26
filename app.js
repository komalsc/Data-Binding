const app= Vue.createApp({
    data () {
        return {
     courseGoalA: 'finish the course ',
     courseGoalB: 'Master Vue and build amazing App',
     vueLink: 'https://vueJs.org/'
        }
    },
    methods: {
        outputGoal (){
            const randomNumber = Math.random()
            if(randomNumber<0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB
            }
        }
    }
})
app.mount('#user-goal')