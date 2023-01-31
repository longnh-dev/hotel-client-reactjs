import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import svg from "../images/about.svg"
import customersvg from "../images/customers/customer1.svg"

function About() {
  return (
    <div className="container aboutus">
      <div className="row">
        <div className="col-md-6 col-12 my-auto">
          <img
            src={svg}
            alt="about us"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-12 my-auto">
          <h1 className="display-4 text-center my-5">About Us </h1>
          <p className="lead text-justify text-center">
          Hue, the ancient capital of the Nguyen Dynasty, is the junction where northern and southern ecosystems meet. Hue boasts charming rivers, verdant hills, ancient pagodas and churches, and a rich history. Hue remains a must-see destination when visiting Vietnam, not only because of its cultural values and history, but also for its beautiful landscape and people. The majestic 16-floor Imperial Hotel Hue is nestled along the famous Perfume River, conveniently close to all the historical sites that this UNESCO World Cultural Heritage city has to offer. Imperial Hotel’s well-appointed rooms and suites come beautifully furnished with classic wooden floors and panoramic river and city views. The extensive hotel facilities comprise of the Hub Beer lounge and Restaurant, the OV Club Casino, Royal Spa, Yoshihara Restaurant, Imperial Restaurant, King's Panorama Rooftop Lounge at 16th Floor, Starlight Lounge - Highest Restaurant in town, four state-of-the-art meeting rooms, and much more. Come and explore the best of Hue has to offer.
          </p>
          <div className="text-center col-md-6 col-12 mx-auto">
            <Link
              to="/contact"
              className="btn btn-outline-dark btn-block btn-lg my-5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className="about_company">
        <h1 className="display-4">About Company</h1>
        <div className="pt-4">
          <p className="about_info">
          The rooms are designed in an elegant and delicate bright tone combining with windows or small balconies, where you can relax comfortably, enjoy a cup of tea or coffee, take a deep breath and contemplate a part of Hue's soul slowly floating on the street. With our dedicated staff and excellent service, we will certainly bring comfort and warmth to your holiday.
          </p>
        </div>
      </div>
      <div className="testimony">
        <h1 className="display-4 mb-4">What Our Clients says</h1>
        <div className="row mb-5">
          <div className="col-md-10 col-12 mx-auto">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="3"
                ></li>
              </ol>
              <div className="carousel-inner card border-0 shadow-lg p-4">
                <div className="carousel-item active text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={customersvg}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer1"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Dustin</h3>
                        <p>
                        We booked a room for my family to take part in the holiday. When we arrived in Hue, the hotel welcomed us very happily and friendly, especially the hotel is located right in the city center, breakfast was delicious. Thanks for the hotel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={customersvg}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer2"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Rose Alision</h3>
                        <p>
                        We book for 2 people, the hotel is right in the center of the city, the room is clean and nice, the price is very suitable for 2 people, breakfast is very affordable. If come back we will book here again.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={require("../images/customers/customer3.svg")}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer3"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Mixa Mila </h3>
                        <p>
                        The hotel location is quite good, located in the middle of Hue city. Prices are very reasonable. The staff are very enthusiastic and happy. Our breakfast was delicious. Very close to the tourist destinations in Hue just a few steps you have to go.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={require("../images/customers/customer4.svg")}
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer4"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Customer RTY</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur Praesent
                          commodo cursus magna, vel scelerisque nisl consectetur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <h1 className="display-4">Our Team</h1>
      </div>
      <div className="row mb-5">
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/TMgQMXoglsM/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Director</h5>
              <div className="card-text text-black-50">
                CEO <p className="float-right">5 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/sNut2MqSmds/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
                Manager <p className="float-right">5 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
                Manager <p className="float-right">8 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
