import React from "react";
import Gallery from "./images/gallery3.JPG"

function Hours () {

  function navClick () {
    alert("This would redirect you to a google map showing the address.");
  }


  var test1 = "maroon"
  var test2 = "Next open tomorrow at 10am"
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const Today = new Date();
  const hours = Today.getHours();
  
  Date.prototype.getDayName = function() {
    return days[ this.getDay() ];
  };

  const day = Today.getDayName();


  
  if (day === "Wednesday") {
    // eslint-disable-next-line
    var test1 = "maroon";
    // eslint-disable-next-line
    var test2 = "Next open tomorrow at 10 am";
  } else if (hours < 10) {
    // eslint-disable-next-line
    var test1 = "maroon";
    // eslint-disable-next-line
    var test2 = "Next open today at 10 am";
  } else if ((day==="Friday" || day==="Saturday") && (hours>=10 && hours<21) ) {
    // eslint-disable-next-line
    var test1 = "green";
    // eslint-disable-next-line
    var test2 = "Open today 10 am-9 pm";
  } else if (day==="Tuesday" && hours>17) {
    // eslint-disable-next-line
    var test1 = "maroon";
    // eslint-disable-next-line
    var test2 = "Next open Thursday at 10 am";
  } else if (hours>=10 && hours<17 ) {
    // eslint-disable-next-line
    var test1 = "green";
    // eslint-disable-next-line
    var test2 = "Open today 10 am-5 pm";
  } else {
    // eslint-disable-next-line
    var test1 = "maroon";
    // eslint-disable-next-line
    var test2 = "Next open tomorrow at 10 am";
  }
    
  

  



  

  return (
    <div className="LH">
      {//Location and Hours Headers
      <div className="location">
        <p className="t-locate">
          Location and Hours
        </p>
      </div>}

      {//Location and Hour Photo and Text Section
      <div className="p-locate" >
        <div className="locate-photo">
          <a href="#..." onClick={navClick}>
            <img src={Gallery} alt="Gallery"/>
          </a>
        </div>
        <a className="locate-text" href="#..." onClick={navClick}>Houston Art Gallery</a>
        <p className="info"> Art, architecture and animation</p>
        <p style={{color: test1}} className="clock" id="hours">&#128339; &nbsp; {test2} </p>
        <p className="hours">
          <b>Hours:</b> Sunday-Tuesday and Thursday: 10 am-5 pm<br/><br/>
          <b>Extended Hours:</b> Friday and Saturday: 10 am-9 pm<br/><br/>
          <b>Closed:</b> Wednesday<br/>
        </p>
        <p className="closed">Closed Thanksgiving Day, December 25, and January 1.</p>
      </div>}
    </div>
  );
}
export default Hours;