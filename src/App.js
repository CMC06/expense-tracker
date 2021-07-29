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
  //state tracking if itemizedBalance showing or hidden
  const [showBalances, setShowBalances] = useState(true);
  //state tracking if itemizedIncome showing or hidden
  const [showIncome, setShowIncome] = useState(true);
  //state tracking if itemizedExpenses showing or hidden
  const [showExpenses, setShowExpenses] = useState(true);

  const toggleShow = (showState, setShowState) => {
    let show = showState;
    setShowState(!show);
  }

  
  return (
    <div className="App">
      <Header showBalances={showBalances} setShowBalances={setShowBalances} showIncome={showIncome} setShowIncome={setShowIncome} showExpenses={showExpenses} setShowExpenses={setShowExpenses} toggleShow={toggleShow} />
      <div className="overview">
        <TotalBalanceBox totalBalance={totalBalance} />
        <TotalIncomeBox setTotalIncome={setTotalIncome} incomeReg={incomeReg} otherIncome={otherIncome} />
        <TotalExpenseBox totalExpenses={totalExpenses} />
      </div>
      <div className="itemized">
        {showBalances ? <BalanceBox balances={balances} setTotalBalance={setTotalBalance} totalBalance={totalBalance} toggleShow={toggleShow} /> : null }
        {showIncome ? <IncomeBox setBalances={setBalances} incomeReg={incomeReg} setIncomeReg={setIncomeReg} otherIncome={otherIncome} setOtherIncome={setOtherIncome} totalIncome={totalIncome} setTotalIncome={setTotalIncome} toggleShow={toggleShow} /> : null }
        {showExpenses ? <ExpenseBox totalExpenses={totalExpenses} setTotalExpenses={setTotalExpenses} expenses={expenses} setExpenses={setExpenses} toggleShow={toggleShow} /> : null }
      </div>
    </div>
  );
}

export default App;
