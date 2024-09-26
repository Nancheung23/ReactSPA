import React, { useState } from "react"

const TaskView = () => {
    const [task, setTask] = useState([
        // static data for initialization
        { id: 1, title: 'Example Task 1', completed: false, note: 'This is example note 1' },
        { id: 2, title: 'Example Task 2', completed: true, note: 'This is example note 2' },
        { id: 3, title: 'Example Task 3', completed: false, note: 'This is example note 3' },
    ])

    const toggleTaskStatus = (taskId) => {
        setTask(
            task.map(task => (
                // if task's id attribute equals taskId that input, return task but switch status
                task.id === taskId ? { ...task, completed: !task.completed } : task
            ))
        )
    }

    const updateTaskNote = (taskId, newNote) => {
        setTask(
            task.map(task => (
                task.id === taskId ? { ...task, note: newNote } : task
            ))
        )
    }

    return (
        <div>
            <h1>Task Management</h1>
            <ul>
                {/* map task and render, add button toggle status of task */}
                {
                    task.map(task => (
                        <li key={task.id}>
                            <span>{task.title}</span>
                            <button onClick={() => toggleTaskStatus(task.id)}>
                                {task.completed ? 'Deactivate' : 'Activate'}
                            </button>
                            <div>
                                <label htmlFor={`note-${task.id}`}>Note:</label>
                                <textarea id={`note-${task.id}`} value={task.note} onChange={(e) => updateTaskNote(task.id, e.target.value)} rows={3} cols={40}></textarea>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => alert('Add Task functionality to be implemented')}>
                Add New Task
            </button>
        </div>
    )
}

export default TaskView