
# Popup Component for React to Show notifications of Success/Warning/Info/Error  

Detailed Feature details with snapshots are here:  
https://github.com/neelabhraman/UI-Code/blob/main/projecct%205%20_%20NoFussPopup/Features%20and%20Demo%20for%20react-no-fuss-popup%20-%20Google%20Docs.pdf  

1. This component supports 4 types of Popup.  
	&nbsp;&nbsp;a. Success  
	&nbsp;&nbsp;b. Warning(which can be used as Info as Well)  
	&nbsp;&nbsp;c. Error  

2. The No Fuss POP component can be customized to:  
	&nbsp;&nbsp; a. Show desired "type of popup"- **STRING**  
		&nbsp;&nbsp;&nbsp;&nbsp; i.  "success"  
		&nbsp;&nbsp;&nbsp;&nbsp; ii.   "warning_info"  
		&nbsp;&nbsp;&nbsp;&nbsp; iii.  "error"  
	&nbsp;&nbsp; b. Show custom Header in the popup- **STRING**  
	&nbsp;&nbsp; c. Show custom Message in the popup- **STRING**  
	&nbsp;&nbsp; d. auto close based on a boolean value- **BOOLEAN**  
	&nbsp;&nbsp; e. The auto close delay can be set "in SECONDS"- **NUMBER**  

3. 	The Popup can be **closed** by cliking on the "Okay" Button **OR** by clicking outside the Popup.  
	For **Auto closing Popup** the "Okay" Button will be **hidden**, still user can close it by clicking outside the Popup.    
	
4. Install the component using the command:  
	&nbsp; npm i react-no-fuss-popup  

5. Use the below import from "dist" folder for the component in your application  
	&nbsp; import Popup from "react-no-fuss-popup/**dist**/Popup";  

6. JSX to incorporate the popup  
	&nbsp;&nbsp; \<Popup className={**popupType**} headerMsg={**headerMsg**} popupMsg={**popupMsg**} toggleModalPopup={**toggleModalPopup**}  
                   &nbsp;&nbsp;  showHideOverLay={**showHideOverLay**} autoClosePopup={**autoClosePopup**}  
                   &nbsp;&nbsp;  autoCloseTime={**autoCloseTime**}\>\</Popup\>  
				   
	&nbsp;&nbsp; where   
	&nbsp;&nbsp; a. popupType is a **STRING, Valid Values** are "success", "warning_info", "error"  
	&nbsp;&nbsp; b. headerMsg is a **STRING. Valid Values** are any string  
	&nbsp;&nbsp; c. popupMsg is a **STRING. Valid Values** are any string  
	&nbsp;&nbsp; d. toggleModalPopup is a **BOOLEAN. Valid Values** are true, false  
	&nbsp;&nbsp; e. showHideOverLay is a **function. Valid method** is:  
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  /*type can be SUCCESS, WARNING, ERROR*/  
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  const showHideOverLay = (headerMsg, popupMsg, type, autoClosePopup,autoCloseTime) => {  
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  setToggleModalPopup((prevState) => {  
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  return !prevState;  
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  });
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  //setting the header msg and popup Msg  
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  setHeaderMsg(headerMsg);  
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  setPopupMsg(popupMsg);  
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  setPopupType(type);  
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  setAutoClosePopup(autoClosePopup);  
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  setAutoCloseTime(autoCloseTime);  
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  };  
	&nbsp;&nbsp; f. autoClosePopup is a **BOOLEAN. Valid Values** are true, false  
	&nbsp;&nbsp; g. autoCloseTime is a **NUMBER. Valid Values** poistive integers  

7. The **Demo code** is availble here:  
&nbsp;&nbsp;  https://github.com/neelabhraman/UI-Code/blob/main/projecct%205%20_%20NoFussPopup/src/App.js

8.Video Recording of Walkthrough to be Published on 20th May,2022  

 
	
Email here for any **queries**: neelabhraman@gmail.com  