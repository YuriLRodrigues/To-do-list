const inputTask = document.querySelector('#input-new-task');
const newTaskBtn = document.querySelector('#add-task-btn');
const localStorageKey = 'to-do-list';

newTaskBtn.onclick = () => {
  if (!inputTask.value) {
    alert('Insira uma tarefa para poder adicioná-la a sua lista de tarefas')
    return
  }
  let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  values.push({
    name: inputTask.value
  })
  localStorage.setItem(localStorageKey,JSON.stringify(values))
  showValues()
  inputTask.value = ''
}


function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  const toDoList = document.querySelector('#to-do-list');
  toDoList.innerHTML = '';
  for (let i =0; i < values.length; i++){
    toDoList.innerHTML += `<li>${values[i]['name']}<button id='btn-click' onclick='removeItem("${values[i]['name']}")'>Ok</button></li>`
  }
}

const removeItem = (data) => {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
  let index = values.findIndex(x=> x.name === data);
  values.splice(index, 1);
  localStorage.setItem(localStorageKey, JSON.stringify(values))
  showValues()
}

showValues()

