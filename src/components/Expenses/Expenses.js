import React, { useState } from 'react'

import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2019')
  const filterChangeHandler = (year) => {
    setFilterYear(year)
  }

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === parseInt(filterYear)
  )

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onFilterChange={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
