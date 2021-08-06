import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoFetchReqest } from '../../helpers/apiHelper'
import AppNavBar from '../../layouts/navbar'
import NewTaskModal from '../../components/newTodoModal/index'
import TodoCard from './../../components/todoCard/index'
import { setTodos } from '../../state/actions/todo'

const Tasks = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo.todos)

    useEffect(() => {
        todoFetchReqest().then(res => {
            dispatch({ type: setTodos, payload: res })
        })
    }, [])


    return (
        <AppNavBar>



            <NewTaskModal />

            {
                todos.map(task => {
                    return (

                        <div key={task._id}> 
                            <TodoCard
                                id={task._id}
                                title={task.title}
                                description={task.description}
                                active={task.active}
                            />
                        </div>

                    )
                })
            }
        </AppNavBar>
    )
}

export default Tasks
