$(document).ready(function() {

    $('#form-task').on('submit', (e) => {
        e.preventDefault();
        addTask();
        done();
    })

    let tasksList = [];

    function addTask() {
        const task = $('#input-task').val();
        if (tasksList.includes(task)) {
            alert('Esta tarefa já está cadastrada!')
        } else {
            tasksList.push(task);
            const taskItem = $(`<li></li>`).text(task.toUpperCase());
            taskItem.appendTo('#list');
        }
    }

    function done(){
        $("#list li").click(function() {
        $(this).addClass("done");
    })
    }
})


