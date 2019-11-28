import React, { useEffect } from 'react';
import { TodoListProps } from '../containers/TodoList.container';
import { observer } from 'mobx-react';
 
export const TodoList = observer((props) => {
    const {
        fetchTasks,
        tasks
    } = props as TodoListProps;

    useEffect(fetchTasks, []);

    return (
        <ul>
            { tasks.map(task => (
                <li key={task.id}>{task.title}</li>
            )) }
        </ul>
    );
})
