import React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ data, onGetLargeImageUrl }) => {
  // console.log('onModalOpen', onModalOpen)
  // const  {data:{items}} = data
  // console.log('data', data[0].id)
  return (
    <ul className="ImageGallery">
      {data.map((item) => (
        <ImageGalleryItem
          key={item.id}
          {...item}
          onGetLargeImageUrl={onGetLargeImageUrl}
        />
        // <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ImageGallery;
