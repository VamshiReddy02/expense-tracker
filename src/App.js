import './App.css';
import {Header} from './components/Header.js';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpenses />
    </div>
  );
}

export default App;
