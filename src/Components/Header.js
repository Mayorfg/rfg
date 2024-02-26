
function Header () {

  function navClick () {
    alert("This button would take you to a page to buy tickets or register to become a member");
  }


  return (
    <header className="toolbar" id='header'>
         
      <div className="nav">
        <h1>RFG</h1>
        <div className='sp'> 
          <a className="topnav" href="#...." onClick={navClick}>Buy tickets </a>
          <a style={{border:"0px solid white", backgroundColor:"white"}} className="topnav" href="#...." onClick={navClick}>Become a member</a> 
          <a className="topnav" href="https://share.icloud.com/photos/0b2AC2ryWB34vtv-S_e8aA_eA" target="_blank" rel="noreferrer">Gallery</a>&nbsp;
        </div>
      </div>
    </header> 
  );
};
export default Header;