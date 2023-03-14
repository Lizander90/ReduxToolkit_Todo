import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAddTodoMutation } from '../../store/sliceApi/sliceTodoApi'
import { setGlobalLoading } from '../../store/sliceTodoState/silceTodo'
import Spin_loader from '../spinComponent/spin'

const AddProduct = () => {
  const refTask = useRef(null)
  const refName = useRef(null)
  const [createTodo, { isLoading }] = useAddTodoMutation();
  const global_Loading = useSelector((store) => store.todoState.global_Loading)
  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()
    const nwTodo = {
      id: crypto.randomUUID(),
      name: refName.current.value,
      description: refTask.current.value,
      completed: false
    }
    createTodo(nwTodo)
    dispatch(setGlobalLoading(isLoading))
    refName.current.value = ''
    refTask.current.value = ''
  }

  return (
    <div >
      <form className='form-container' onSubmit={handleAddTodo}>
        <input required type={'text'} className='form-container__input' placeholder='Nombre tarea: correr' ref={refName} />
        <input required type={'text'} className='form-container__input' placeholder='Tarea: a las 5.00pm ir a trotar...' ref={refTask} />

        {
          global_Loading
            ? <>
              <div className='window-app__loader'>
                <Spin_loader />
              </div>
            </>
            : <>
              <input
                type={'submit'}
                placeholder='tarea'
                value={'Add Todo'}
                className='btn'
              />
            </>
        }
      </form>
    </div>
  )
}

export default AddProduct