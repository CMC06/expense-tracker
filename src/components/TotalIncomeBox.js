const TotalIncomeBox = ({totalIncome, setTotalIncome, incomeReg, otherIncome}) => {
  let totalArr = [];
  incomeReg.forEach(item => totalArr.push(Number(item.amount)));
  otherIncome.forEach(item => totalArr.push(Number(item.amount)));
  let reducer = (accumulator, currentValue) => accumulator += currentValue;
  let currentTotal = totalArr.reduce(reducer);
  console.log(currentTotal);
  setTotalIncome(currentTotal);

  return (
    <div className="overviewBox">
      <h3>Your total income this month:</h3>
      <p>${currentTotal}</p>
    </div>
  )
}

export default TotalIncomeBox
