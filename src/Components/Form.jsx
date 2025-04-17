import React, { useState } from 'react';

function Form() {

  const [formData, setFormData] = useState({
    expenseName: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  });

  const [expenses, setExpenses] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Add the new expense to the expenses array
    setExpenses(prevExpenses => [...prevExpenses, formData]);

    // Clear the form inputs after submission
    setFormData({
      expenseName: "",
      description: "",
      category: "",
      amount: "",
      date: ""
    });
  }

  // Handle input changes
  function handleInputs(event) {
    const { name, value } = event.target;
    setFormData(prev => ({...prev,[name]: value }));
  }

  // Handle search input
  function handleSearch(event) {
    setSearchTerm(event.target.value.toLowerCase());
  }

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(expense =>
    expense.expenseName.toLowerCase().includes(searchTerm) ||
    expense.description.toLowerCase().includes(searchTerm) ||
    expense.category.toLowerCase().includes(searchTerm) ||
    expense.amount.toString().includes(searchTerm) ||
    expense.date.includes(searchTerm)
  );

  return (
    <div className="Main flex">
      <div className="expense-form w-1/4 p-2.5">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
          <input type="text" placeholder="Expense name" name="expenseName" required value={formData.expenseName} onChange={handleInputs}
            className="block w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none"/>
          <textarea placeholder="Expense description" required name="description" value={formData.description} onChange={handleInputs}
            className="block w-full min-h-[100px] p-3 mb-4 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none"></textarea>

          <input type="text" placeholder="Expense category" required name="category" value={formData.category} onChange={handleInputs}
            className="block w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none"/>

          <input placeholder="Expense amount" type="number" required name="amount" value={formData.amount} onChange={handleInputs}
            className="block w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none"/>

          <input type="date" required name="date" value={formData.date} onChange={handleInputs}
            className="block w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-900 text-white focus:outline-none"/>

          <button
            type="submit"
            className="py-2.5 px-10 rounded-[5px] bg-gray-950 text-amber-50"
          >
            Submit
          </button>
        </form>

      </div>

      <div className="expenses-container w-3/4">
        <input type="text" placeholder="Search expenses" value={searchTerm} onChange={handleSearch}
          className=" float-left w-2/5 p-3 mb-4 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none"/>

        <div className="expenses-table w-full">
          <table className="w-full rounded-lg border-collapse border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-900 text-amber-50">
                <th className="w-[15%] px-4 py-2 text-left font-semibold">Expense</th>
                <th className="w-[40%] px-4 py-2 text-left font-semibold">Description</th>
                <th className="w-[15%] px-4 py-2 text-left font-semibold">Category</th>
                <th className="w-[15%] px-4 py-2 text-left font-semibold">Amount</th>
                <th className="w-[15%] px-4 py-2 text-left font-semibold">Transaction Date</th>
              </tr>
            </thead>

            <tbody>
              {filteredExpenses.map((expense, index) => (
                <tr key={index} className="hover:bg-gray-100 transition-all duration-200">
                  <td className="border-t border-b border-gray-300 p-2 text-left">{expense.expenseName}</td>
                  <td className="border-t border-b border-gray-300 p-2 text-left h-10  overflow-y-auto ">{expense.description}</td>
                  <td className="border-t border-b border-gray-300 p-2 text-left">{expense.category}</td>
                  <td className="border-t border-b border-gray-300 p-2 text-left">{expense.amount}</td>
                  <td className="border-t border-b border-gray-300 p-2 text-left">{expense.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default Form;
