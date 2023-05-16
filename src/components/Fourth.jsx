import React from "react";
import "../App.css";
import t1 from "../images/trust1.png";
import t2 from "../images/trust2.png";
import t3 from "../images/trust3.png";
import simple from "../images/phone.png";
const Fourth = () => {
  return (
    <>
      <div className="fourth">
        <p className="trust">Why Trust Us ?</p>
        <div className="container">
          <div className="row">
            <div className="row bg-light border rounded-5 text-center pb-4 m-0">
              <p className="fs-4 mt-5 ms-3 text-start">
                Finding <span className="text-danger">Partners</span> For You
              </p>
              <div className="col-lg-4 col-sm-12">
                <img className="mt-5" src={t1} alt="trust1" />
                <h4 className="mt-4">100% Secured Profiles</h4>
                <p className="">
                  We give you guaranteed information <br />
                  security.
                </p>
              </div>
              <div className="col-lg-4 col-sm-12">
                <img className="mt-5" src={t2} alt="trust1" />
                <h4 className="mt-4">Manually Tested Accounts</h4>
                <p className="">
                  Each accounts are varified by our <br />
                  specialized team members.
                </p>
              </div>
              <div className="col-lg-4 col-sm-12">
                <img className="mt-5" src={t3} alt="trust1" />
                <h4 className="mt-4">Privacy & Security Control</h4>
                <p className="">
                  Highly measured means of
                  <br />
                  security provided.
                </p>
              </div>
            </div>
            <div className="row pb-5 pt-5 align-items-center">
              <div className="col-lg-8 col-sm-12">
                <p className="text-center fs-4 mb-4 fw-bold simple_guide">
                  Simple Guide
                </p>
                <div className="accordion ms-5" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How does OurLifePartner operates?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          The vast amount of verified registration gives each
                          profile <br /> more chances to find perfect match for
                          them{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Creation of true and geniune self profile
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>This is the second item's accordion body.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Selection of right membership package
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          This is the third item's accordion body.It is hidden
                          by default, until the collapse plugin adds the
                          appropriate classes that we use to style each element.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Search of your match in organized manner
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>This is the third item's accordion body.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Chances of finding geniune & perfect match
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>This is the third item's accordion body.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12  text-center ">
                <img className="simple mt-5" src={simple} alt="fourth_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fourth;
