// DONE
function Product(){
    return(
      <div style={{ display: "flex" , marginTop:"10%" , justifyContent:"center" }}>
      <div className="w-[1170px] h-[500px] relative bg-black">
      <div className="w-[504px] h-[500px] left-[552px] top-0 absolute opacity-30 bg-zinc-300 rounded-full blur-[200px]" />
      <div className="w-[443px] left-[56px] top-[85px] absolute text-neutral-50 text-5xl font-semibold font-['Inter'] leading-[60px] tracking-widest">Enhance Your Music Experience</div>
      <div className="left-[56px] top-[300px] absolute justify-start items-start gap-6 inline-flex">
        <div className="w-[62px] h-[62px] relative">
          <div className="w-[62px] h-[62px] left-0 top-0 absolute bg-white rounded-full" />
          <div className="left-[15px] top-[14px] absolute flex-col justify-start items-center inline-flex">
            <div className="text-black text-base font-semibold font-['Poppins'] leading-tight">23</div>
            <div className="w-8 text-black text-[11px] font-normal font-['Poppins'] leading-[18px]">Hours</div>
          </div>
        </div>
        <div className="w-[62px] h-[62px] relative">
          <div className="w-[62px] h-[62px] left-0 top-0 absolute bg-white rounded-full" />
          <div className="left-[17px] top-[14px] absolute flex-col justify-start items-center inline-flex">
            <div className="text-black text-base font-semibold font-['Poppins'] leading-tight">05</div>
            <div className="w-7 text-black text-[11px] font-normal font-['Poppins'] leading-[18px]">Days</div>
          </div>
        </div>
        <div className="w-[62px] h-[62px] relative">
          <div className="w-[62px] h-[62px] left-0 top-0 absolute bg-white rounded-full" />
          <div className="h-[34px] left-[10px] top-[14px] absolute flex-col justify-start items-center inline-flex">
            <div className="text-black text-base font-semibold font-['Poppins'] leading-tight">59</div>
            <div className="w-[43px] text-black text-[11px] font-normal font-['Poppins'] leading-[18px]">Minutes</div>
          </div>
        </div>
        <div className="w-[62px] h-[62px] relative">
          <div className="w-[62px] h-[62px] left-0 top-0 absolute bg-white rounded-full" />
          <div className="h-[34px] left-[7px] top-[14px] absolute flex-col justify-start items-center inline-flex">
            <div className="text-black text-base font-semibold font-['Poppins'] leading-tight">35</div>
            <div className="w-12 text-black text-[11px] font-normal font-['Poppins'] leading-[18px]">Seconds</div>
          </div>
        </div>
      </div>
      <div className="px-12 py-4 left-[56px] top-[400px] absolute bg-green-500 rounded justify-center items-center gap-2.5 inline-flex">
        <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Buy Now!</div>
      </div>
      <div className="left-[56px] top-[45px] absolute text-green-500 text-base font-semibold font-['Poppins'] leading-tight">Categories</div>
      <div className="w-[600px] h-[420px] px-4 py-[45px] left-[526px] top-[37px] absolute justify-center items-center inline-flex">
        <img className="w-[535px] h-[535px] origin-top-left " src="https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwda6e3b95/JBL_CHARGE5_WIFI_HERO%20_LEFT_37890_x3.png?sw=535&sh=535" />
      </div>
    </div>
    </div>
    )
}
export default Product;