import React from 'react'
import { useSelector } from 'react-redux'


const Default = ({ views }) => {
    const date = views.time.split('T')[0]
    const time = views.time.split('T')[1].split('Z')[0].split('.')[0]
    const count = useSelector(state => state.counter.count)
    return (
        <div>
            <h1>{views.title}</h1>
            <p>Date: {date} Time: {time}</p>
            <ul>
                <li>Current Count by Redux: <strong>{count}</strong></li>
                {views.courses.map((course) =>
                    <li key={course.id}>
                        {course.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Default