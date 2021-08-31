const IncomeAdd = () => {
  return (
    <div className="itemizedBox">
      <form className="itemized">
        <label>Select your type of income and frequency:</label>
        <select>
            <option value="Salary - Paid 2x/month">Salary - Paid 2x/month</option>
            <option value="Salary - Paid every 2 weeks">Salary - Paid every 2 weeks</option>
            <option value="Salary - Paid monthly">Salary - Paid monthly</option>
            <option value="Salary - Paid weekly">Salary - Paid weekly</option>
            <option value="Hourly">Hourly</option>
        </select>
      </form>  
    </div>
  )
}

export default IncomeAdd
