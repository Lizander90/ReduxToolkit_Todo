import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddProduct from './components/addProduct/addProduct';
import HelperMessage from './components/helperMessage/HelperMessage';
import ListTodo from './components/listproducts/listProducts';
import Spin_loader from './components/spinComponent/spin';
import {  useLazyGetAllTodoQuery } from './store/sliceApi/sliceTodoApi'
import { setGlobalLoading } from './store/sliceTodoState/silceTodo';

const App = () => {
  const [getDataTodo, { data: listTodo, isLoading, isError: error, isUninitialized, isFetching }] = useLazyGetAllTodoQuery({});

  const handleGetTodos = () => {
    dispatch(setGlobalLoading(isFetching))
    getDataTodo()
  }

  const dispatch = useDispatch();

  // getDataTodo();
  useEffect(() => {
    handleGetTodos()
  }, [])


  return (
    <div className='window-app'>
      {
        isLoading && <>
          <div className='window-app__loader'>
            <Spin_loader />
          </div>
        </>
      }

      {
        (isUninitialized || error) && <>
          <HelperMessage typeColor={'error'} text={'Error. No se ha podido cargar la lista de todos..'} />
          <input type={'button'} className='btn' onClick={handleGetTodos} value={'INTENETAR CARGAR DE NUEVO'} />
        </>
      }

      {
        (!isUninitialized && !error && listTodo) && <>
          <div className='window-app__header'>
            <AddProduct />
          </div>
          <div className='window-app__content'>
            {
              (!isUninitialized && !error && listTodo) && <>
                <ListTodo todos={listTodo} />
              </>
            }
          </div>
          <div className='window-app__footer' />
        </>
      }

    </div >
  )
}

export default App