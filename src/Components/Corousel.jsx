import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './Common/ProductCard';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  }
  
  
  
  const Corousel = () => {
    return (
        <Carousel partialVisible={true} responsive={responsive}>
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
           <ProductCard/> 
       
       </Carousel>
      )
    
  }
  
  export default Corousel
  