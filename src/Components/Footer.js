

function Footer () {

  function navClick () {
    alert("This would take you to a page showing more about the site index, Terms and Condition, etc.");
  }

  return (
    <div className="end">
       <div onClick={navClick}>
        <a className="index" href="#...">Site Index</a>
        <a className="index" href="#...">Terms and Conditions </a>
        <a className="index" href="#...">Privacy Policy</a>
        <a className="index" href="#...">Contact Information</a>
      </div>
      
      <footer className="footer">
        &copy; 2024 RFG. All rights reserved.
      </footer>
        
    </div>

    
  );
}
export default Footer;