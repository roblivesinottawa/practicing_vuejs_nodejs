let vue = new Vue({
    el: "#app",
    data: {
        text: "enter task",
        title: 'Task Management App',
        list: [{ text: "first thing to do" }]
    },
    methods: {
        addTodo(){
            this.list.push({text: this.text })
            this.text = ""
        },
        removeTodo(index){
            this.list.splice(index, 1)
        }
    }
});