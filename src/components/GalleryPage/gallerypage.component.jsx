import React from "react";
import "./gallerypage.component.css";
import { galleryData } from "./galleryData";
function GalleryPage() {
  const GalleryImages = () => {
    return galleryData.map((data, index) => {
      return (
        <div key={index} className="image_container-gallery">
          <img src={data.picture} alt="gallery-img" />
          <div className="image-description_gallery">
            <p>{data.description}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="gallery">
      <GalleryImages />
    </div>
  );
}

export default GalleryPage;
