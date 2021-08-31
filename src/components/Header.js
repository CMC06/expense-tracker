const Header = ({ showBalances, setShowBalances, showIncome, setShowIncome, showExpenses, setShowExpenses, toggleShow, showIncomeAdd, setShowIncomeAdd, showExpenseAdd, setShowExpenseAdd }) => {

  const updateShowBalance = () => toggleShow(showBalances, setShowBalances);
  const updateShowIncome = () => toggleShow(showIncome, setShowIncome);
  const updateShowExpenses = () => toggleShow(showExpenses, setShowExpenses);

  
  //updates state for showing or not showing the Income Add 
  const toggleIncomeAdd = () => {
    setShowIncomeAdd(!showIncomeAdd);
  }

  //updates state for showing or not showing the Expense Add
  const toggleExpenseAdd = () => {
    setShowExpenseAdd(!showExpenseAdd);
  }

  return (
    <div className="nav">
      <h1>Expense Tracker</h1>
      <div className="navButtonsBar">
        <button onClick={toggleIncomeAdd}>{showIncomeAdd ? 'Hide Income Form' : 'Add Income'}</button>
        <button onClick={toggleExpenseAdd}>{showExpenseAdd ? 'Hide Expense Form' : 'Add Expense'}</button>
        <button onClick={updateShowBalance}>{showBalances ? 'Hide Itemized Balances' : 'Show Itemized Balances'}</button>
        <button onClick={updateShowIncome}>{showIncome ? 'Hide Itemized Income' : 'Show Itemized Income'}</button>
        <button onClick={updateShowExpenses}>{showExpenses ? 'Hide Itemized Expenses' : 'Show Itemized Expenses'}</button>
      </div>
    </div>
  )
}

export default Header