import "./Popup.css";

const Popup = (props) => {

    const popupButtonHandler = (event) => {
        console.log("Cancel Clicked");
        props.showHideOverLay();
    };

    return (
        <div id="popupOverlay" className={!props.toggleModalPopup ? 'overLayHidden' : 'overLayVisible'}>
            {/*this is the overlay which makes background fade*/}

            {/*Now starts the modal*/}
            <div className="popupContainer">
                <div id="popupHeader">
                    {props.headerMsg}
                </div>
                <div id="popupContent">
                    {props.popupMsg}
                </div>
                <div id="buttonContent">
                    <button id="cancelButton" type="button" onClick={popupButtonHandler}>Okay</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;