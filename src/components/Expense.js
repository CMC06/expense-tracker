const Expense = ({ expense }) => {
  return (
    <div className="itemizedExpense">
      <p>{expense.payee}</p>
      <p>Expense amount: ${expense.amount}</p>
      <p>Bill due date: {expense.due}</p>
      {expense.description ? <p>Description: {expense.description}</p> : null}
    </div>
  )
}

export default Expense
