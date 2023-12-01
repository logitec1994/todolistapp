function removeTask(task) {
    fetch('/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: task}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        window.location.reload();
    })
    .catch(error => console.error('Error:', error));
}