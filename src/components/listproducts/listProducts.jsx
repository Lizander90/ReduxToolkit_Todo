import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../../store/sliceApi/sliceTodoApi'
import { setGlobalLoading } from '../../store/sliceTodoState/silceTodo'
import HelperMessage from '../helperMessage/HelperMessage'
import './style.scss'



const ListTodo = ({ todos, loadingList }) => {
    // console.log(todos)
    const [deleteTodo, { isLoading: isLoadingDelete }] = useDeleteTodoMutation()
    const [updateTodo, { isLoading: isLoadingAdd }] = useUpdateTodoMutation();
    const dispatch = useDispatch()

    const handleDelete = (todoX) => {
        deleteTodo(todoX)
        dispatch(setGlobalLoading(isLoadingDelete))
    }
    const handleCompleted = (todoX) => {
        todoX = { ...todoX, completed: !todoX.completed }
        updateTodo(todoX)
        dispatch(setGlobalLoading(isLoadingAdd))
    }

    return <>
        <div className='list-todo' >
            {<div>
                {todos.length === 0 && <>
                    <HelperMessage
                        text={'No exiten tareas actualmente. Puede adicionar '}
                        typeColor={'success'} />
                </>
                }
            </div>
            }
            {todos.map(todoX => {
                return <div className={`list-todo__element list-todo__element${todoX.completed ? '-active' : ''}`} key={todoX.id}>
                    <div className='list-todo__title'>
                        <input
                            type='checkbox'
                            id={'checkForm' + todoX.id}
                            checked={todoX.completed ? true : false}
                            onChange={() => handleCompleted(todoX)}
                        />
                        <label htmlFor={'checkForm' + todoX.id} className='tittle-name'> {todoX.name}</label>
                        <div> {todoX.description} </div>
                    </div>


                    <input className='btn list-todo__element-close' type='button' value='X' name='deleteForm_' onClick={() => handleDelete(todoX)} />
                </div>
            }
            )}
        </div>
    </>
}

export default ListTodo

