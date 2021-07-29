const TotalBalanceBox = ({totalBalance}) => {
  return (
    <div className="overviewBox">
      <h3>Total Balances:</h3>
      <p>${totalBalance}</p>
    </div>
  )
}

export default TotalBalanceBox