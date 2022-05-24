import './NewUserForm.css';
import {useState} from "react";

const NewUserForm = (props) => {
        const MSG_1 = "Please enter a valid name and age (non-empty values).";
        const MSG_2 = "Please enter a valid age(>0).";
        const MSG_3 = "User Added Successfully";
        const SUCCESS = "success";
        const WARNING = "warning_info";
        const ERROR = "error";
        const TWO_SEC = 2;
        //using Object in case we want to increase the number of items in the form
        const [userInput, setUserInput] = useState({
            enteredName: "",
            enteredAge: ""
        });
        const formSubmitHandler = (event) => {
            //stop default form submit to stop refreshing
            event.preventDefault();
            //return the new value for addition in master List

            //validation starts
            if (formValidationWrapper()) {
                return;
            }
            //validation ends. Return and do not do anything
            props.onAddNewUser({
                userName: userInput.enteredName,
                age: userInput.enteredAge,
                id: Math.random().toString()
            });
            //check the data added
            console.log("form submitted", userInput.enteredName, userInput.enteredAge);
            // remove the entered value
            setUserInput({enteredName: "", enteredAge: ""});
            props.showHideOverLay("Success Message Header", MSG_3, SUCCESS, true, TWO_SEC);

        };

        //wrapper for form validation
        const formValidationWrapper = () => {
            if (formEmptyValidation()) {
                return true;
            }
            if (ageInvalidValidation()) {
                return true;
            }
        };

        //validation 1. Invoked by wrapper
        const formEmptyValidation = () => {
            if (userInput.enteredName === "" || userInput.enteredAge === "") {
                props.showHideOverLay("2 46PM", "My DEMo Msg", ERROR, false);
                return true;
            }
        };
        //validation 2. Invoked by wrapper
        const ageInvalidValidation = () => {
            if (userInput.enteredAge <= 0) {
                props.showHideOverLay("Warning Message Header", MSG_2, WARNING, false);
                return true;
            }
        };
        const nameChangeHandler = (event) => {
            setUserInput((prevState) => {
                return {
                    enteredName: event.target.value,
                    enteredAge: prevState.enteredAge
                };
            });
        };

        const ageChangeHandler = (event) => {
            setUserInput((prevState) => {
                return {
                    enteredName: prevState.enteredName,
                    enteredAge: event.target.value
                };
            });
        };
        return (
            <div id='inputModal'>
                <form onSubmit={formSubmitHandler}>
                    <div>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div>
                        <input id='username' type="text" value={userInput.enteredName} onChange={nameChangeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="age">Age(Years)</label>
                    </div>
                    <div>
                        <input id='age' type="number" value={userInput.enteredAge} onChange={ageChangeHandler}/>
                    </div>
                    <div>
                        <button id="submitButton" type="submit">Add User</button>
                    </div>
                </form>
            </div>
        );
    }
;

export default NewUserForm;

