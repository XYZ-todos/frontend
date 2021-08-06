import React, { useEffect, useState } from 'react' 
import { todoFetchReqest } from '../../helpers/apiHelper'
import AppNavBar from '../../layouts/navbar'
import NewTaskModal from '../../components/newTaskModal/index'
const Tasks = () => {

    const [taskList, setTaskList] = useState([])
    useEffect(() => {
        todoFetchReqest().then(res => {
            setTaskList(res)
        })
    }, [])


    return (
        <AppNavBar>

          
  
            <NewTaskModal />  

            {
                taskList.map(task => {
                    return (
                        <div>
                            Title : {task.title}
                            <br />
                            Description : {task.description}
                            <br />
                            <br />
                        </div>
                    )
                })
            }
        </AppNavBar>
    )
}

export default Tasks
