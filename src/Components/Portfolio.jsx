/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/side-pic.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Blog Getting started with XML🎉",
    description: "Beginners guide to get started with XML for Android.",
    url: "https://medium.com/@khuaga2003/getting-started-with-xml-for-android-developement-ab66ee405088",
  },
  {
    title: "Coffee Ordering App",
    description:
      "A fronted layout that helps user to select a fixed amount of coffee and tell the total cost of it.",
    url: "https://github.com/KhushiAgarwal15/frontend-appDev-project",
  },
  {
    title: "Score Point Game",
    description:
      "It is a frontend app development project, which allows 2 players to play basketball game and score points just by some taps of buttons and then allows the player to reset their score and play again.",
    url: "https://github.com/KhushiAgarwal15/frontend-appDev-game",
  },
  {
    title: "Unveiling safeareaview enhancing react native app layouts",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://khushiblogs.hashnode.dev/unveiling-safeareaview-enhancing-react-native-app-layouts",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
