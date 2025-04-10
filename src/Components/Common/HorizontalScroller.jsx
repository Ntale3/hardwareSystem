import{ useRef } from 'react';

const HorizontalScroller = ({ children }) => {
  const scrollerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
//   display: flex;
//   overflow-x: auto;
//   scroll-behavior: smooth;
//   -webkit-overflow-scrolling: touch; /* For smooth scrolling on iOS */
//   width: 100%;
//   padding: 10px 0;
//   gap: 15px; /* Space 

  return (
    <div className="flex items-center relative w-[100%]">
      <button className="absolute left-[20px]" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="flex overflow-x-auto scroll-smooth " ref={scrollerRef}>
        {children}
      </div>
      <button className="absolute right-[10px]" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default HorizontalScroller;