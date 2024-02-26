import light from "./images/light.jpg"
import Perspective from "./images/perspective.jpeg"
import Spiral from "./images/rail.jpg"
import Yard from "./images/yard.jpeg"
import Serene from "./images/sunset.png"
import NFT from "./images/nft.jpeg"

function Upcoming () {

  const div = document.getElementById("upcoming")

  function navClick () {
    alert("This button would take you to a page that shows all upcoming exhibitions!");
  }

  function moveleft () {

    document.getElementById('upcoming').scrollLeft -= div.clientWidth;
    document.getElementById('right-button').style.visibility ='visible';
    if (div.clientWidth === 0) {
      document.getElementById('left-button').style.visibility ='hidden';
    }
  }
  
  function moveright () {
    document.getElementById('upcoming').scrollLeft += div.clientWidth;
    document.getElementById('left-button').style.visibility ='visible';
    if ((document.getElementById('upcoming')).scrollLeft === div.scrollWidth) {
      document.getElementById('right-button').style.visibility ='hidden';
    } 
  }
  
  
  
  
  function mouseOver () {
    document.getElementById('buttonHover').style.visibility ='visible';
    if ((document.getElementById('upcoming')).scrollLeft < 100) {
      document.getElementById('left-button').style.visibility ='hidden';
    } else {
      document.getElementById('left-button').style.visibility ='visible';
    }

    if ((document.getElementById('upcoming')).scrollLeft > 2200) {
      document.getElementById('right-button').style.visibility ='hidden';
    } else {
      document.getElementById('right-button').style.visibility ='visible';
    }
  }
  
  function mouseOut () {
    document.getElementById('buttonHover').style.visibility ='hidden';
    document.getElementById('right-button').style.visibility ='hidden';
    document.getElementById('left-button').style.visibility ='hidden';
  }

  return (
    <div className="Upcoming">
      {// Header
      <div className="views">
        <p>
          Upcoming View
        </p>
        <a href="#...." onClick={navClick}>View all exhibitions &#62;</a>
      </div>}

      {// Upcoming View Main Block
      <div className="mainviews" id="upcoming" onMouseOver={mouseOver} onMouseOut={mouseOut}>
        { //figure 1
        <figure className="uv">
          <a href={light}> <img className="img" src={light} alt="figure 1"/></a>
          <a className="uvt" href="#..." >Speed of Light</a>
          <figcaption className="figcap">
            <p>Through March 7</p>
            <p>Houston Art Gallery</p>
          </figcaption>
        </figure>
        }

        { //figure 2
        <figure className="uv">
          <a href={Perspective}> <img className="img" src={Perspective} alt="figure 2"/></a>
          <a className="uvt" href="#..." >Perspectve</a> 
          <figcaption className="figcap">
            <p>Through March 21</p>
            <p>Houston Art Gallery</p>
          </figcaption>
        </figure>
        }

        { //figure 3
        <figure className="uv">
          <a href={Spiral}> <img className="img" src={Spiral} alt="figure 3"/></a>
          <a className="uvt" href="#..." >Into the Spiral</a>
          <figcaption className="figcap">
            <p>Through March 21</p>
            <p>Houston Art Gallery</p>
          </figcaption>
        </figure>
        }

        { //figure 4
        <figure className="uv">
          <a href={Yard}> <img className="img" src={Yard} alt="figure 4"/></a>
          <a className="uvt" href="#..." >Animated Yard</a> 
          <figcaption className="figcap">
            <p>Through April 14</p>
            <p>Houston Art Gallery</p>
          </figcaption>
        </figure>
        }

        { //figure 5
        <figure className="uv">
          <a href={Serene}> <img className="img" src={Serene} alt="figure 5"/></a>
          <a className="uvt" href="#..." >Serenity</a> 
          <figcaption className="figcap">
            <p>Through April 27</p>
            <p>Houston Art Gallery</p>
          </figcaption>
        </figure>
        }

        { //figure 6
        <figure className="uv">
          <a href={NFT}> <img className="img" src={NFT} alt="figure 6"/></a>
          <a className="uvt" href="#..." >NFT</a>
          <figcaption className="figcap">
            <p>Through May 8</p>
            <p>Houston Art Gallery</p>
          </figcaption>
        </figure>
        }

        {//end space
        <div className="endview">
        </div>
        }

      </div>
      }

      {//Button to navigate left and right on the upcoming view
      <div className="btn" id="buttonHover" onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <div id="buttonHover">
            <button onClick={moveleft} className="btn-L" id="left-button">&#11104;</button>
            <button onClick={moveright} className="btn-R" id="right-button">&#11106;</button>
          </div>
      </div>
      }
    </div>
  );
};
export default Upcoming;