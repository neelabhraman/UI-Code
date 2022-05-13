import "./Popup.css";

const Popup = (props) => {
let autoClosePopUpTimer;
    if (props.autoClosePopup) {
        //hide the button in JSX, see in the return section
        //then toggle to hide the popup after user Stipulated time
        autoClosePopUpTimer = setTimeout(() => {
            props.showHideOverLay("", "", "", "", "");
            console.log("auto Closed");
        }, props.autoCloseTime * 1000);
    }
    const popupButtonHandler = (event) => {
        if(["popupOverlay","cancelButton"].indexOf(event.target.id)<0){
            return;
        }
        console.log("manually Closed");
        //since the button is closed, clear the timer
        clearTimeout(autoClosePopUpTimer);
        console.log(event.target.id);
        props.showHideOverLay("", "", "", "", "");
    };
    return (
        <div id="popupOverlay" className={!props.toggleModalPopup ? 'overLayHidden' : 'overLayVisible'} onClick={popupButtonHandler}>
            {/*this is the overlay which makes background fade*/}

            {/*Now starts the modal*/}
            <div id="popupContainer" className={props.className}>
                <div id="popupHeader">
                    {props.headerMsg}
                </div>
                <div id="popupContent" className={props.autoClosePopup ? 'centreAlignedMsg' : ''}>
                    {props.popupMsg}
                </div>
                <div id="buttonContent">
                    {props.autoClosePopup ? "" : (
                        <button id="cancelButton" type="button">Okay</button>)}
                </div>
            </div>
        </div>
    );
}

export default Popup;