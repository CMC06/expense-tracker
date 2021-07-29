import './App.css';
import { useState } from 'react';
import BalanceBox from './components/BalanceBox';
import TotalBalanceBox from './components/TotalBalanceBox';
import TotalIncomeBox from './components/TotalIncomeBox';
import IncomeBox from './components/IncomeBox';
import ExpenseBox from './components/ExpenseBox';
import TotalExpenseBox from './components/TotalExpenseBox';
import Header from './components/Header';

function App() {
  //state tracking bank balances
  const [balances, setBalances] = useState([{name: 'Checking', amount: '5000'}, {name: 'Savings', amount: '10000'}]);
  //state tracking total of balance accounts
  const [totalBalance, setTotalBalance] = useState(0);
  //state tracking regular forms of income as object
  const [incomeReg, setIncomeReg] = useState([{id: 'i0000001', type: 'Salary', frequency: 'bi-weekly', amount:'2000'}, {id: 'i0000002', type: 'Salary', frequency: 'annually', amount: '55000'}]);
  //state tracking other/irregular forms of income as object
  const [otherIncome, setOtherIncome] = useState([{id: 'o0000001', type: 'Gift', frequency: 'once', amount: '50'}]);
  //state tracking total (current month) income
  const [totalIncome, setTotalIncome] = useState(0);
  //state tracking expenses as object
  const [expenses, setExpenses] = useState([{id: 'e0000001', payee: 'Someone I owe money', due: '10/1/22', description: 'A description of the bill', amount: '100'}]);
  //state tracking total (current month) expenses
  const [totalExpenses, setTotalExpenses] = useState(0);

  
  return (
    <div className="App">
      <Header />
      <div className="overview">
        <TotalBalanceBox totalBalance={totalBalance} />
        <TotalIncomeBox totalIncome={totalIncome} setTotalIncome={setTotalIncome} incomeReg={incomeReg} otherIncome={otherIncome} />
        <TotalExpenseBox totalExpenses={totalExpenses} />
      </div>
      <div className="itemized">
        <BalanceBox balances={balances} setTotalBalance={setTotalBalance} totalBalance={totalBalance} />
        <IncomeBox setBalances={setBalances} incomeReg={incomeReg} setIncomeReg={setIncomeReg} otherIncome={otherIncome} setOtherIncome={setOtherIncome} totalIncome={totalIncome} setTotalIncome={setTotalIncome} />
        <ExpenseBox totalExpenses={totalExpenses} setTotalExpenses={setTotalExpenses} expenses={expenses} setExpenses={setExpenses} />
      </div>
    </div>
  );
}

export default App;
