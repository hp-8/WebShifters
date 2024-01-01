import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import "../../../assets/css/style.css";
import heroIllustrator from "../../../assets/img/hero_illustrator.svg";
import logoSekolah from "../../../assets/img/png-elementary-school-primary-education-high-school-school-class-logo-high-school-elementary-school-clipart.png";
import ilustratorFront from "../../../assets/img/IllustratorFront.png";
import registerIlustrator from "../../../assets/img/IllustratorRegister.svg";
import ilustratorSeleksi from "../../../assets/img/IlustratorSeleksi.svg";
import ilustratorBiodata from "../../../assets/img/IllustratorBiodata.svg";
import ilustratorPengumuman from "../../../assets/img/IllustratorPengumuman.png";
import Button from "../../../components/button.js";
import Card from "../../../components/card";
import Register from "../register";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFpaGFubXVoYW1tYWQiLCJhIjoiY2s4c2JsNnFxMGwzYjNocTVmanB6enZxaCJ9.o8UUzrOGDYjKQ7tvF5Kxtw";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 72.5713621,
      lat: 23.022505,
      zoom: 3,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/raihanmuhammad/ckb5788p80uet1ip9iha7sv2e",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    this.map = map; // Store the map instance in the component's state

    map.on("load", () => {
      this.addMarker();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if the map coordinates have changed
    if (prevState.lng !== this.state.lng || prevState.lat !== this.state.lat) {
      this.updateMarker();
    }
  }

  addMarker() {
    this.marker = new mapboxgl.Marker().setLngLat([this.state.lng, this.state.lat]).addTo(this.map);
  }

  updateMarker() {
    this.marker.setLngLat([this.state.lng, this.state.lat]);
  }
  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/register" component={Register} />
        </Router>
        <header>
          <nav>
            <div className="logo">
              <img src={logoSekolah} alt="logo" />
            </div>
            <div className="menu-nav">
              <ul className="menu-list">
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Home
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#services" className="menu-link">
                    Services
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#About-us" className="menu-link">
                    About
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#contact" className="menu-link">
                    Contact Us
                  </a>
                </li> 
              </ul>
              <Link to="/register">
                <Button title="Register" link="/register" />
              </Link>
            </div>
          </nav>
        </header>

        <div className="container">
          <section id="header">
            <div className="title-main-header">
              <h3 className="text-school">Welcome to Our Website</h3>
              <div className="divider"></div>
              <p className="text-description">
                We are a new web solutions company that offers you varied range of web solutions for your company and bring out the best of digital world for your growth.
                We feel that it should be affordable for everyone to have the bliss of an online presence in today's world and it is a necessaity for almost all businesses to have an online presence. 
              </p>
              <Button title="Contact Us" />
            </div>
            <div className="img-header">
              <img
                src={heroIllustrator}
                alt="Illustrator"
                className="img-header"
              />
            </div>
          </section>
          <section id="services">
            <div className="title-header">
              <h4 className="text-title">Services</h4>
              <span>
                These are some of the servies that we provide to our customers and businesses to upgrade themselves.
              </span>
            </div>
            <div className="content">
              <Card
                title="Website Development"
                description="A website is must for each business today and thus we offer a very affordable and yet the best in the market websites to our customers according to their needs."
                image={registerIlustrator}
                alt="Web Dev"
              />
              <Card
                title="Data Anaytics"
                description="We provide the businesses with our extremely trained professionals to analyze their business and also guide them towards the right path."
                image={ilustratorSeleksi}
                alt="Data Analytics"
              />

              <Card
                title="Digital Marketing"
                description="We offer exceptionally good digital marketing for people wanting to spread out their businesses and gain more customers in long run."
                image={ilustratorPengumuman}
                alt="Marketing"
              />
              <Card
                title="Content Writing"
                description="A good content creates the best engagement for the users and thus we also provide with our extremely skilled content writers to your service."
                image={ilustratorBiodata}
                alt="Writing"
              />
            </div>
          </section>
          <section id="cta-website">
            <div className="left-side">
              <h4 className="text-attention">
                Book an appointment with Today to know more about your required services !
              </h4>
            </div>
            <div className="right-side">
              <Button title="Book Now" />
            </div>
          </section>
          <section id="About-us">
            <div className="title-header">
              <h4 className="text-title">About Us</h4>
              <span>We are the new Digital Servies providers</span>
            </div>
          </section>
          <section className="about">
            <figure>
              <img src={ilustratorFront} alt="About Ilustrator" />
            </figure>
            <article>
              <p>
              At WebShifters, we are driven by a relentless passion for innovation and excellence, committed to delivering cutting-edge digital solutions that empower businesses and individuals alike. Our mission is to transform the way you engage with technology, enabling you to thrive in the dynamic and fast-paced digital landscape.
              </p>
              <p>
              Whether you're a startup looking to make your mark, a growing enterprise seeking to expand its digital presence, or an individual with a revolutionary idea, WebShifters is here to help you navigate the digital landscape with confidence.
              </p>
            </article>
          </section>
          <section>
            <div className="title-header">
              <h4 className="text-title">Where are we Located ?</h4>
              <span className="text-location-span">
                Visit us here.
              </span>
            </div>
            <div className="mapContainer">
              <div ref={(el) => (this.mapContainer = el)} id="map" />
            </div>
          </section>
          <section className="contact" id="contact">
            <div className="contact-us">
              <p className="judul-contact">Contact Us</p>
              <p className="text-description">
              Contact us today to explore the endless possibilities that await your digital future. Let's create something exceptional together!
              </p>

              <p className="nomer-text">WhatsApp : 989898899 </p>
              <p className="nomer-text">Telp : 8787878787 </p>
              <p className="nomer-text">Email : info@WebShifters.in </p>
            </div>
          </section>
          <footer>
            <p>&copy; 2023 WebShifters Co.</p>
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default Home;
