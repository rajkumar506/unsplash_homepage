import React, { useState, useEffect, useRef } from "react";
import Styles from "./Viewport.module.scss";
import { Images } from "./ImageGallary";
import { Header } from "./Header";
import { fetchImages } from "../services/fecthImages";
export const Viewport = () => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);
  const [headerSearchBarValue, setHeaderSearchBarValue] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    let callFetchImages = async () => {
      let response = await fetchImages(headerSearchBarValue, page);
      if (response && response.results) {
        // it will not show infinite scroll for search photos
        setResult([...response.results]);
      } else if (response) {
        setResult([...result, ...response]);
      }
    };

    callFetchImages();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 300
      ) {
        let returnedFun = throtlling(handleSetPage, 2000);
        returnedFun();
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (
          window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 300
        ) {
          let returnedFun = throtlling(handleSetPage, 2000);
          returnedFun();
        }
      });
    };
  }, [document.documentElement.scrollTop]);

  const throtlling = (fun, delay) => {
    let flag = true;
    return () => {
      if (flag) {
        fun();
        flag = false;
        setTimeout(() => {
          flag = true;
        }, delay);
      }
    };
  };

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSetPage = () => {
    setPage(page + 1);
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setPage(page + 1);
      setHeaderSearchBarValue(searchValue);
      setSearchValue("");
    }
  };
  return (
    <div>
      <Header
        headerSearchBarValue={headerSearchBarValue}
        setHeaderSearchBarValue={setHeaderSearchBarValue}
      />
      <div className={`${Styles["image-container"]}`}>
        <div className={`${Styles["centrel-search-text-container"]}`}>
          <div className={`${Styles["unsplash-text"]}`}>Unspalsh</div>
          <p className={`${Styles["text-between-unsplash-and-search"]}`}>
            The internet’s source of freely-usable images.
            <br />
            Powered by creators everywhere.
          </p>
          <input
            className={`${Styles["search-box"]}`}
            type="search"
            value={searchValue}
            placeholder="Search photos here"
            onKeyDown={(event) => handleKeyDown(event)}
            onChange={(event) => handleSearchValue(event)}
          ></input>
        </div>
      </div>
      {result ? <Images data={result} /> : null}
    </div>
  );
};
