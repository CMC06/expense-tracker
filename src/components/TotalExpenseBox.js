const TotalExpenseBox = ({ totalExpenses }) => {
  return (
    <div className="overviewBox">
      <h3>Your total expenses this month:</h3>
      <p>${totalExpenses}</p>
    </div>
  )
}

export default TotalExpenseBox
