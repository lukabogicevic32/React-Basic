import React, {useState} from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter';
import ExpensesList from './Expenses.List';
import ExpensesChart from './ExpensesChart';

function Expenses(props) { //parent to child sa props 
  const [filteredYear, setFilteredYear] = useState('2020');  
   

  const filterChangedHandler = selectedYear => {
  setFilteredYear(selectedYear);
  }; 

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
    <Card className="expenses">
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses} />
    </Card>
    </div>
  );
};
export default Expenses;