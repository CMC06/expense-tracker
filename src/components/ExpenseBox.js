import Expense from "./Expense"

const ExpenseBox = ({totalExpenses, setTotalExpenses, expenses, setExpenses}) => {
  return (
    <div>
      {/* Create button to add new expenses */}
      <h3>Your itemized monthly expenses:</h3>
      {expenses.map(expense => <Expense key={expense.id} expense={expense} />)}
    </div>
  )
}

export default ExpenseBox
