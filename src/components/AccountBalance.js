const AccountBalance = ({ account }) => {
  return (
    <div className="accountBalance">
      <p>{account.name}: ${account.amount}</p>
    </div>
  )
}

export default AccountBalance
