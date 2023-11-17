import React from 'react';
import './propertydetails.css';
import Header from "./Header";
import Footer from "./Footer";

function Scheduleform() {

  return (
    <>
    <Header />
      <div className="details prop__container">
        <div className='row'>
            <div className="columnbw">
                <div className='formborder'>
                    <div className="schedule">
                        <h1 className='scheduleh'>Schedule Meeting Form</h1>
                        <p>Kindly fill the form below to Schedule a meeting with our agent</p>
                    </div>
                    <form name="regForm" id="regForm" method="get">
                        <div className="form-body">
                            <div className="col-12">
                                <input className="form__input schedulef" name="name" type="text" id="name" placeholder="Enter Your Fullname"/>
                            </div>
                            <div className="col-12">
                                <input className="form__input schedulef" name="contact-number" type="number" id="phoneNum" placeholder="Enter Your Mobile Phone Number"/>
                            </div>
                            <div className="col-12">
                                <div className="schedulet">
                                    <label>Enter the type of you want</label>
                                </div>
                                <input  type="text" name="serviceType" id="serviceType"  className="form__input schedulef" placeholder="Type of Services?"/>
                            </div>
                            <div className="col-12">
                                <div className="schedulet">
                                    <label>Schedule Date & Time</label>
                                </div>
                                <input type="datetime-local" id="meetingDate" name="meeting-start" value="2023-11-22" min="2020-01-01" max="2023-12-31" className="form__input schedulef" placeholder="Select Date and Time" />
                            </div>
                            <div className="col-12">
                                <div className="schedulet">
                                    <label>Select Mode of Communication</label>
                                </div>
                                <select placeholder="Select Mode of Communication" className='schedulem'>
                                    <option value=" ">Select--</option>
                                    <option value="option1">Video call</option>
                                    <option value="option1">Phone call</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <div className="schedulet">
                                    <label for="story">Tell us your story:</label>
                                </div>
                                <textarea id="story" name="story" rows="5" cols="50"  className='schedulem'>
                                Please enter your message here...
                                </textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="column-btn btncenter">
                                <button type="submit" name="sendRequest" id="sendRequest" class="btn2">Filter</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="columnbww schedule">
                <div className="mtop tpii">
                    <div className="column-btn">
                    <button type="submit" class="btn">Meet With Our Agent</button>
                    </div>
                    <div className="userpc">
                    <img className='userp' src="images/user.png" alt="User" />
                    </div>
                    <h4 className="pusri">Mr. Adekunle Benson</h4>
                    <p className="pusr">Abule Egba, Lagos Mainland</p>
                    <h4 className="pusri">Safety Tips</h4>
                    <p className="pusri">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet erat leo, vel commodo ipsum mollis ut. Nulla vitae ante nunc.</p>
                </div>
            </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Scheduleform;