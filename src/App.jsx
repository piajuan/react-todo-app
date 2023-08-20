import { useState , useEffect, useRef } from 'react'
import { headerBannerDark, headerBannerLight, iconMoon, iconSun } from './assets'
import NewTodoForm from './components/NewTodoForm'
import TodoList from './containers/TodoList'
import ActionBar from './components/ActionBar'
import Filters from './components/Filters'

export const filters = ['All', 'Active', 'Completed']

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  const [newTodo, setNewTodo] = useState('')
  const [todoItems, setTodoItems] = useState([])
  const [itemsLeft, setItemsLeft] = useState(todoItems.length)
  const [selectedFilter, setSelectedFilter] = useState(0)

  /* ~~~~~ updates num of items left ~~~~~ */
  useEffect(() => {
    let uncheckedItems = todoItems.filter(todo => {
      return todo.isChecked != true;
    })
    setItemsLeft(uncheckedItems.length)
  }, [todoItems])

  function handleChange({target}) {
    setNewTodo(target.value)
  }

  /* ~~~~~ toggle darkMode ~~~~~ */
  function toggleDarkMode () {
    setDarkMode(prev => !prev)
  }
  /* ~~~~~ adds items to the list ~~~~~ */
  function handleKeyDown(event) {
    if(event.key === 'Enter') {
      event.preventDefault();

      if (newTodo != '') {
        setTodoItems(prev => [...prev, {id: crypto.randomUUID(), title: newTodo, isChecked: false,}])
        setNewTodo('')
      }

      // sets the view to 'All' to see the item added
      setSelectedFilter(0)
    }
  }

  /* ~~~~~ toggles check/uncheck ~~~~~ */
  function toggleTodo (id, isChecked) {
    setTodoItems(prev => {
      return prev.map(item => {
        if (item.id === id) {
          return {...item, isChecked}
        }

        return item;
      })
    })
  }

  /* ~~~~~ deletes item ~~~~~ */
  function deleteTodo (id) {
    setTodoItems(prev => {
      return prev.filter(item => item.id != id)
    })
  }

  /* ~~~~~ clears completed ~~~~~ */
  function clearCompleted () {
    setTodoItems(prev => {
      return prev.filter(todo => todo.isChecked != true)
    })
  }

  /* ~~~~~ handle sort via drag ~~~~~ */
  // save ref for dragIems and dragOveritem
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)

  function handleDragStart (e,index) {
    dragItem.current = index;
  }

  function handleDragEnter (e, index) {
    dragOverItem.current = index;
  }

  function handleSort () {
    // duplicate items
    const _todoItems = [...todoItems]

    // remove and save the dragged item
    const draggedItemContent = _todoItems.splice(dragItem.current, 1)[0]

    // switch the position
    _todoItems.splice(dragOverItem.current, 0, draggedItemContent)

    // reset the ref values
    dragItem.current = null
    dragOverItem.current = null

    // update the array
    setTodoItems(prev => _todoItems)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="min-h-screen p-5 bg-no-repeat bg-top bg-[#fafafa] dark:bg-dark-gray-700" style={{backgroundImage: darkMode ? `url(${headerBannerDark})` : `url(${headerBannerLight})`, backgroundSize: '100% 30vh'}}>
          <section className="max-w-[520px] mx-auto">
              <div className="flex justify-between items-center mb-8 mt-8 lg:mt-[10vh]">
                  <h1 className="uppercase tracking-[1rem] text-3xl text-light-gray-100 dark:text-dark-gray-100">Todo</h1>
                  <button onClick={toggleDarkMode}><img src={darkMode ? iconSun : iconMoon} alt="toggle for dark/light mode" /></button>
              </div>

              <NewTodoForm itemName={newTodo} onChange={handleChange} onKeyDown={handleKeyDown}/>

              <div className='bg-light-gray-100 shadow-light dark:shadow-dark dark:bg-dark-gray-600 overflow-hidden rounded-md'>
                <TodoList 
                  itemsList={todoItems} 
                  toggleTodo={toggleTodo} 
                  deleteTodo={deleteTodo} 
                  selectedFilter={selectedFilter} 
                  onDragStart={handleDragStart}
                  onDragEnter={handleDragEnter}
                  onDragEnd={handleSort}
                  />
                <ActionBar itemsLeft={itemsLeft} clearCompleted={clearCompleted} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
              </div>

              <div className='mt-4 p-4 flex justify-center bg-light-gray-100 shadow-light dark:shadow-dark dark:bg-dark-gray-600 overflow-hidden rounded-md lg:hidden'>
                <Filters styles={`gap-6`} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
              </div>

              <p className='mt-14 text-sm text-center text-light-gray-400 dark:text-dark-gray-400'>Drag and drop to reorder list</p>
          </section>
        </main>
    </div>
  )
}




