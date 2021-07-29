const Header = () => {
  return (
    <div className="nav">
      <h1>Expense Tracker</h1>
      <div className="navButtonsBar">
        <button>Add Income</button>
        <button>Add Expense</button>
        <button>Show Itemized Balances</button>
        <button>Show Itemized Income</button>
        <button>Show Itemized Expenses</button>
      </div>
    </div>
  )
}

export default Header