import './ExpenseItem.css';
import MyExpenseDate from './ExpenseDate';
import Cards from "../UI/Cards";
//import {useState} from 'react';

const ExpenseItem = props => {
    console.log("ExpenseItem Component loaded");
    /*  const [title, setTitle] = useState(props.title);

    const clickEventHandler = event => {
        setTitle("New Title");
        console.log(title);
    }*/


    return (
        <li>
            <Cards className="expense-item">
                <MyExpenseDate date={props.date}></MyExpenseDate>
                <div className="expense-item__description">
                    {/*                <h2>{title}</h2>*/}
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/*<button onClick={clickEventHandler}>Change Title</button>*/}
            </Cards>
        </li>
    );


}


export default ExpenseItem;