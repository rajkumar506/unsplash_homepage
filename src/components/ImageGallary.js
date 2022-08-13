import React from "react";
import styles from "./Images.module.scss";
export const Images = ({ data }) => {
  return (
    <div className={`${styles["images-aligenment"]}`}>
      {data &&
        data.map((image, index) => (
          <div key={index} className={`${styles["card"]}`}>
            <img src={image.urls.small} alt="Image" />
          </div>
        ))}
    </div>
  );
};
