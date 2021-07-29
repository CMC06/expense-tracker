const Expense = ({ expense }) => {
  return (
    <div className="itemizedExpense">
      <div className="eDateAmount"><p><strong>Date: </strong>{expense.due}</p><p><strong>Expense amount: </strong>${expense.amount}</p></div>
      <p><strong>Payee: </strong>{expense.payee}</p>
      {expense.description ? <p><strong>Description: </strong>{expense.description}</p> : null}
    </div>
  )
}

export default Expense
