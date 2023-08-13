import React , { useState } from 'react'
import Filters from './Filters'
import { clsx } from 'clsx'


const ActionBar = ({itemsLeft, clearCompleted, selectedFilter, setSelectedFilter}) => {

    return (
        <div className='p-4 flex justify-between'>
            <span className='text-sm text-light-gray-400 dark:text-gray-500'>{itemsLeft} items left</span>
            <Filters styles={`hidden lg:flex`} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
            <button onClick={clearCompleted} className='text-sm text-light-gray-400 hover:text-light-gray-500 dark:text-gray-500 dark:hover:text-dark-gray-100'>Clear Completed</button>
        </div>
    )
}


export default ActionBar
