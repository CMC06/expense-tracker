import AccountBalance from "./AccountBalance";

const BalanceBox = ({ balances }) => {
  
  balances.forEach((account) => {
    console.log(account.name, account.amount);
  })
    
  return (
    <div className="overviewBox">
      <h3>Your Current Balances:</h3>
      {balances.map((account) => (<AccountBalance account={account} key={account.id}/>))}
    </div>
  )
}

export default BalanceBox