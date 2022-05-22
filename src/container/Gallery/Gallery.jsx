import React, { useRef } from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";
// import ImagesGallery from "./ImagesGallery";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollImages = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollImages.current.scrollLeft -= 300;
    } else {
      scrollImages.current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery app__bg">
      <div className="app__gallery-wrapper ">
        <div className="app__wrapper_info gallery__content">
          <SubHeading title="Insagram" />
          <h1 className="headtext__cormorant">Photo Gallery</h1>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <button className="custom__button" type="button">
            View More
          </button>
        </div>

        <div className="gallery__images">
          <div className="images__container" ref={scrollImages}>
            {galleryImages.map((img, index) => (
              <div className="images__container-wrapper" key={index}>
                <img src={img} alt="img" />

                <div className="image-overlay flex__center">
                  <InstagramIcon
                    className="instaIcon"
                    style={{ color: "#fff" }}
                    fontSize="large"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="gallery__images-arrows">
            <div className="left_icon" onClick={() => scroll("left")}>
              <ArrowLeftIcon className="Icon" />
            </div>
            <div className="right_icon" onClick={() => scroll("right")}>
              <ArrowRightIcon className="Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
