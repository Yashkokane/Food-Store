import { Image } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img from "../assets/Image Scroll/Landing_image.jpg";
import img2 from "../assets/Image Scroll/flatlay-iron-skillet-with-meat-and-other-food.jpg";
import img3 from "../assets/Image Scroll/images.jpeg";
const ImageSlider = () => {
  /*const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];*/
  const properties = {
    duration: 2100,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
  };
  //const slideImages = [img, img2, img3];
  return (
    <>
      <Slide {...properties}>
        <div className="each-slide-effect" style={{ height: "100%" }}>
          <Image src={img} height="100%"></Image>
        </div>
        <div className="each-slide-effect" style={{ height: "100%" }}>
          <Image src={img2} height="100%"></Image>
        </div>
        <div className="each-slide-effect" style={{ height: "100%" }}>
          <Image src={img3} height="100%"></Image>
        </div>
      </Slide>
    </>
  );
};

export default ImageSlider;
