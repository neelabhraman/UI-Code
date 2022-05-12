import NewUserForm from "./components/NewUserForm";
import UserList from "./components/UserList";
import {useState} from "react";
import Popup from "./components/Popup";

function App() {

    const [userList, setUserList] = useState([]);
    const [toggleModalPopup, setToggleModalPopup] = useState(false);
    const [popupMsg, setPopupMsg] = useState('');
    //modifying list in parent
    const addNewUser = (newUser) => {
        setUserList((prevState) => {
            return [...prevState, newUser]
        });

    };

    const showHideOverLay = (msg) => {
        setToggleModalPopup((prevState) => {
            return !toggleModalPopup;
        });
        setPopupMsg(msg);
    };

    return (
        <div>
            <NewUserForm userList={userList} onAddNewUser={addNewUser} showHideOverLay={showHideOverLay}></NewUserForm>
            <UserList userList={userList}></UserList>
            <Popup popupMsg={popupMsg} toggleModalPopup={toggleModalPopup} showHideOverLay={showHideOverLay}></Popup>
        </div>
    )
        ;
}

export default App;

