//Получаем необходимые элементы DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


function createTask() {
     //Создаём новый элемент списка
    const newTask = document.createElement('li');
    //Устанавливаем текст задачи внутри созданного элемента списка
    newTask.textContent = taskInput.value;
    //Добавляем созданный элемент списка в нужное место на странице
    taskList.append(newTask);
    //Очищаем поле ввода после добавления задачи
    taskInput.value = '';
}

function checkTask(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
}

addButton.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);




