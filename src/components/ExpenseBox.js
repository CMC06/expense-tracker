import Expense from "./Expense"

const ExpenseBox = ({ setTotalExpenses, expenses }) => {

  let holdExpenses = 0;

  expenses.forEach(expense => holdExpenses += Number(expense.amount));

  setTotalExpenses(holdExpenses);

  return (
    <div className="itemizedBox">
      <h2>Your itemized monthly expenses:</h2>
      {expenses.map(expense => <Expense key={expense.id} expense={expense} />)}
    </div>
  )
}

export default ExpenseBox
