import React, { useState, useEffect, useRef } from "react";
import Styles from "./Viewport.module.scss";
import { Images } from "./ImageGallary";
import { Header } from "./Header";
import { fetchImages } from "../services/fecthImages";
export const Viewport = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchedResult, setSearchedResult] = useState([]);
  const [count, setCount] = useState(1);
  const searchBar = useRef();
  console.log("my count", count);
  useEffect(() => {
    let callFetchImages = async () => {
      let response = await fetchImages(searchValue);
      console.log("my response", response);
      if (response && response.results) {
        setSearchedResult([...searchedResult, ...response.results]);
      } else if (response) {
        setSearchedResult([...searchedResult, ...response]);
      }
    };

    callFetchImages();
  }, [count]);

  const throttling = (fun, time) => {
    console.log("hello ia m running");
    return () => {
      let flag = true;
      if (flag) {
        fun();
        flag = false;
        setTimeout(() => {
          flag = true;
        }, time);
      }
    };
  };
  window.addEventListener(
    "scroll",
    throttling((event) => {
      //event.stopPropagation();
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        console.log("At the bottom!");
      }
    }),
    2000
  );

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <Header />
      <div className={`${Styles["image-container"]}`}>
        <div className={`${Styles["centrel-search-text-container"]}`}>
          <div className={`${Styles["unsplash-text"]}`}>Unspalsh</div>
          <p className={`${Styles["text-between-unsplash-and-search"]}`}>
            The internet’s source of freely-usable images.
            <br />
            Powered by creators everywhere.
          </p>
          <input
            ref={searchBar}
            className={`${Styles["search-box"]}`}
            type="search"
            value={searchValue}
            placeholder="Search photos here"
            onKeyDown={(event) => handleKeyDown(event)}
            onChange={(event) => handleSearchValue(event)}
          ></input>
        </div>
      </div>
      {searchedResult ? <Images data={searchedResult} /> : null}
    </div>
  );
};
