import Vue from 'vue';
import Todolist from './components/Todolist.vue';

new Vue({
    el: '#app',
    components:{
        Todolist,
    },
    data: {
        title : 'APP Todo',
    },
});