import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import axios from "axios";

function App() {
  
  return (
  <div className="Weather">
        <div className="row" id="top-line">
      <div className="col-7">
        <form className="otherPlace" id="searchForPlace">
          <input type="search" placeholder="Type other place"  className="form-control"/>
        </form>
      </div>
      <div className="col-2">
      <form className="SubmitSearch">
      <input type="submit" className="btn" value="Search" id="submitSearch"/>
      </form>
      </div>
    </div>
<br />
<div className="container">
  <div className="row">
    <div className="col-5">
      <div className="place">
        <div className="row">
          <div className="col-6" id="searchedPlace"></div>
        </div>
      </div>
      <div className="extremum">
        <div className="row">
          <div className="col-md-auto">DayMax <span id="dayMax"></span>°C</div>
            <div className="col-md-auto">DayMin <span id="dayMin"></span>°C</div>
        </div>
      </div>
      <div className="features">
          <div className="row row-cols-auto">
            <div className="col-md-auto">Wind <span id="wind">4</span> km/h</div>
            <div className="col-md-auto">Humidity <span id="humidity">50</span>%</div>
          </div>
      </div>
    </div> 
    <div className="col-7" >
        <div className="row align-items-center">
            <div className="col-6" id="value">
              <span  id="temperature"></span>
              <span className="col-3" id="metrics">°C</span>
            </div>
            <div className="col-6" id="image">
              <img  width="110px" className="iconMain" id="icon" />
            </div>
          <div id="description"></div>
        </div>
      </div>
</div>
</div>
<br />
<hr/>
<table className="dayTemp">
      <tr>
        <th>Morning</th>
        <th>Afternoon</th>
        <th>Evening</th>
        <th>Night</th>
      </tr>
      <tr>
        <td id="Morning">°C</td>
        <td id="Afternoon">°C</td>
        <td id="Evening">°C</td>
        <td id="Night">°C</td>
      </tr>
    </table>




  </div>
  );
}

export default App;
