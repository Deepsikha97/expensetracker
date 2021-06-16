import './App.css';
import Expenses from './comonents/Expenses/Expenses';
import NewExpense from './comonents/NewExpense/NewExpense';
import {useState} from 'react';
function App() {
  const DUMMYEXPENSE =[
    {
        id:'e1',
        title:'Grocery',
        amount:94.12,
        date: new Date(2021, 5, 12)
    },
    {
      id:'e2',
      title:'Stationary',
      amount:6.12,
      date: new Date(2021, 5, 11)
    },
    {
      id:'e3',
      title:'Gardening',
      amount:56.12,
      date: new Date(2021, 5, 10)
    },
    {
      id:'e4',
      title:'Food',
      amount:132.12,
      date: new Date(2021, 5, 14)
    }
  ];
  
  const [expenses,setNewExpenses]=useState(DUMMYEXPENSE);

  const addExpenseHandler =(expense) =>
  {
    setNewExpenses((prevExpenses) => {
        return [expense,...prevExpenses];
    });
  };
   return (
     <div>
       <h2>Lets get started</h2>
       <NewExpense onAddExpense ={addExpenseHandler}/>
      <Expenses items={expenses}/>
     </div>
   );
  }

export default App;