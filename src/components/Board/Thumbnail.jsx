import React from "react";
import "./Thumbnail.css";

const Thumbnail = ({ imageUrl, alt }) => {
  return <img className="thumbnail" src={imageUrl} alt={alt} />;
};

export default Thumbnail;
