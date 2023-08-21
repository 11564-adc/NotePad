import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', () => {
  const  todoList= ref([])
  const doneList=ref([])
  const cancelList=ref([])
  let id=ref(0)

  function add(params){
    todoList.value.push(params)
  }
  //从取消中恢复
 function todo(id){
// 遍历原始数组查找指定对象
for (var i = 0; i < cancelList.value.length; i++) {
  var obj = cancelList.value[i];

  if (obj.id === id) {
    // 找到匹配的对象，从原始数组中删除
    cancelList.value.splice(i, 1);
    // 将对象添加到目标数组中
    todoList.value.push(obj);
    // 结束循环
    break;
  }
}
 }
 //已完成
 function done(id){
// 遍历原始数组查找指定对象
for (var i = 0; i < todoList.value.length; i++) {
  var obj = todoList.value[i];
  console.log(obj.id)
  if (obj.id === id) {
    // 找到匹配的对象，从原始数组中删除
    todoList.value.splice(i, 1);
    // 将对象添加到目标数组中
    doneList.value.push(obj);
    // 结束循环
    break;
  }
}
 }
 function cancel(id){
  for (var i = 0; i < todoList.value.length; i++) {
    var obj = todoList.value[i];
    console.log(obj.id)
    if (obj.id === id) {
      // 找到匹配的对象，从原始数组中删除
      todoList.value.splice(i, 1);
      // 将对象添加到目标数组中
      cancelList.value.push(obj);
      // 结束循环
      break;
    }
  }
 }
  return{
    todoList,id,add,done,doneList,todo,cancel,cancelList}
})