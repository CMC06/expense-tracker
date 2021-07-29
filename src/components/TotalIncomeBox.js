const TotalIncomeBox = ({ setTotalIncome, incomeReg, otherIncome}) => {
  let currentTotal = 0;
  incomeReg.forEach(item => {
    if(item.type === 'Salary'){
      let monthlyIncome = 0;
      if(item.frequency === 'monthly'){
        monthlyIncome = Number(item.amount);
        return;
      } else if (item.frequency === 'bi-weekly'){
        monthlyIncome = Math.round((Number(item.amount) * 26) / 12 * 100) / 100;
      } else if (item.frequency === 'bi-monthly') {
        monthlyIncome = Math.round((Number(item.amount) * 2) * 100) / 100;
      } else if (item.frequency === 'weekly') {
        monthlyIncome = Math.round((Number(item.amount) * 52) /12 *100) / 100;
      } else if (item.frequency === 'annually') {
        monthlyIncome = Math.round(Number(item.amount) / 12 * 100) / 100;
      }
      currentTotal += monthlyIncome;
  }});
  otherIncome.forEach(item => currentTotal += (Number(item.amount)));
 
  setTotalIncome(currentTotal);

  return (
    <div className="overviewBox">
      <h3>Total Income (month):</h3>
      <p>${currentTotal}</p>
    </div>
  )
}

export default TotalIncomeBox