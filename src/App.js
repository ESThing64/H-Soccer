import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Typewriter from 'typewriter-effect';



const backgroundUrl = "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=soccer"
axios.get(backgroundUrl)
.then(data=> {
  document.body.style.backgroundImage = `url(${data.data.urls.full})`
})

const listA = ["You're the ROCK!", "Make it count! 👊🏻", "Make it count!", "You're a mustang 🐎"]

let min = Math.ceil(0);
let max = Math.floor(listA.length);
const rand = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rand);
function App() {
  return (
    <>
    <main>

         <div class="top">
           <div id="stock"></div>
           <div id="weather">
               <img id="icon"/>
               <span className="weather" id="city"></span>
               <span className="weather" id="temp"></span>
               <span className="weather" id="hum"></span>
           </div>

       </div>
    
<Typewriter id="time" className="time"
    onInit={(typewriter) => {
      typewriter.pauseFor(2000)
      .typeString('Hello Haliey!')
        .pauseFor(1000)
        .deleteAll()
        .typeString('How are you today?')
        .pauseFor(2500)
        .deleteAll()
        .typeString("Hey! Hailey! <br><br>")
        .typeString(listA[rand])
        .start();
    }}
  
/>


<div className="bottom"/>
       <p id="img-auth"/>


  </main>
  </>
  );
}

export default App;
