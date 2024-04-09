import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom';
import "./style.css";
import "./animation.css";
import runAnimations, { allLinks, allFunctions } from "./scripts";
const App = () => {
  useEffect(() => {
    runAnimations();
  }, []);
  return (
    <div className="parent-div">
      <div className="workplace-1-569778 pos-abs" id="id-35">
        <div className="testimonial1" id="id-512"></div>
        <div className="testimonial2" id="id-513"></div>
        <div className="testimonial3" id="id-514"></div>
        <div className="imageframe" id="id-511">
          <div
            className="nodeBg-511 pos-abs image-div bg-no-repeat  bg-crop"
            id="id-bg-511"
          >
            {" "}
          </div>
        </div>
        <div className="testimonials header" id="id-9629">
        <div className="text">Testimonials:</div>
        </div>
        <div className="how-can-we-comb-1-77350 pos-abs" id="id-9628">
          <div className="text">How can we combat this bias?</div>
        </div>
        <div className="bias manifest workplace header" id="id-1417">
          <div className="text">How does bias manifest in the workplace?</div>
        </div>
        <div className="bias manifest workplace body" id="id-9527">
          <span className="bias manifest workplace body">
            {
              "Bias can manifest in the workplace in a few different forms: gender bias, racial/affinity bias, beauty bias, and name bias. This can appear in the form of a company’s hiring manager unconsciously allowing his bias to influence his hiring decisions which may result in a less diverse workplace (example: a male hiring manager ends up choosing the male candidate instead of the female candidate despite both having comparable credentials). It can also appear when discussing who deserves a raise or a promotion. Women are often seen as less capable than their male counterparts, resulting in them being less likely to get a raise or a promotion. Additionally, beauty bias can play a part in both gender and racial bias since some employees may be favored more than others simply for being good looking or conventionally attractive. This type of favoritism can create resentment and further perpetuate inequalities that already exist. Name bias manifests when people have preconceived notions of another employee from their name alone (biases about the person’s perceived gender, race, ethnicity, and nationality). Studies show that people with foreign sounding names are less likely to be called back for an interview in the hiring process compared to people with a more “American” sounding name. Furthermore, people are likely to subconsciously infer a person’s race, ethnicity, nationality, and gender from their name which, if unchecked, can make the biases worse and can go from unconscious to conscious biases. "
            }
            &nbsp;{""} <br /> &nbsp;{""} <br /> &nbsp;{""} <br />{" "}
          </span>
        </div>
        <div className="combat-bias">
          <div className = "combat-bias-text">
            <ul style= 'disc'>
              <li>Blocking out the names and gender of applicants during the hiring process and instead anonymize them by giving them a number attached to their application materials</li>
            </ul>
          </div>
        </div>
        <div className="testimonial1" id="id-13828">
          <div className="testimonial1">
              "At my job, I have repeatedly expressed that I wanted to work the cash register since I’m friendly, good with people, and fast at learning technology. When I was hired, I said I wanted to work the cash register but was told I would need more experience on the job before they let me do it. They let a less experienced white coworker of mine work the cash register”
          </div>
        </div>
        <div className="testimonial2" id="id-13831">
          <div className="testimonial2">
            “My supervisor (white woman) kept suggesting I listen to a particular song from a soundtrack, saying “I think you’ll really like it”. When I got home and played it, it was a song about white women lusting after black boys”.
          </div>
        </div>
        <div className="testimonial3" id="id-13832">
          <div className="text">
            “It is sickening... how Villanova Dining Services minority staff are being treated very unfairly. TILL THIS DAY. I know a guy who worked his ass off there for so many years and wouldn’t let him advance, POC in the dining service department NEED YOUR HELP. They don’t have a voice because of fear of termination”
          </div>
        </div>
        <div className="header" id="id-1738">
          <div className="header text" id="id-1738">
            <div className="classroom" id="id-I1738_106">
              <div className = "text">Classroom</div>
              <Link className="button">Classroom</Link>
            </div>
            <div className="social-life-1-49632 pos-abs" id="id-I1738_107">
              <span className="social-life-1-49632-0">{"Social Life"}</span>
            </div>
            <div className="resources-1-401362 pos-abs" id="id-I1738_108">
              <span className="resources-1-401362-0">{"Resources"}</span>
            </div>
            <div className="workplace-1-73187 pos-abs" id="id-I1738_104">
              <span className="workplace-1-73187-0">{"Workplace"}</span>
            </div>
            <div className="bias-awareness-1-732375 pos-abs" id="id-I1738_1010">
              <span className="bias-awareness-1-732375-0">
                {"Bias Awareness"}
              </span>
            </div>
            <div className="header1-0-539354 pos-abs" id="id-1738"></div>
            <div className="rectangle-1-1-167770 pos-abs" id="id-I1738_54">
              <div
                className="nodeBg-I1738_54 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                id="id-bg-I1738_54"
              ></div>
            </div>
            <div className="rectangle-41-0-254184 pos-abs" id="id-511">
              <div
                className="nodeBg-511 pos-abs image-div bg-no-repeat  bg-crop"
                id="id-bg-511"
              >
                {" "}
              </div>
            </div>
            <div className="ellipse-21-0-256091 pos-abs" id="id-513"></div>
            <div className="ellipse-31-0-503904 pos-abs" id="id-514"></div>
            <div className="testimonials1-0-153657 pos-abs" id="id-9629">
              <span className="testimonials1-0-153657-0">
                {"Testimonials:"}
              </span>
            </div>
            <div className="how-can-we-comb-0-105370 pos-abs" id="id-9628">
              <span className="how-can-we-comb-0-105370-0">
                {"How can we combat this bias?"}
              </span>
            </div>
            <div className="how-does-bias-m-0-640068 pos-abs" id="id-1417">
              <span className="how-does-bias-m-0-640068-0">
                {"How does bias manifest in the workplace?"}
              </span>
            </div>
           
            <div className="ellipse-11-0-468951 pos-abs" id="id-512"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
