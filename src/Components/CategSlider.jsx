import Slider from "react-slick";
import ProductCard from "./Common/ProductCard";
function CategSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  
  return (
    <div>
      
      <Slider {...settings}>
       {/* {
        items.map((item,index)=>{
return <div key={index} className="lg:flex lg:gap-2 lg:ml-3 lg:mr-2 ml-2 ">
    <img src={item.images} alt={item.title} className="w-20 h-20 relative lg:w-auto lg:h-auto w-fit h-22 "/>
    <div className="">
    <p><IoIosHeartEmpty size={25} className="absolute top-0 lg:ml-60 lg:mr-[1px] lg:mt-1 bg-amber-50 rounded-2xl p-1 font-bold ml-30 mt-1 "/></p>
    </div>
    <p className="font-semibold text-xl ml-2">{item.itemName}</p>
    <p className="text-red-700  text-xl ml-2">120$</p>
     <p></p>
</div>
        })
       } */}
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
        
      </Slider>
    </div>
  );
}

export default CategSlider;
