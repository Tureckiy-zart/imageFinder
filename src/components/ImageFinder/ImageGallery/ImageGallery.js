import React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ data }) => {
  console.log("data", data);
  return (
    <ul className="ImageGallery">
      {/* <p>1111</p> */}
      {data.map((item) => (
        <ImageGalleryItem key={item.id} {...item} />
        // <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ImageGallery;
