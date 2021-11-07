import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
  const valueArray = props.data.map((expense) => expense.value)
  const totalMaximum = Math.max(...valueArray)
  return (
    <div className="chart">
      {props.data.map((item) => {
        return (
          <ChartBar
            key={item.label}
            label={item.label}
            value={item.value}
            maxValue={totalMaximum}
          />
        )
      })}
    </div>
  )
}

export default Chart
