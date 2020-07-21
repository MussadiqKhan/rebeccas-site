import React from "react";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <img src={image1} alt="imageone" />
    </div>
  );
};

export default ImageGallery;
