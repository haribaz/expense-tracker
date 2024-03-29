import React from 'react'

import Chart from '../Chart/Chart'

const ExpenseChart = (props) => {
  const chartData = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'June', value: 0 },
    { label: 'July', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sept', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 }
  ]

  for (const expense of props.expenses) {
    const month = expense.date.getMonth()
    chartData[month].value += parseInt(expense.amount)
  }

  return <Chart data={chartData} />
}
export default ExpenseChart
