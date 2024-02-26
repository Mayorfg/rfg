import Foam from "./images/foam.JPG"
import Candle from "./images/candle.GIF"
import Dog from "./images/dog.JPG"
import Shop from "./images/shop.JPG"
import rain from "./images/rain.GIF"
import mast from "./images/mast.GIF"

function Articles () {

  function navClick () {
    alert("This would take you to a page that contains the full article or where to get the ticket ");
  }


  return (
    <div className="a-Main">
      {//Article #1
      <div className="block">
        <a href="#..." className="block-photo" onClick={navClick}><img src={Foam} alt="Aricle 1" /></a>
        <div className="text">
          <p className="t-subtext1">Dream Home</p>
          <p className="t-subtext2">Upcoming artist debuts his solo Collection. Get to know the artist and the art.</p>
          <a className="t-subtext3" href="#..." onClick={navClick}> Read more</a>
        </div>
      </div>
      }

      {//Article #2
      <div className="block">
        <div className="text">
            <p className="t-subtext1">Light your inner flame</p>
            <p className="t-subtext2">On April 21 and 22, join the RFG family in an immersive candle show.</p>
            <a className="t-subtext3" href="#..." onClick={navClick}> Get tickets</a>
        </div>
        <a href="#..." className="block-photo" onClick={navClick}><img src={Candle} alt="Article 2"/></a>
      </div>
      }

      {//Article #3
      <div className="block">
        <a href="#..." className="block-photo" onClick={navClick}><img src={rain} alt="Article 3"/></a>
        <div className="text3">
          <p className="t-subtext1">Rainy Weather? </p>
          <p className="t-subtext2">Explore the world of animation with Mayo.</p>
          <a className="t-subtext3" href="#..." onClick={navClick}> Get tickets</a>
        </div>
      </div>}


      {//Article #4
      <div className="block">
      <div className="text3">
        <p className="t-subtext1">One Blink, Two Blinks</p>
        <p className="t-subtext2">Get to know the artist and understand the story behind new his new animation set.</p>
        <a className="t-subtext3" href="#..." onClick={navClick}> Read more</a>
      </div>
      <a href="#..." className="block-photo" onClick={navClick}><img src={mast} alt="Article 3"/></a>
    </div>}

      {//Article #5 
      <div className="block">
        <a href="#..." className="block-photo" onClick={navClick}><img src={Dog} alt="Article 4" /></a>
        <div className="text">
          <p className="t-subtext1">Pet Friendly Exhibitions</p>
          <p className="t-subtext2">Get to spend more with your furry friends, even at the gallery.</p>
          <a className="t-subtext3" href="#..." onClick={navClick}> Learn more</a>
        </div>

      </div>
      }

      {//Article #6
      <div className="block">
        <div className="text">
          <p className="t-subtext1">RFG Store</p>
          <p className="t-subtext2">Check out our new RFG apparels.</p>
          <a className="t-subtext3" href="#..." onClick={navClick}> Shop now</a>
        </div>
        <a href="#..." className="block-photo" onClick={navClick}><img src={Shop} alt="Aricle 5" /></a>
      </div>
    }

    </div>
  );
}
export default Articles;