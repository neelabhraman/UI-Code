Popup Component for React to Show notifications of Success/Warning/Info/Error

1. This component supports 4 types of Popup.
	a. Success
	b. Warning(which can be used as Info as Well)
	c. Error
	
2.The No Fuss POP component can be customized to:
	a. Show desired popup "of type"- STRING
		i.   "success"
		ii.  "warning_info"
		iii. "error"
	b. Show custom Header in the popup- STRING
	c. Show custom Message in the popup- STRING
	d. auto close based on a boolean value- BOOLEAN
	e. The auto close delay can be set "in SECONDS"- NUMBER
	
3. Install the component using the command:
	npm i react-no-fuss-popup

4. Use the below import from "dist" folder for the component in your application
	import Popup from "react-no-fuss-popup/dist/Popup";

5. JSX to incorporate the popup
	<Popup className={popupType} headerMsg={headerMsg} popupMsg={popupMsg} toggleModalPopup={toggleModalPopup}
                   showHideOverLay={showHideOverLay} autoClosePopup={autoClosePopup}
                   autoCloseTime={autoCloseTime}></Popup>
				   
	where 
	a. popupType is a STRING. Valid Values are "success", "warning_info", "error"
	b. headerMsg is a STRING. Valid Values are any string
	c. popupMsg is a STRING. Valid Values are any string
	c. toggleModalPopup is a BOOLEAN. Valid Values are true, false
	d. toggleModalPopup is a function. Valid method is:
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
	e. autoClosePopup is a BOOLEAN. Valid Values are true, false
	f. autoCloseTime is a NUMBER. Valid Values poistive integers

6. The Demo code is availble here:
https://github.com/neelabhraman/UI-Code/tree/main/projecct%205%20_%20NoFussPopup

7.Video Recording of Walkthrough to be Published on 20th May,2022

 
	
Email here for any queries: neelabhraman@gmail.com