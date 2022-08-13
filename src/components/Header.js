import React, { useState, useRef, useEffect } from "react";
import notification from "./assets/notification.png";
import user from "./assets/user.png";
import menu from "./assets/menu.png";
import leftArrow from "./assets/leftArrow.svg";
import rightArrow from "./assets/rightArrow.svg";
import unsplash from "./assets/unsplash.png";
import Styles from "./Viewport.module.scss";
//import ScrollableTabs from "./Tabs";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";

export const Header = () => {
  const [count, setCount] = useState(1);
  const [arrow, setArrow] = useState(1);
  const scrollabletab = useRef();
  const leftSlide = useRef();
  const rightSlide = useRef();
  // useEffect(() => {
  //   if (
  //     scrollabletab.current.scrollLeft === scrollabletab.current.scrollLeftMax
  //   ) {
  //     leftSlide.current.style.visibility = "hidden";
  //   }
  //   if (scrollabletab.current.scrollLeft === 0) {
  //     rightSlide.current.style.visibility = "hidden";
  //   }
  // }, []);
  let list = [
    "Sports",
    "Fashion",
    "Film",
    "Fruits",
    "Apple",
    "Nature",
    "Food",
    "Health",
    "People",
    "Interiors",
    "Photography",
    "Travels",
    "Animals",
    "Spirituality",
    "Arts",
    "History",
    "Interiors",
    "Atheletics",
    "Mango",
    "Cricket",
    "India",
    "USA",
    "England",
    "Software",
    "Banana",
    "Arts",
    "History",
    "Interiors",
    "Atheletics",
    "Mango",
    "Cricket",
    "India",
    "USA",
    "England",
    "Software",
    "Banana",
    "Arts",
    "History",
    "Interiors",
    "Atheletics",
    "Mango",
    "Cricket",
    "India",
    "USA",
    "England",
    "Software",
    "Banana",
  ];

  const leftSlider = (event) => {
    console.log("my hello window", scrollabletab.current.scrollLeft);
    console.log("my scroll innerwidth", scrollabletab.current);
    console.log("my inner width is", window.innerWidth);
    if (event.target.alt === "leftArrow") {
      scrollabletab.current.scrollLeft += 300;
    } else if (event.target.alt === "rightArrow") {
      scrollabletab.current.scrollLeft -= 300;
    }
  };
  const handleMouseEnter = (event) => {
    event.target.style.color = "#000000";
  };
  const handleMouseOut = (event) => {
    event.target.style.color = "#767676";
  };
  return (
    <div className={`${Styles["header-and-nav-conatiner"]}`}>
      <header className={`${Styles["header"]}`}>
        <span>
          {" "}
          <img
            className={`${Styles["user-image"]}`}
            src={unsplash}
            alt="unsaplsh-logo"
          ></img>
        </span>
        <input
          className={`${Styles["header-search-box"]}`}
          type="search"
          placeholder="Search photos here"
        ></input>
        <div>
          <span
            onMouseOut={(event) => handleMouseOut(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
          >
            Advertise
          </span>
          <span
            onMouseOut={(event) => handleMouseOut(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
          >
            Blog
          </span>
          <button
            className={`${Styles["submit-button"]}`}
            onMouseOut={(event) => handleMouseOut(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
          >
            Submit a photo
          </button>

          <span>
            {" "}
            <img
              className={`${Styles["notification-image"]}`}
              src={notification}
              alt="notification-image"
            ></img>
          </span>
          <span>
            {" "}
            <img
              className={`${Styles["user-image"]}`}
              src={user}
              alt="user-image"
            ></img>
          </span>
          <span>
            {" "}
            <img
              className={`${Styles["notification-image"]}`}
              src={menu}
              alt="menu-image"
            ></img>
          </span>
        </div>
      </header>
      <nav className={`${Styles["nav-bar"]}`}>
        <div className={`${Styles["editorial-content"]}`}>
          <span
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseOut={(event) => handleMouseOut(event)}
          >
            Editorial
          </span>
          <span
            onMouseOut={(event) => handleMouseOut(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
          >
            Following
          </span>
        </div>
        <div className={`${Styles["scrollable-tab"]}`}>
          {" "}
          <span
            onClick={(event) => {
              leftSlider(event);
            }}
            ref={leftSlide}
            onMouseOut={(event) => handleMouseOut(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
          >
            <img
              className={`${Styles["arrow"]}`}
              src={leftArrow}
              alt="leftArrow"
            ></img>
          </span>
          <div className={`${Styles["tabs"]}`} ref={scrollabletab}>
            {list &&
              list.map((element, index) => (
                <span
                  onMouseEnter={(event) => handleMouseEnter(event)}
                  onMouseOut={(event) => handleMouseOut(event)}
                  key={index}
                  className={`${Styles["tab"]}`}
                >
                  {element}
                </span>
              ))}
          </div>
          <span
            ref={rightSlide}
            onClick={(event) => {
              leftSlider(event);
            }}
            onMouseOut={(event) => handleMouseOut(event)}
            onMouseEnter={(event) => handleMouseEnter(event)}
          >
            <img
              className={`${Styles["arrow"]}`}
              src={rightArrow}
              alt="rightArrow"
            ></img>
          </span>
        </div>
      </nav>
    </div>
  );
};
