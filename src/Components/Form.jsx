import React from 'react'

function Form(){
  return (
    <div className="expense-form">
        <form >
            <input 
                type="text" 
                placeholder='Expense name' 
                required 
            />

            <textarea placeholder='Expense description' required></textarea>

            <input 
                type="text" 
                placeholder='Expense category'
                required
            />

            <input 
                type="number"
                placeholder='Expense amount'
                required 
            />

            <input 
                type="date"
                required
            />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form
