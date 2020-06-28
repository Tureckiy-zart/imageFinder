import React from "react";

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  onGetLargeImageUrl,
}) => (
  <li className="ImageGalleryItem">
    <img
      src={webformatURL}
      alt={tags}
      onClick={() => onGetLargeImageUrl(largeImageURL)}
      className="ImageGalleryItem-image"
    />
  </li>
);
