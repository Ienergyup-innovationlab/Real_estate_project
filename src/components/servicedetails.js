import React from 'react';
import './properties.css';
import Header from "./Header";
import Footer from './Footer';



function Propertydetails() {

  return (
    <>
    <Header />
    <div className="details">
      <div className='row'>
        <form name="regForm" id="regForm" method="get">
          <div className="columnrw form-body">
            <div className="column">
              <input className="form__input" name="location" type="text" id="location" placeholder="Location"/>
            </div>
            <div className="column">
              <input className="form__input" name="country" type="text" id="country" placeholder="Country"/>
            </div>
            <div className="column">
              <input className="form__input" name="state" type="text" id="state" placeholder="State"/>
            </div>
            <div className="column">
              <input  type="text" name="typeService" id="Services"  className="form__input" placeholder="Type of Services?"/>
            </div>
            
          </div>
          <div className="columnrww">
            <div className="column-btn">
              <button type="submit" name="sendRequest" id="sendRequest" class="btn">Filter</button>
            </div>
          </div>
        </form>
      </div>
      <div className='row'>
        <div className="columnbw">
          <div className="mtop mtopin">
            <p className="tp">Adekunle Benson <br />Lagos Mainland</p>
            <p className="tpi">Furniture <span className="tpush"><a href="/">View more like this</a></span></p>
          </div>
          
          <div className='mtop mtope fbut'>
            <div className='feature'>
              <p className='featurep'>About Adekunle Benson</p>
              <p className='fp'>Lorem ipsum dolor sit amet,</p>
              <p className='featurep ftop'>Full Description</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet erat leo, vel commodo 
                ipsum mollis ut. Nulla vitae ante nunc. Sed euismod, magna id tincidunt dapibus, tortor mi posuere 
                justo, in consectetur lectus turpis et nulla. Sed et velit sed lectus hendrerit lobortis quis ac dolor. 
                Proin aliquet at justo eget ullamcorper. Phasellus pellentesque mauris in mi rutrum, id hendrerit enim lacinia. 
                Proin maximus metus quam, in luctus dolor fermentum vel.
              </p>
            </div>
          </div>
        </div>
        <div className="columnbww">
          <div className="mtop tpii">
            <div className="column-btn">
              <button type="submit" class="btn">Contact Agent</button>
            </div>
            <div className="userpc">
              <img className='userp' src="images/user.png" alt="User" />
            </div>
            <p className="pusr">Abule Egba, Lagos Mainland</p>
            <h4 className="pusri">Safety Tips</h4>
            <p className="pusri">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet erat leo, vel commodo ipsum mollis ut. Nulla vitae ante nunc.</p>
          </div>
          <div className="mtop tpe fbut">
            <h4 className="pusri">Surrounding Areas</h4>
            <p className="pusrie"><a href="/">Surulere</a></p>
            <p className="pusrie"><a href="/">Iponri</a></p>
            <p className="pusrie"><a href="/">Masha</a></p>
            <p className="pusrie"><a href="/">Shitta</a></p>
          </div>
          
        </div>
      </div>
    </div> 
    {/* <div className='fwidt'></div>
    <Footer /> */}
    </>
  )
}

export default Propertydetails;