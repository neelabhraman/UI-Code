import MyExpenses from "./components/expenses/Expenses";
import MyNewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {

    const [expenseList,setExpenseList]=useState(DUMMY_EXPENSES);
    const addExpenseHandler = (expense) => {
        console.log("In App JS");
        console.log(expense);
        setExpenseList((previousVal)=>{
            return [...previousVal,expense];
        });
    }

    return (
        <div>
            <MyNewExpense onAddExpense={addExpenseHandler}></MyNewExpense>
            <MyExpenses expenses={expenseList}></MyExpenses>
        </div>
    );
}

export default App;
