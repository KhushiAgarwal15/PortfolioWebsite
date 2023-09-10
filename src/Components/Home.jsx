/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Background.jpg";

const imageAltText = "wallpaper";

const Home = ({ name, title }) => (
  <section id="home" className="min-height">
    <img className="Background" src={image} alt="" />
    <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
      <h1 className="name" style={{ marginTop: "30px" }}>
        {name}
      </h1>
      <h2 className="title" style={{ marginTop: "10px" }}>
        {title}
      </h2>
    </div>
    <div style={{ position: "absolute", bottom: "1rem", left: "50%" }}>
      <img src={arrowSvg} style={{ height: "3srem", width: "3rem" }} alt={imageAltText} />
    </div>
  </section>
);

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
