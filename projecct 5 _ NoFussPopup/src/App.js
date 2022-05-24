import NewUserForm from "./components/NewUserForm";
import UserList from "./components/UserList";
import {useState} from "react";
import React from "react";
import Popup from "react-no-fuss-popup/dist/Popup";

function App() {

    const [userList, setUserList] = useState([]);
    const [toggleModalPopup, setToggleModalPopup] = useState(false);
    const [popupMsg, setPopupMsg] = useState('');
    const [headerMsg, setHeaderMsg] = useState('')
    const [popupType, setPopupType] = useState('');
    const [autoClosePopup, setAutoClosePopup] = useState(false);
    const [autoCloseTime, setAutoCloseTime] = useState(0);
    //modifying list in parent
    const addNewUser = (newUser) => {
        setUserList((prevState) => {
            return [...prevState, newUser]
        });

    };
    /*type can be SUCCESS, WARNING, ERROR*/
    const showHideOverLay = (headerMsg, popupMsg, type, autoClosePopup,autoCloseTime) => {
        setToggleModalPopup((prevState) => {
            return !prevState;
        });
        //setting the header msg and popup Msg
        setHeaderMsg(headerMsg);
        setPopupMsg(popupMsg);
        setPopupType(type);
        setAutoClosePopup(autoClosePopup);
        setAutoCloseTime(autoCloseTime);
    };

    return (
        <div>
            <NewUserForm  onAddNewUser={addNewUser} showHideOverLay={showHideOverLay}></NewUserForm>
            <UserList userList={userList}></UserList>
            <Popup className={popupType} headerMsg={headerMsg} popupMsg={popupMsg} toggleModalPopup={toggleModalPopup}
                   showHideOverLay={showHideOverLay} autoClosePopup={autoClosePopup}
                   autoCloseTime={autoCloseTime}></Popup>
        </div>
    )
        ;
}

export default App;

