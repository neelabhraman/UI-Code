import "./ExpensesList.css";
import MyExpenseItem from "./ExpenseItem";
import React from "react";

const ExpensesList = (props) => {

    if (props.dataList.length === 0) {
        return (<h2 className="expenses-list__fallback">Found no expenses!</h2>);
    }

    let expenseListDisplayed = props.dataList.map(item =>
        <MyExpenseItem key={item.id} title={item.title}
                       amount={item.amount}
                       date={item.date}></MyExpenseItem>
    );


    return (
        <ul className="expenses-list ">
            {/* {props.dataList.length === 0 ? (NO_CONTENT_FOUND) : (
                props.dataList.map(item =>
                    <MyExpenseItem key={item.id} title={item.title}
                                   amount={item.amount}
                                   date={item.date}></MyExpenseItem>
                )
            )}*/}

            {expenseListDisplayed}

            {/*    <MyExpenseItem title={props.dataList[0].title}
                   amount={props.dataList[0].amount}
                   date={props.dataList[0].date}></MyExpenseItem>
    <MyExpenseItem title={props.dataList[1].title}
                   amount={props.dataList[1].amount}
                   date={props.dataList[1].date}></MyExpenseItem>
    <MyExpenseItem title={props.dataList[2].title}
                   amount={props.dataList[2].amount}
                   date={props.dataList[2].date}></MyExpenseItem>
    <MyExpenseItem title={props.dataList[3].title}
                   amount={props.dataList[3].amount}
                   date={props.dataList[3].date}></MyExpenseItem>*/}
        </ul>
    );

}

export default ExpensesList;