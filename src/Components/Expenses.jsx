import React from 'react'

function Expenses() {
  return (
    <div className='expenses-container'>
      <input type="text" placeholder='Search expenses' className='search-expenses-input' />

      <div className="expenses-table">
        <table>
          <thead>
            <tr>
              <th>Expense</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Transaction date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ugali Matumbo</td>
              <td>Sure! Here's a short.</td>
              <td>Food</td>
              <td>KSh.100</td>
              <td>10/04/2025</td>
              
            </tr>
          </tbody>
        </table>

      </div>
      
    </div>
  )
}

export default Expenses
