function addTask() {
    var input_text = document.getElementById('task_text');
    var popup = document.getElementById('popupContainer');
    var closeBtn = document.getElementById('closePopupBtn');
    var popupText = document.getElementById('popup-text');
    if (input_text.value.trim()) {
        popup.style.display = 'none'
        // postTask(input_text.value)
        taskView(input_text.value)
        input_text.value = ""
    } else {
        popupText.innerText = "Поле ввода не может быть пустым"
        popup.style.display = 'block'
    }
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none'
    })
}

function postTask(task) {
    var tasks_container = document.getElementById('tasks')
    var taskText = document.createTextNode(task)
    tasks_container.appendChild(taskText)
}

function taskView(task) {
    var tasksContainer = document.getElementById('tasks')

    var taskHeader = document.createElement('div')
    var taskCenter = document.createElement('div')

    var taskTitle = document.createElement('h3')
    var taskTitleText = document.createTextNode(task)
    taskTitle.appendChild(taskTitleText)

    var priorityTag = document.createElement('span')
    var prioprityTagText = document.createTextNode('Priority: ')
    var prioprityTagSecondText = document.createTextNode("Regular")
    priorityTag.appendChild(prioprityTagText)
    priorityTag.appendChild(prioprityTagSecondText)

    var creatorTag = document.createElement('span')
    var creatorTagText = document.createTextNode('Creator: ')
    var creatorTagSecondText = document.createTextNode("Logitec")
    creatorTag.appendChild(creatorTagText)
    creatorTag.appendChild(creatorTagSecondText)

    var agentTag = document.createElement('span')
    var agentTagText = document.createTextNode('Agent: ')
    var agentTagSecondText = document.createTextNode("Logitec")
    agentTag.appendChild(agentTagText)
    agentTag.appendChild(agentTagSecondText)


    taskHeader.classList.add('task-header')
    taskCenter.classList.add('task-center')

    taskHeader.appendChild(taskTitle)

    taskCenter.appendChild(priorityTag)
    taskCenter.appendChild(creatorTag)
    taskCenter.appendChild(agentTag)

    tasksContainer.appendChild(taskHeader)
    tasksContainer.appendChild(taskCenter)
}

var input_text = document.getElementById('task_text');

document.getElementById("task_text").addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        taskView(input_text.value)
        input_text.value = ""
    }
})