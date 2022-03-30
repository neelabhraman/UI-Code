import './Expenses.css';
import Cards from "../UI/Cards";
import MyExpenseFilter from "./ExpensesFilter";
import {useState} from "react";
import MyExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangedHandler = selectedYear => {
        console.log("Inside Expense");
        setFilteredYear(selectedYear);
    }

    const filteredExpenseList = props.expenses.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    return (

        <Cards className="expenses">
            <MyExpenseFilter onChangeFilter={filterChangedHandler}
                             yearSelected={filteredYear}></MyExpenseFilter>
            <ExpensesChart expenses={filteredExpenseList}></ExpensesChart>
            <MyExpensesList dataList={filteredExpenseList}></MyExpensesList>
        </Cards>
    );
}


export default Expenses;