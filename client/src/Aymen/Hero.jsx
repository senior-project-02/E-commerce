import Slider from "./Slider.jsx";

function Hero() {
  return (
    <div style={{display:"flex" , flexDirection:"row"}}>
      <div style={{marginTop:"3%" , marginLeft:"8.4%"}} className=" flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start gap-[51px] inline-flex">
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
            Woman’s Fashion
          </div>
          <div className="w-6 h-6 pl-1.5 pr-[5.27px] pt-2 pb-[8.22px] origin-top-left -rotate-90 justify-center items-center flex"></div>
        </div>
        <div className="justify-start items-start gap-[81px] inline-flex">
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
            Men’s Fashion
          </div>
          <div className="w-6 h-6 pl-1.5 pr-[5.27px] pt-2 pb-[8.22px] origin-top-left -rotate-90 justify-center items-center flex"></div>
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Electronics
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Home &amp; Lifestyle
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Medicine
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Sports &amp; Outdoor
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Baby’s &amp; Toys
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Groceries &amp; Pets
        </div>
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">
          Health &amp; Beauty
        </div>
      </div>
<Slider/>
   </div>
  );
}
export default Hero

{/* <div className="w-px">
      <div id="indicators-carousel" className="relative w-full" data-carousel="static">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
</div> */}
{/* <div className="w-[892px] h-[344px] left-[413px] top-[182px] absolute bg-black">
   <img className="w-[496px] h-[352px] left-[396px] top-[16px] absolute" src="https://via.placeholder.com/496x352"/>
   <div className="left-[64px] top-[58px] absolute justify-start items-center gap-6 inline-flex">
      <img className="w-10 h-[49px]" src="https://via.placeholder.com/40x49"/>
      <div className="w-[126px] h-5 text-center text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">iPhone 14 Series</div>
   </div>
   <div className="w-[294px] left-[64px] top-[127px] absolute text-neutral-50 text-5xl font-semibold font-['Inter'] leading-[60px] tracking-widest">Up to 10% off Voucher</div>
   <div className="left-[67px] top-[269px] absolute justify-start items-center gap-2 inline-flex">
      <div className="flex-col justify-start items-start gap-1 inline-flex">
         <div className="text-center text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Shop Now</div>
         <div className="w-[81px] h-[0px] border border-neutral-50"></div>
      </div>
      <div className="w-6 h-6 pl-[3.50px] pr-1 py-[5px] justify-center items-center flex"></div>
   </div>
   <div className="left-[353px] top-[319px] absolute justify-start items-center gap-3 inline-flex">
      <div className="w-3 h-3 opacity-50 bg-white rounded-full"></div>
      <div className="w-3 h-3 opacity-50 bg-white rounded-full"></div>
      <div className="w-3.5 h-3.5 relative">
         <div className="w-2.5 h-2.5 left-[2px] top-[2px] absolute bg-red-500 rounded-full"></div>
         <div className="w-3.5 h-3.5 left-0 top-0 absolute rounded-full border-2 border-white"></div>
      </div>
      <div className="w-3 h-3 opacity-50 bg-white rounded-full"></div>
      <div className="w-3 h-3 opacity-50 bg-white rounded-full"></div>
   </div>
</div> */}