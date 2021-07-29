const Expense = ({ expense }) => {
  return (
    <div className="itemizedExpense">
      <div className="eDateAmount"><p>Date: {expense.due}</p><p>Expense amount: ${expense.amount}</p></div>
      <p>Payee: {expense.payee}</p>
      {expense.description ? <p>Description: {expense.description}</p> : null}
    </div>
  )
}

export default Expense
