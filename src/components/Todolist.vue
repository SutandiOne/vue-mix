<template>
    <div class="container mx-auto px-4 ">
       <div class="flex justify-center bg-gray-200">
            <input v-model="item" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ">

            <button @click="items.push({id:++key,text:item})" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
                Tambah
            </button>
        </div>
        
        <div v-for="todo in items" :key="todo.id"  class="select-all block m-4 px-5 py-5 bg-blue-800 text-white">{{todo.text}}</div>
        
    </div>
</template>

<script>
export default {
    name: 'Todolist',
    data: function(){
        return{
            key:1,
            item: '',
            items: [{id:1,text: 'Add new todo!'}],
        }    
    }
}
</script>

