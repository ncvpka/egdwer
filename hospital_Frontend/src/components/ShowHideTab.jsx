import React from "react";
import { useState } from "react";
import "../assets/Styles/style.css";

function ShowHideTab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container_service">
      <div className="flex">
        <div>
          <ul>
            <li className="top_service whitespace-nowrap">
              <a
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Health care
              </a>
            </li>
            <li className="top_service whitespace-nowrap">
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Qualified Doctors
              </button>
            </li>
            <li className="top_service whitespace-nowrap">
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Emergency Unit
              </button>
            </li>
            <li className="top_service whitespace-nowrap">
              <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
              >
                Eye Care Solutions
              </button>
            </li>
            <li className="top_service whitespace-nowrap">
              <button
                className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(5)}
              >
                Dental Surgery
              </button>
            </li>
            <li className="top_service whitespace-nowrap">
              <button
                className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(6)}
              >
                Pregnancy and Births
              </button>
            </li>
            <li className="top_service whitespace-nowrap">
              <button
                className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(7)}
              >
                Therapiya
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <div class="content-tab color-white">
            <div class="service-tab-one mt-sm-30">
              <div class="row">
                <div class="col-md-11 col-md-offset-1 mt-sm-30 ">
                  <div
                    className={
                      toggleState === 1 ? "content  active-content" : "content"
                    }
                  >
                    <div className="img_tittle grid justify-items-centernpm sa">
                      <img
                        src="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/service/health-care.jpg"
                        alt=""
                      ></img>
                    </div>
                    <div class="service__content_box">
                      <h4>Health Care</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make...
                      </p>
                      <a
                        className="btn_our_service btn-md btn-color-line xs-hidden mt-15"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-tab-two mt-sm-30">
              <div class="row">
                <div class="col-md-11 col-md-offset-1 mt-sm-30 ">
                  <div
                    className={
                      toggleState === 2 ? "content  active-content" : "content"
                    }
                  >
                    <div className="img_tittle grid justify-items-centernpm sa">
                      <img
                        src="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/service/qualified-doctors.jpg"
                        alt=""
                      ></img>
                    </div>
                    <div class="service__content_box">
                      <h4>Qualified Doctor</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make...
                      </p>
                      <a
                        class="btn_our_service btn-md btn-color-line xs-hidden mt-15"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-tab-three mt-sm-30">
              <div class="row">
                <div class="col-md-11 col-md-offset-1 mt-sm-30 ">
                  <div
                    className={
                      toggleState === 3 ? "content  active-content" : "content"
                    }
                  >
                    <div className="img_tittle grid justify-items-centernpm sa">
                      <img
                        src="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/service/emergency-unit.jpg"
                        alt=""
                      ></img>
                    </div>
                    <div class="service__content_box">
                      <h4>Emergency Unit</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make...
                      </p>
                      <a
                        class="btn_our_service btn-md btn-color-line xs-hidden mt-15"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-tab-four mt-sm-30">
              <div class="row">
                <div class="col-md-11 col-md-offset-1 mt-sm-30 ">
                  <div
                    className={
                      toggleState === 4 ? "content  active-content" : "content"
                    }
                  >
                    <div className="img_tittle grid justify-items-centernpm sa">
                      <img
                        src="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/service/eye-care-solutions.jpg"
                        alt=""
                      ></img>
                    </div>
                    <div class="service__content_box">
                      <h4>Eye care Solutions</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make...
                      </p>
                      <a
                        class="btn_our_service btn-md btn-color-line xs-hidden mt-15"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-tab-five mt-sm-30">
              <div class="row">
                <div class="col-md-11 col-md-offset-1 mt-sm-30 ">
                  <div
                    className={
                      toggleState === 5 ? "content  active-content" : "content"
                    }
                  >
                    <div className="img_tittle grid justify-items-centernpm sa">
                      <img
                        src="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/service/dental-surgery.jpg"
                        alt=""
                      ></img>
                    </div>
                    <div class="service__content_box">
                      <h4>Dental Surgery</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make...
                      </p>
                      <a
                        class="btn_our_service btn-md btn-color-line xs-hidden mt-15"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-tab-six mt-sm-30">
              <div class="row">
                <div class="col-md-11 col-md-offset-1 mt-sm-30 ">
                  <div
                    className={
                      toggleState === 6 ? "content  active-content" : "content"
                    }
                  >
                    <div className="img_tittle grid justify-items-centernpm sa">
                      <img
                        src="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/service/pregnancy-and-births.jpg"
                        alt=""
                      ></img>
                    </div>
                    <div class="service__content_box">
                      <h4>Pregnancy and Birth</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make...
                      </p>
                      <a
                        class="btn_our_service btn-md btn-color-line xs-hidden mt-15"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-tab-seven mt-sm-30">
              <div class="row">
                <div class="col-md-11 col-md-offset-1 mt-sm-30 ">
                  <div
                    className={
                      toggleState === 7 ? "content  active-content" : "content"
                    }
                  >
                    <div className="img_tittle grid justify-items-centernpm sa">
                      <img
                        src="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/service/therapiya.jpg"
                        alt=""
                      ></img>
                    </div>
                    <div class="service__content_box">
                      <h4>Therapiya</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make...
                      </p>
                      <a
                        class="btn_our_service btn-md btn-color-line xs-hidden mt-15"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowHideTab;
