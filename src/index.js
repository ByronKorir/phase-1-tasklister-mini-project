document.addEventListener("DOMContentLoaded", () => {
  // your code here
 document.getElementById('create-task-form').addEventListener('submit', (e) =>{
  e.preventDefault()
  handleNewTask(e.target.new_task_description.value)
 })
});

function handleNewTask(todo){
  let li = document.createElement('li')
  li.textContent = `${todo}   `
   
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTask)
  btn.textContent = 'done'
  btn.style.color = 'red'
  btn.style.backgroundColorcolor = 'green'
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}

function deleteTask (e){
  e.target.parentNode.remove()
}