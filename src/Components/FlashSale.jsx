import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./Common/ProductCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const FlashSale = () => {
  return (
    <Carousel
  responsive={responsive}
    >
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>


    </Carousel>
  )
}

export default FlashSale;