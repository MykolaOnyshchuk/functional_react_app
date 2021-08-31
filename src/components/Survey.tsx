import React, {Component} from "react";
import "./Survey.css";
function Survey() {
    return (
        <form id="survey-form">

            <h1 id="title">Do you want to rent a car from our service center?</h1>
            <div id="description">If you want to get a car via the first method by taking it from the service
                center, please fill up this form and we will email you during in a day.
            </div>

            <div id="name-input">
                <label className="field-description" id="name-label" htmlFor="name">Name:</label>
                <input id="name" placeholder="Type in your name with the letters only" type="text" maxLength={32}
                       name="name" pattern="[A-Za-z]{1,32}" required></input>
            </div>

            <div id="surname-input">
                <label className="field-description" id="surname-label" htmlFor="surname">Surname:</label>
                <input id="surname" placeholder="Type in your surname with the letters only" type="text"
                       maxLength={32} name="surname" pattern="[A-Za-z]{1,32}" required></input>
            </div>

            <div id="email-input">
                <label className="field-description" id="email-label" htmlFor="email">Email:</label>
                <input id="email" placeholder="Type in your correct email" type="email" required></input>
            </div>
            <div id="age-input">
                <label className="field-description" id="number-label" htmlFor="number">Age:</label>
                <input id="number" placeholder="Type in your age in range from 18 to 100" type="number" size={6}
                       min="18" max="100"></input>
            </div>
            <label htmlFor="dropdown">Choose a car brand:</label>
            <select id="dropdown" name="dropdown">
                <option className="dropdown-elem" value="smart">Smart</option>
                <option className="dropdown-elem" value="renaut">Renault</option>
                <option className="dropdown-elem" value="skoda">Skoda</option>
                <option className="dropdown-elem" value="audi">Audi</option>
                <option className="dropdown-elem" value="bmw">BMW</option>
                <option className="dropdown-elem" value="ford">Ford</option>
            </select>

            <p>Please select gearbox type:</p>
            <div>
                <input type="radio" id="mechanic" name="gearbox-type" value="mechanic"></input>
                <label htmlFor="mechanic">Mechanic</label>

                <input type="radio" id="automatic" name="gearbox-type" value="automatic"></input>
                <label htmlFor="automatic">Automatic</label>
                <input type="radio" id="robotic" name="gearbox-type" value="robotic"></input>
                <label htmlFor="robotic">Robotic</label>
            </div>
            <p>Please select options your want to have:</p>
            <div>
                <input type="checkbox" id="ac" name="a/c" value="a/c"></input>
                <label htmlFor="ac">A/C</label>

                <input type="checkbox" id="cruise" name="cruise" value="cruise control"></input>
                <label htmlFor="cruise">Cruise control</label>

                <input type="checkbox" id="leather" name="leather" value="leather seats"></input>
                <label htmlFor="leather">Leather seats</label>

                <input type="checkbox" id="abs" name="abs" value="abs"></input>
                <label htmlFor="leather">ABS</label>

                <input type="checkbox" id="esp" name="esp" value="esp"></input>
                <label htmlFor="esp">ESP</label>
            </div>

            <p>Please select body types that are suitable for you:</p>
            <div>
                <input type="checkbox" id="sedan" name="sedan" value="sedan"></input>
                <label htmlFor="sedan">Sedan</label>

                <input type="checkbox" id="hatchback" name="hatchback" value="hatchback"></input>
                <label htmlFor="hatchback">Hatchback</label>

                <input type="checkbox" id="wagon" name="wagon" value="station wagon"></input>
                <label htmlFor="suv">Station wagon</label>

                <input type="checkbox" id="suv" name="suv" value="suv"></input>
                <label htmlFor="suv">SUV</label>
            </div>

            <p>Please select districts of service centers that are suitable for you:</p>
            <div id="service_loc">
                <input type="checkbox" id="service1" name="service1" value="service1"></input>
                <label htmlFor="service1">Shuliavka</label>

                <input type="checkbox" id="service2" name="service2" value="service2"></input>
                <label htmlFor="service2">Holosievo</label>

                <input type="checkbox" id="service3" name="service3" value="service3"></input>
                <label htmlFor="service3">Borshchahivka</label>

                <input type="checkbox" id="service4" name="service4" value="service4"></input>
                <label htmlFor="service4">Lypky</label>

                <input type="checkbox" id="service5" name="service5" value="service5"></input>
                <label htmlFor="service5">Vynohradar</label>

                <input type="checkbox" id="service6" name="service6" value="service6"></input>
                <label htmlFor="service6">Troieshchyna</label>
            </div>

            <textarea rows={20} cols={50} name="textarea"
                      placeholder="If you have any wishes or question type them here..."></textarea>
            <div id="button-wrap">
                <button type="submit" id="submit">Submit</button>
            </div>
        </form>
    );
}

export default Survey;
