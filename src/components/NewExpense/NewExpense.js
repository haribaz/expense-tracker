import React, { useState } from 'react'
import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const saveExpenseHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString()
    }
    setIsOpen(false)
    props.onAddExpense(expenseData)
  }

  const toggleExpenseForm = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="new-expense">
      {!isOpen && <button onClick={toggleExpenseForm}>Add New Expense</button>}
      {isOpen && (
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={toggleExpenseForm} />
      )}
    </div>
  )
}

export default NewExpense
