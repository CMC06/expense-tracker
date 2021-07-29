const Income = ( { income }) => {
  let type = income.type;
  let monthlyIncome;
  let otherIncome;
    if(type === 'Salary'){
    if(income.frequency === 'monthly'){
      monthlyIncome = Number(income.amount);
      return;
    } else if (income.frequency === 'bi-weekly'){
      monthlyIncome = Math.round((Number(income.amount) * 26) / 12 * 100) / 100;
    } else if (income.frequency === 'bi-monthly') {
      monthlyIncome = Math.round((Number(income.amount) * 2) * 100) / 100;
    } else if (income.frequency === 'weekly') {
      monthlyIncome = Math.round((Number(income.amount) * 52) /12 *100) / 100;
    } else if (income.frequency === 'annually') {
      monthlyIncome = Math.round(Number(income.amount) / 12 * 100) / 100;
    }
  } else {
    otherIncome = Number(income.amount);
  }
  
  return (
    <div className="income">
      <p>{income.type}: ${type === 'Salary' ? monthlyIncome : otherIncome}</p>
    </div>
  )
}

export default Income