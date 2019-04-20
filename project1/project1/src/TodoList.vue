<template>
  <div id="app">
    <div>
      <input v-model="inputValue">
      <button @click="handelsubmit">提交</button>
    </div>
    <ul>
      <todo-item v-for="(item,index) of list"
      :content="item"
      :index="index"
      :key="index"
      @delete="handelete"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
  import TodoItem from './components/TodoItem'
export default {
    components:{
      'todo-item':TodoItem
    },
 data:function () {
   return {
     inputValue: '',
     list:[]
   }
 },
   methods:{
     handelsubmit (){
       this.list.push(this.inputValue);
       this.inputValue =''
     },
     handelete (index){
       this.list.splice(index,1)
     }
   }
}
</script>

<style>

</style>
