import './Expenses.css';
import MyExpenseItem from "./ExpenseItem";
import Cards from "../UI/Cards";
import MyExpenseFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangedHandler = selectedYear => {
        console.log("Inside Expense");
        console.log(selectedYear);
    }

    return (

        <Cards className="expenses">
            <MyExpenseFilter onChangeFilter={filterChangedHandler}
                             yearSelected={filteredYear}></MyExpenseFilter>

            <MyExpenseItem title={props.expenses[0].title}
                           amount={props.expenses[0].amount}
                           date={props.expenses[0].date}></MyExpenseItem>
            <MyExpenseItem title={props.expenses[1].title}
                           amount={props.expenses[1].amount}
                           date={props.expenses[1].date}></MyExpenseItem>
            <MyExpenseItem title={props.expenses[2].title}
                           amount={props.expenses[2].amount}
                           date={props.expenses[2].date}></MyExpenseItem>
            <MyExpenseItem title={props.expenses[3].title}
                           amount={props.expenses[3].amount}
                           date={props.expenses[3].date}></MyExpenseItem>

        </Cards>
    );
}


export default Expenses;