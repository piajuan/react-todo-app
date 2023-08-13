import React from 'react'

const NewTodoForm = (props) => (
    <form className="my-4">
        <div className="w-full block relative overflow-hidden rounded-md">
            <input onChange={props.onChange} value={props.itemName} onKeyDown={props.onKeyDown} className="w-full p-4 pl-[3.5em] text-light-gray-500 placeholder-text-light-gray-300 dark:bg-dark-gray-600 dark:text-dark-gray-100 dark:placeholder-dark-gray-400" type="text" placeholder="Add a todo here"/>
            <span className='absolute block w-[1.5em] h-[1.5em] rounded-full border-solid border left-[1rem] inset-1/2 -translate-y-1/2 border-light-gray-300 dark:border-dark-gray-300'></span>
        </div>
    </form>
)
export default NewTodoForm