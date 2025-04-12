import React, { useState } from 'react';

function Form() {

  const [formData, setFormData] = useState({
    expenseName: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData(formData);
  }

  function handleInputs(event) {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className="Main">
      <div className="expense-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Expense name"
            name="expenseName"
            required
            value={formData.expenseName}
            onChange={handleInputs}
          />
          <textarea
            placeholder="Expense description"
            required
            name="description"
            value={formData.description}
            onChange={handleInputs}
          ></textarea>
          <input
            type="text"
            placeholder="Expense category"
            required
            name="category"
            value={formData.category}
            onChange={handleInputs}
          />
          <input
            type="number"
            placeholder="Expense amount"
            required
            name="amount"
            value={formData.amount}
            onChange={handleInputs}
          />
          <input
            type="date"
            required
            name="date"
            value={formData.date}
            onChange={handleInputs}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="expenses-container">
        <input
          type="text"
          placeholder="Search expenses"
          className="search-expenses-input"
        />

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
              {/* Conditionally render the table row only if submittedData exists */}
              {submittedData && (
                <tr>
                  <td>{submittedData.expenseName}</td>
                  <td>{submittedData.description}</td>
                  <td>{submittedData.category}</td>
                  <td>{submittedData.amount}</td>
                  <td>{submittedData.date}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Form;
