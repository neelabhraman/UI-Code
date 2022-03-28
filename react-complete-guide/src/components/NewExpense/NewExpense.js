import './NewExpense.css';
import MyExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseDate);
    }

    return (
        <div className="new-expense">
            <MyExpenseForm onSaveExpenseDate={saveExpenseDataHandler}></MyExpenseForm>
        </div>
    );

}


export default NewExpense;