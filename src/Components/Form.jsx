import React, {useState} from 'react'

function Form(){
  const [formData, setFormData] = useState({
    expenseName: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  })

  function handleInputs(event){
    const {name, value} = event.target
    setFormData(prev => ({
        ...prev,
        [name]: value
    }))
  }

  return (
    <div className="expense-form">
        <form >
            <input 
                type="text" 
                placeholder='Expense name'
                name='expenseName' 
                required
                value={formData.expenseName}
                onChange={handleInputs} 
            />

            <textarea 
                placeholder='Expense description' 
                required
                name='description'
                value={formData.description}
                onChange={handleInputs} 
            ></textarea>

            <input 
                type="text" 
                placeholder='Expense category'
                required
                name='category'
                value={formData.category}
                onChange={handleInputs} 
            />

            <input 
                type="number"
                placeholder='Expense amount'
                required
                name='amount'
                value={formData.amount}
                onChange={handleInputs}  
            />

            <input 
                type="date"
                required
                name='date'
                value={formData.date}
                onChange={handleInputs} 
            />

            <button type='submit'>Submit</button>
            <p>{formData.expenseName}</p>
            <p>{formData.description}</p>
            <p>{formData.category}</p>
            <p>{formData.amount}</p>
            <p>{formData.date}</p>
        </form>
        
    </div>
  )
}

export default Form
