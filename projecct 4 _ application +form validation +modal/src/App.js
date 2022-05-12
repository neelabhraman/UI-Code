import NewUserForm from "./components/NewUserForm";
import UserList from "./components/UserList";
import {useState} from "react";
import Popup from "./components/Popup";

function App() {

    const [userList, setUserList] = useState([]);
    const [toggleModalPopup, setToggleModalPopup] = useState(false);
    const [popupMsg, setPopupMsg] = useState('');
    const [headerMsg, setHeaderMsg] = useState('')
    const [popupType, setPopupType] = useState('');
    //modifying list in parent
    const addNewUser = (newUser) => {
        setUserList((prevState) => {
            return [...prevState, newUser]
        });

    };
    /*type can be SUCCESS, WARNING, ERROR*/
    const showHideOverLay = (headerMsg, popupMsg, type) => {
        setToggleModalPopup((prevState) => {
            return !toggleModalPopup;
        });
        //setting the header msg and popup Msg
        setHeaderMsg(headerMsg);
        setPopupMsg(popupMsg);
        setPopupType(type);

    };

    return (
        <div>
            <NewUserForm userList={userList} onAddNewUser={addNewUser} showHideOverLay={showHideOverLay}></NewUserForm>
            <UserList userList={userList}></UserList>
            <Popup popupType={popupType} headerMsg={headerMsg} popupMsg={popupMsg} toggleModalPopup={toggleModalPopup}
                   showHideOverLay={showHideOverLay}></Popup>
        </div>
    )
        ;
}

export default App;

