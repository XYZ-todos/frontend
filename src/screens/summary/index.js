import React, { useEffect, useState } from 'react'
import { fetchAlltodos } from '../../helpers/apiHelper'
import AppNavBar from '../../layouts/navbar' 
import HistoryCard from './../../components/todoHistoryCard/index'

const History = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchAlltodos().then(res => {
            setTodos(res)
        })
    }, [])


    return (
        <AppNavBar>



            {
                todos.map(task => {
                    return (
                        <div key={task._id}>
                            <HistoryCard
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

export default History
