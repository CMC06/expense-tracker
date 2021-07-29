import AccountBalance from "./AccountBalance";

const BalanceBox = ({ balances, setTotalBalance }) => {
  
  let currentBalance = 0;

  balances.forEach((account) => {
    currentBalance += Number(account.amount);
  });

  setTotalBalance(currentBalance);

  
    
  return (
    <div>
      <h3>Your Itemized Balances:</h3>
      {balances.map((account) => (<AccountBalance account={account} key={account.id}/>))}
    </div>
  )
}

export default BalanceBox