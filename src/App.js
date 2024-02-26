
import './App.css';
import './laptop.css';
import './mobile.css';
import './tablet.css';
import Header from './Components/Header';
import Preview from './Components/Preview';
import Upcoming from './Components/Upcoming';
import Hours from './Components/Hours';
import Articles from './Components/Articles'
import Address from './Components/Address'
import Footer from './Components/Footer'


function App() {
  console.log("Inside app function")

  

  
  function uphome () {
   const element = document.getElementById("header");
      element.scrollIntoView();
  }





  return (
    <div className="App" id='app'>
      {
        /* Header */
        <header className='header' id='header'>
          <Header />
        </header>
      }

      {
        /* Main */
        <main className='main'>
          {
          //Preview
          <section className='preview' id='preview'>
            <Preview />
          </section>
          }

          {
          //Upcoming
          <section className='upcoming-view'>
            <Upcoming />
          </section>
          }

          {
          //Location and Hours
          <section className='locate-hour'>
            <Hours />
          </section>
          }

          {
          //Articles
          <section className='article'>
            <Articles />
          </section>
          }

          {
          //Addresses and other Info
          <section className='address-info'>
            <Address />
          </section>
          }
        </main>
      }
      
      {
        //Footer
        <footer className='footer-index'>
          <Footer />
        </footer>
      }

      {
        //Home Button (Bottom right corner)
        <div className='homebutton'>
          <button className="uphome" id="uphome" onClick={uphome}> 
            &#8679;
          </button>
        </div>
      }

    </div>

  );


}

export default App;
