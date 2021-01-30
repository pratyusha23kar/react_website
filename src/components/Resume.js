import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        {/* <div
          className={"col-12 col-sm-12 col-md-12 col-lg-6 " + this.props.tada}
        >
          <div className="progress mb-3">
            <div
              className="progress-bar fill-80-bar"
              role="progressbar"
              style={{ width: 80 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              HTML5
            </div>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar fill-80-bar"
              role="progressbar"
              style={{ width: 80 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              CSS3
            </div>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar fill-90-bar"
              role="progressbar"
              style={{ width: 90 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Javascript
            </div>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar fill-60-bar"
              role="progressbar"
              style={{ width: 60 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              PHP
            </div>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar fill-80-bar"
              role="progressbar"
              style={{ width: 80 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              ReactJS
            </div>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar fill-60-bar"
              role="progressbar"
              style={{ width: 60 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              NodeJs
            </div>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar fill-60-bar"
              role="progressbar"
              style={{ width: 60 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              SASS
            </div>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar fill-80-bar"
              role="progressbar"
              style={{ width: 80 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              VanillaJS
            </div>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar fill-60-bar"
              role="progressbar"
              style={{ width: 60 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              JQuery
            </div>
          </div>
        </div> */}

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        />
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
