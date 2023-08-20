import React, { useState } from 'react'
import { iconDelete , iconCheck} from '../assets'

const TodoList = ({itemsList, toggleTodo, deleteTodo, selectedFilter, onDragStart, onDragEnter, onDragEnd}) => {
  
  return (
    <div className='bg-light-gray-100 dark:bg-dark-gray-600'>
        <ul>
            {itemsList.map((item, index) => {
              const styles = {
                display: selectedFilter === 0 ? 'flex' : 
                         selectedFilter === 1 & item.isChecked === false ? 'flex' :
                         selectedFilter === 2 & item.isChecked === true ? 'flex' : 'none',
              }
              return (
                <li 
                  onClick={e => toggleTodo(item.id, item.isChecked)} 
                  onDragStart={(e) => onDragStart(e,index)} 
                  onDragEnter={(e) => onDragEnter(e,index)} 
                  onDragEnd={onDragEnd} 
                  onDragOver={(e) => e.preventDefault()}
                  key={item.id} 
                  className='group flex justify-between items-center w-full p-4 border-b border-light-gray-200 dark:border-dark-gray-400 border-solid bg-light-gray-100 text-light-gray-500 cursor-move dark:bg-dark-gray-600 dark:text-dark-gray-100' 
                  style={styles} 
                  draggable>
                    <input type="checkbox" id={item.id} name={item.id} checked={item.isChecked} onChange={e => toggleTodo(item.id, e.target.checked)} className='todo__checkbox' hidden/>
                    <label className='todo__label flex items-center gap-4 cursor-pointer' htmlFor={item.id}>
                        {/* gradient checkbox */}
                        <div className='todo__check-wrapper flex justify-center items-center w-[1.5em] h-[1.5em] rounded-full bg-light-gray-300 dark:bg-dark-gray-300 group-hover:bg-gradientBlueViolet'>
                          <div className='todo__check-bg w-[1.4em] h-[1.4em] rounded-full flex justify-center items-center bg-light-gray-100 dark:bg-dark-gray-600'>
                            <img className='todo__check-icon' src={iconCheck} alt="check icon"/>
                          </div>
                        </div>
                        {/* content */}
                        <span className='todo__title'>{item.title}</span>
                    </label>
                    {/* delete button */}
                    <button onClick={() => deleteTodo(item.id)} className='hidden group-hover:block'> <img src={iconDelete} alt="delete item" /> </button>
                </li>
              )
            })}
        </ul>


    </div>
  )
}

export default TodoList