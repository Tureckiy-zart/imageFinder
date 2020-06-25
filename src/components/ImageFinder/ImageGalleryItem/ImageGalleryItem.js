import React from "react";

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => (
  <li className="ImageGalleryItem">
    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
  </li>
);
