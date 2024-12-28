import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Geslaagden = () => {
  return (
    <div className="privacy-container centerContainer">
      <div className="pakket-theorie-card geslaagden-card bg-theorie-second-white">
        <div className="geslaagden-header"> 
          <h3 className="geslaagden-title">Onze Geslaagden</h3>
          <p className="geslaagden-subtitle">
            Swipe om meer foto's te zien van onze trotse geslaagden
          </p>
        </div>
        <div className="geslaagden-body">
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
            swipeable={true}
            showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="slider-arrow slider-prev"
                >
                  &#10094;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="slider-arrow slider-next"
                >
                  &#10095;
                </button>
              )
            }
          >
            <div className="slider-slide">
              <div className="image-container">
                <img
                  alt="Geslaagde student 1"
                  className="image"
                  src="./praktijk_geslaagd-1.webp"
                />
              </div>
            </div>
            <div className="slider-slide">
              <div className="image-container">
                <img
                  alt="Geslaagde student 2"
                  className="image"
                  src="./praktijk_geslaagd-2.webp"
                />
              </div>
            </div>
            <div className="slider-slide">
              <div className="image-container">
                <img
                  alt="Geslaagde student 3"
                  className="image"
                  src="./praktijk_geslaagd-3.webp"
                />
              </div>
            </div>
            <div className="slider-slide">
              <div className="image-container">
                <img
                  alt="Geslaagde student 4"
                  className="image"
                  src="./praktijk_geslaagd-4.webp"
                />
              </div>
            </div>
            <div className="slider-slide">
              <div className="image-container">
                <img
                  alt="Geslaagde student 5"
                  className="image"
                  src="./praktijk_geslaagd-5.webp"
                />
              </div>
            </div>
            <div className="slider-slide">
              <div className="image-container">
                <img
                  alt="Geslaagde student 6"
                  className="image"
                  src="./praktijk_geslaagd-6.webp"
                />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Geslaagden;
