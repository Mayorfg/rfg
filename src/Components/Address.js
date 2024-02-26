import FB from "./images/fb.png"
import X from "./images/x.png"
import IG from "./images/ig.png"
import YT from "./images/yt.png"

function Address () {

  function navClick () {
    const element = document.getElementById("signup").value;
    alert(element + "\nYou have successfully signed up for RFG newsletter");
  }

  function navClick2 () {
    const element = document.getElementById("signup2").value;
    alert(element + "\nYou have successfully signed up for RFG newsletter");
  }

  function navClick3 () {
    alert("This button would take you to the app store, to download the mobile app");
  }
  

  return (
    <div className="mainAddy">

      {//JOIN RFG
      <div className="join">
        <p>Join the RFG family</p>
        <div className="join-input">
          <div>
            <input id="signup" type="email" placeholder="Enter your email to sign up for our newsletter." />
            <button className="button" onClick={navClick}>
            &rsaquo;
            </button>
          </div>
        </div>
      </div>  
      }

      {//Address and other Socials Block
      <div className="end-info">
        <div className="address">
          <p className="logoend">RFG</p>
          <p className="addy">
          <b>Houston Art Gallery</b><br/><br/>
            1011 Main St.  <br/><br/>
            Houston, TX 77406<br/><br/>
            Phone: 346-763-9249
          </p>
          <a href="#..." onClick={navClick3}>Download the App</a>
        </div>
        <div className="other">
          <div className="a">
            <p>
              About RFG<br/><br/>
              Mission and History<br/><br/>
              Collection Areas<br/><br/>
              Conservation Departments<br/><br/>
              Accessibility<br/><br/>
              Press
            </p>
          </div>
          <div className="b">
            <p>
              Support<br/><br/>
              Membership<br/><br/>
              Host an Event<br/><br/>
              Travel with RFG<br/><br/>
              Corporate Support
            </p>
          </div>
          <div className="c">
            <p>
              Career Opportunities<br/><br/>
              Volunteers<br/><br/>
              Fellowship<br/><br/>
              Internship
            </p>
          </div>
          <div className="d">
            <p>
              Follow Us
            </p>
            <a className="social" href="https://www.facebook.com/mayowa.akinyemi.5" target="_blank" rel="noreferrer"><img src={FB} alt="Fb"/></a>
            <a className="social" href="https://twitter.com/Mayor_rfg" target="_blank" rel="noreferrer"><img src={X} alt="X"/></a>
            <a className="social" href="https://instagram.com/solimariam/" target="_blank" rel="noreferrer"><img src={IG} alt="IG"/></a>
            <a className="social" href="https://www.youtube.com/watch?v=t7sjfkmKhsE" target="_blanket" rel="noreferrer"><img src={YT} alt="YT"/></a>
          </div>
          <div className="e">
            <p>Join our newsletter</p>
            <div>
              <input id="signup2" type="email" placeholder="Enter your email"/>
              <button onClick={navClick2}>Sign Up</button>
            </div>
          </div>

        </div>
      </div>
      }

    </div>
  );
}
export default Address;