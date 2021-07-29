const Header = ({ showBalances, setShowBalances, showIncome, setShowIncome, showExpenses, setShowExpenses, toggleShow }) => {

  const updateShowBalance = () => toggleShow(showBalances, setShowBalances);
  const updateShowIncome = () => toggleShow(showIncome, setShowIncome);
  const updateShowExpenses = () => toggleShow(showExpenses, setShowExpenses);

  return (
    <div className="nav">
      <h1>Expense Tracker</h1>
      <div className="navButtonsBar">
        <button>Add Income</button>
        <button>Add Expense</button>
        <button onClick={updateShowBalance}>{showBalances ? 'Hide Itemized Balances' : 'Show Itemized Balances'}</button>
        <button onClick={updateShowIncome}>{showIncome ? 'Hide Itemized Income' : 'Show Itemized Income'}</button>
        <button onClick={updateShowExpenses}>{showExpenses ? 'Hide Itemized Expenses' : 'Show Itemized Expenses'}</button>
      </div>
    </div>
  )
}

export default Header