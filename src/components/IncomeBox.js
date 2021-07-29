import Income from "./Income"

const IncomeBox = ({ setBalances, incomeReg, setIncomeReg, otherIncome, setOtherIncome, totalIncome, setTotalIncome }) => {
  //this box will display existing income information, including which accounts deposits go into
  return (
    <div>
    {/* need "add new income" button */}
    <h3>Your Itemized Monthly Income:</h3>
    <h4>Salary or Regular Wage Income:</h4>
    {incomeReg.map((income) => (<Income income={income} key={income.id}/>))}
    <h4>Additional (Other) Income:</h4>
    {otherIncome.map((otherIncome) => (<Income income={otherIncome} key={otherIncome.id} />))}
    </div>
  )
}

export default IncomeBox
