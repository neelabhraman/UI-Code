import NewUserForm from "./components/NewUserForm";
import UserList from "./components/UserList";
import {useState} from "react";

function App() {

    const [userList, setUserList] = useState([]);

    //modifying list in parent
    const addNewUser = (newUser) => {
        setUserList((prevState) => {
            return [...prevState, newUser]
        });

    };
    return (
        <div>
            <NewUserForm userList={userList} onAddNewUser={addNewUser}></NewUserForm>
            <UserList userList={userList}></UserList>
        </div>
    )
        ;
}

export default App;

