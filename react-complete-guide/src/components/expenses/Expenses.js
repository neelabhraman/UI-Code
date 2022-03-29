import './Expenses.css';
import MyExpenseItem from "./ExpenseItem";
import Cards from "../UI/Cards";
import MyExpenseFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangedHandler = selectedYear => {
        console.log("Inside Expense");
        setFilteredYear(selectedYear);
    }

    const filteredExpenseList = props.expenses.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    let expenseListDisplayed=<p>No Expenses found!</p>;
    if(filteredExpenseList.length>0){
        expenseListDisplayed=filteredExpenseList.map(item =>
            <MyExpenseItem key={item.id} title={item.title}
                           amount={item.amount}
                           date={item.date}></MyExpenseItem>
        );
    }
    return (

        <Cards className="expenses">
            <MyExpenseFilter onChangeFilter={filterChangedHandler}
                             yearSelected={filteredYear}></MyExpenseFilter>


           {/* {filteredExpenseList.length === 0 ? (NO_CONTENT_FOUND) : (
                filteredExpenseList.map(item =>
                    <MyExpenseItem key={item.id} title={item.title}
                                   amount={item.amount}
                                   date={item.date}></MyExpenseItem>
                )
            )}*/}

            {expenseListDisplayed}
            {/*    <MyExpenseItem title={props.expenses[0].title}
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
                           date={props.expenses[3].date}></MyExpenseItem>*/}

        </Cards>
    );
}


export default Expenses;