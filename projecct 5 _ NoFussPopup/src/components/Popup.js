import styles from "./Popup.module.css";

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
        if (!(event.target.id.includes("popupOverlay") || event.target.id.includes("cancelButton"))) {
            return;
        }
        console.log("manually Closed");
        //since the button is closed, clear the timer
        clearTimeout(autoClosePopUpTimer);
        console.log(event.target.id);
        props.showHideOverLay("", "", "", "", "");
    };
    return (
        <div id={styles.popupOverlay} className={!props.toggleModalPopup ? styles.overLayHidden : styles.overLayVisible}
             onClick={popupButtonHandler}>
            {/*this is the overlay which makes background fade*/}
            {/*Now starts the modal*/}
            <div id={styles.popupContainer} className={`${styles[props.className]}`}>
                <div id={styles.popupHeader}>
                    {props.headerMsg}
                </div>
                <div id={styles.popupContent} className={props.autoClosePopup ? styles.centreAlignedMsg : ''}>
                    {props.popupMsg}
                </div>
                <div id={styles.buttonContent}>
                    {props.autoClosePopup ? "" : (
                        <button id={styles.cancelButton} type="button">Okay</button>)}
                </div>
            </div>
        </div>
    );
}

export default Popup;