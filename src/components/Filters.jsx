import React from 'react'
import { filters } from '../App'

const Filters = ({selectedFilter, setSelectedFilter, styles}) => {
    return (
      <ul className={`flex gap-3 ${styles}`}>
          {filters.map((filter, i) => {
              return <li key={i} onClick={() => setSelectedFilter(i)} className={`text-sm cursor-pointer hover:text-light-gray-500 ${ i != selectedFilter ? 'text-light-gray-400 dark:text-gray-500' :'text-light-primary dark:text-dark-primary pointer-events-none'}`}>{filter}</li>
          })}
      </ul>
    )
  }
  
export default Filters
