import NewUserForm from "./components/NewUserForm";
import UserList from "./components/UserList";
import {useState} from "react";
import Popup from "./components/Popup";

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
            <Popup></Popup>
        </div>
    )
        ;
}

export default App;

