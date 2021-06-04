import './App.css';
import LinkedIn from "./linkedin-logo.png"
import GitHub from "./github-logo.png"

function App() {
  return (
    <div className="App">
    
   

    <h2>By.Connor_Hutchy</h2>

    <br/>
    <a className="Link" href="https://connorhutchy.com/astrology-site/">Astronomy site</a>
    <br/>
    <a className="Link" href="https://indibrummelen.com">Indi Brummelen - Portfolio site</a>
    <br></br>
    <a 
    className="Link" href="https://www.linkedin.com/in/connor-hutchinson/" >
      <img className="Image" src={LinkedIn} alt="LinkedIn"></img>
    </a>
    <br/>
    <a 
    className="Link" id="Git" href="https://github.com/connorhutchy" >
      <img className="Image" src={GitHub} alt="Personal Github"></img>
    </a>
    <br/>
  
    </div>
  );
}

export default App;
