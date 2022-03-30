import './NewExpense.css';
import MyExpenseForm from './ExpenseForm';
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseDate);
        toggleFormVisibilityHandler();
    }

    const toggleFormVisibilityHandler = () => {
        setIsEditing((previousVal) => {
            return !previousVal;
        });
    }

    return (
        <div className="new-expense">
            {!isEditing && <button type="button" onClick={toggleFormVisibilityHandler}>Add New Expense</button>}
            {isEditing && <MyExpenseForm onCancel={toggleFormVisibilityHandler}
                                         onSaveExpenseDate={saveExpenseDataHandler}></MyExpenseForm>}
        </div>
    );

}


export default NewExpense;