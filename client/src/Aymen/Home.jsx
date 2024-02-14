import Nav from "./Nav"
import Footer from "./Footer"
import Hero from "./Hero"
import Over from "./Over"
function Home() {
  
  return (
<>
 <Nav/>
<Hero/>
<Over/>
<Footer/> 

</>

  
  )
}


export default Home
{/* <div className="w-full h-[5902px] relative bg-white">
<div className="w-[1170px] h-[0px] left-[1305px] top-[1335px] absolute origin-top-left rotate-180 opacity-30 border border-black"></div>
<div className="w-[1170px] h-[0px] left-[1305px] top-[1798px] absolute origin-top-left rotate-180 opacity-30 border border-black"></div>
<div className="w-96 h-[0px] left-[368px] top-[142px] absolute origin-top-left rotate-90 opacity-30 border border-black"></div>
<div className="left-[135px] top-[182px] absolute flex-col justify-start items-start gap-4 inline-flex">
  <div className="justify-start items-start gap-[51px] inline-flex">
    <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Woman’s Fashion</div>
    <div className="w-6 h-6 pl-1.5 pr-[5.27px] pt-2 pb-[8.22px] origin-top-left -rotate-90 justify-center items-center flex" />
  </div>
  <div className="justify-start items-start gap-[81px] inline-flex">
    <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Men’s Fashion</div>
    <div className="w-6 h-6 pl-1.5 pr-[5.27px] pt-2 pb-[8.22px] origin-top-left -rotate-90 justify-center items-center flex" />
  </div>
  <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Electronics</div>
  <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Home & Lifestyle</div>
  <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Medicine</div>
  <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Sports & Outdoor</div>
  <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Baby’s & Toys</div>
  <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Groceries & Pets</div>
  <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Health & Beauty</div>
</div>
<div className="w-[892px] h-[344px] left-[413px] top-[182px] absolute bg-black">
  <img className="w-[496px] h-[352px] left-[396px] top-[16px] absolute" src="https://via.placeholder.com/496x352" />
  <div className="left-[64px] top-[58px] absolute justify-start items-center gap-6 inline-flex">
    <img className="w-10 h-[49px]" src="https://via.placeholder.com/40x49" />
    <div className="w-[126px] h-5 text-center text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">iPhone 14 Series</div>
  </div>
  <div className="w-[294px] left-[64px] top-[127px] absolute text-neutral-50 text-5xl font-semibold font-['Inter'] leading-[60px] tracking-widest">Up to 10% off Voucher</div>
  <div className="left-[67px] top-[269px] absolute justify-start items-center gap-2 inline-flex">
    <div className="flex-col justify-start items-start gap-1 inline-flex">
      <div className="text-center text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Shop Now</div>
      <div className="w-[81px] h-[0px] border border-neutral-50"></div>
    </div>
    <div className="w-6 h-6 pl-[3.50px] pr-1 py-[5px] justify-center items-center flex" />
  </div>
  <div className="left-[353px] top-[319px] absolute justify-start items-center gap-3 inline-flex">
    <div className="w-3 h-3 opacity-50 bg-white rounded-full" />
    <div className="w-3 h-3 opacity-50 bg-white rounded-full" />
    <div className="w-3.5 h-3.5 relative">
      <div className="w-2.5 h-2.5 left-[2px] top-[2px] absolute bg-red-500 rounded-full" />
      <div className="w-3.5 h-3.5 left-0 top-0 absolute rounded-full border-2 border-white" />
    </div>
    <div className="w-3 h-3 opacity-50 bg-white rounded-full" />
    <div className="w-3 h-3 opacity-50 bg-white rounded-full" />
  </div>
</div>
<div className="px-12 py-4 left-[603px] top-[1219px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
  <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">View All Products</div>
</div>
<div className="w-[1170px] h-[500px] left-[135px] top-[2526px] absolute bg-black">
  <div className="w-[504px] h-[500px] left-[552px] top-0 absolute opacity-30 bg-zinc-300 rounded-full blur-[200px]" />
  <div className="w-[443px] left-[56px] top-[121px] absolute text-neutral-50 text-5xl font-semibold font-['Inter'] leading-[60px] tracking-widest">Enhance Your Music Experience</div>
  <div className="left-[56px] top-[273px] absolute justify-start items-start gap-6 inline-flex">
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
  <div className="px-12 py-4 left-[56px] top-[375px] absolute bg-green-500 rounded justify-center items-center gap-2.5 inline-flex">
    <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Buy Now!</div>
  </div>
  <div className="left-[56px] top-[69px] absolute text-green-500 text-base font-semibold font-['Poppins'] leading-tight">Categories</div>
  <div className="w-[600px] h-[420px] px-4 py-[45px] left-[526px] top-[37px] absolute justify-center items-center inline-flex">
    <img className="w-[568px] h-[330px] origin-top-left -rotate-180" src="https://via.placeholder.com/568x330" />
  </div>
</div>
<div className="left-[135px] top-[666px] absolute flex-col justify-start items-start gap-10 inline-flex">
  <div className="justify-start items-end gap-[470px] inline-flex">
    <div className="justify-start items-end gap-[87px] flex">
      <div className="h-[103px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="justify-start items-center gap-4 inline-flex">
          <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
            <div className="w-5 h-10 bg-red-500 rounded" />
          </div>
          <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Today’s</div>
        </div>
        <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">Flash Sales</div>
      </div>
      <div className="w-[302px] h-[50px] relative">
        <div className="w-[46px] left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
          <div className="w-[31px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">Days</div>
          <div className="w-[46px] h-7 text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">03</div>
        </div>
        <div className="w-[42px] h-[50px] left-[84px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
          <div className="w-[35px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">Hours</div>
          <div className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">23</div>
        </div>
        <div className="w-[49px] h-[50px] left-[164px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
          <div className="w-[49px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">Minutes</div>
          <div className="w-[39px] h-7 text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">19</div>
        </div>
        <div className="w-[51px] h-[50px] left-[251px] top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
          <div className="w-[52px] text-black text-xs font-medium font-['Poppins'] leading-[18px]">Seconds</div>
          <div className="text-black text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">56</div>
        </div>
        <div className="left-[63px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-1 h-1 bg-red-400 rounded-full" />
          <div className="w-1 h-1 bg-red-400 rounded-full" />
        </div>
        <div className="left-[143px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-1 h-1 bg-red-400 rounded-full" />
          <div className="w-1 h-1 bg-red-400 rounded-full" />
        </div>
        <div className="left-[230px] top-[26px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-1 h-1 bg-red-400 rounded-full" />
          <div className="w-1 h-1 bg-red-400 rounded-full" />
        </div>
      </div>
    </div>
    <div className="justify-start items-start gap-2 flex">
      <div className="w-[46px] h-[46px] relative">
        <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
        <div className="w-6 h-6 px-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex" />
      </div>
      <div className="w-[46px] h-[46px] relative">
        <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
        <div className="w-6 h-6 pl-[3.50px] pr-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex" />
      </div>
    </div>
  </div>
  <div className="w-[1308px] justify-start items-start gap-[30px] inline-flex">
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
        <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">-40%</div>
        </div>
        <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
              <div className="w-[19.23px] h-3.5 relative">
              </div>
            </div>
          </div>
        </div>
        <div className="w-[190px] h-[180px] px-[9px] py-3.5 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
          <img className="w-[172px] h-[152px]" src="https://via.placeholder.com/172x152" />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">HAVIT HV-G92 Gamepad</div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$120</div>
          <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">$160</div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start flex" />
          <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(88)</div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
        <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">-35%</div>
        </div>
        <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br" />
        <div className="left-[87px] top-[217px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">Add To Cart</div>
        <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
              <div className="w-[19.23px] h-3.5 relative">
              </div>
            </div>
          </div>
        </div>
        <div className="w-[190px] h-[180px] pt-10 pb-[39px] left-[40px] top-[15px] absolute justify-center items-center inline-flex">
          <img className="w-[191px] h-[101px]" src="https://via.placeholder.com/191x101" />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">AK-900 Wired Keyboard</div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$960</div>
          <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">$1160</div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start flex" />
          <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(75)</div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
        <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">-30%</div>
        </div>
        <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
              <div className="w-[19.23px] h-3.5 relative">
              </div>
            </div>
          </div>
        </div>
        <div className="w-[190px] h-[180px] px-2.5 pt-[26px] pb-[25px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
          <img className="w-[170px] h-[129px]" src="https://via.placeholder.com/170x129" />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">IPS LCD Gaming Monitor</div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$370</div>
          <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">$400</div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start flex" />
          <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(99)</div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
        <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">-25%</div>
        </div>
        <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
              <div className="w-[19.23px] h-3.5 relative">
              </div>
            </div>
          </div>
        </div>
        <div className="w-[190px] h-[180px] pl-[41px] pr-[42px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
          <img className="w-[107px] h-[180px]" src="https://via.placeholder.com/107x180" />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">S-Series Comfort Chair </div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$375</div>
          <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">$400</div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start flex">
            <div className="w-5 h-5 px-[1.67px] pt-[1.83px] pb-[1.67px] justify-center items-start gap-[0px] flex" />
          </div>
          <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(99)</div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
        <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">-25%</div>
        </div>
        <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
              <div className="w-[19.23px] h-3.5 relative">
              </div>
            </div>
          </div>
        </div>
        <div className="w-[190px] h-[180px] pl-[41px] pr-[42px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
          <img className="w-[107px] h-[180px]" src="https://via.placeholder.com/107x180" />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">S-Series Comfort Chair </div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$375</div>
          <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">$400</div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start flex">
            <div className="w-5 h-5 px-[1.67px] pt-[1.83px] pb-[1.67px] justify-center items-start gap-[0px] flex" />
          </div>
          <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(99)</div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
        <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">-25%</div>
        </div>
        <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
              <div className="w-[19.23px] h-3.5 relative">
              </div>
            </div>
          </div>
        </div>
        <div className="w-[190px] h-[180px] pl-[41px] pr-[42px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
          <img className="w-[107px] h-[180px]" src="https://via.placeholder.com/107x180" />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">S-Series Comfort Chair </div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$375</div>
          <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">$400</div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start flex">
            <div className="w-5 h-5 px-[1.67px] pt-[1.83px] pb-[1.67px] justify-center items-start gap-[0px] flex" />
          </div>
          <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(99)</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="left-[135px] top-[1415px] absolute flex-col justify-start items-start gap-[60px] inline-flex">
  <div className="justify-start items-end gap-[691px] inline-flex">
    <div className="flex-col justify-start items-start gap-5 inline-flex">
      <div className="justify-start items-center gap-4 inline-flex">
        <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
          <div className="w-5 h-10 bg-red-500 rounded" />
        </div>
        <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Categories</div>
      </div>
      <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">Browse By Category</div>
    </div>
    <div className="justify-start items-start gap-2 flex">
      <div className="w-[46px] h-[46px] relative">
        <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
        <div className="w-6 h-6 px-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex" />
      </div>
      <div className="w-[46px] h-[46px] relative">
        <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
        <div className="w-6 h-6 pl-[3.50px] pr-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex" />
      </div>
    </div>
  </div>
  <div className="justify-start items-start gap-[30px] inline-flex">
    <div className="w-[170px] h-[145px] pl-[55px] pr-14 pt-[25px] pb-6 rounded border border-black border-opacity-30 flex-col justify-center items-end gap-4 inline-flex">
      <div className="w-14 h-14 relative flex-col justify-start items-start flex">
        <div className="w-[25.67px] h-[0px] border-2 border-black"></div>
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Phones</div>
    </div>
    <div className="w-[170px] h-[145px] pl-10 pr-[39px] pt-[25px] pb-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
      <div className="w-14 h-14 relative flex-col justify-start items-start flex" />
      <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Computers</div>
    </div>
    <div className="w-[170px] h-[145px] pl-[34px] pr-[35px] pt-[25px] pb-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
      <div className="w-14 h-14 relative flex-col justify-start items-start flex">
        <div className="w-2.5 h-[13px] justify-start items-end gap-1 inline-flex">
          <div className="w-[13px] h-[0px] origin-top-left rotate-90 border-2 border-black"></div>
          <div className="w-2 h-[0px] origin-top-left rotate-90 border-2 border-black"></div>
          <div className="w-2.5 h-[0px] origin-top-left rotate-90 border-2 border-black"></div>
        </div>
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-normal">SmartWatch</div>
    </div>
    <div className="w-[170px] h-[145px] pl-[51px] pr-[52px] pt-[25px] pb-6 bg-red-500 rounded shadow flex-col justify-center items-center gap-4 inline-flex">
      <div className="w-14 h-14 relative flex-col justify-start items-start flex" />
      <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Camera</div>
    </div>
    <div className="w-[170px] h-[145px] pl-[34px] pr-[35px] pt-[25px] pb-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
      <div className="w-14 h-14 relative flex-col justify-start items-start flex" />
      <div className="text-black text-base font-normal font-['Poppins'] leading-normal">HeadPhones</div>
    </div>
    <div className="w-[170px] h-[145px] pl-[53px] pr-[52px] pt-[25px] pb-6 rounded border border-black border-opacity-30 flex-col justify-center items-center gap-4 inline-flex">
      <div className="w-14 h-14 relative flex-col justify-start items-start flex" />
      <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Gaming</div>
    </div>
  </div>
</div>
<div className="left-[135px] top-[1868px] absolute flex-col justify-start items-start gap-[60px] inline-flex">
  <div className="justify-start items-end gap-[611px] inline-flex">
    <div className="flex-col justify-start items-start gap-5 inline-flex">
      <div className="justify-start items-center gap-4 inline-flex">
        <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
          <div className="w-5 h-10 bg-red-500 rounded" />
        </div>
        <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">This Month</div>
      </div>
      <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">Best Selling Products</div>
    </div>
    <div className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex">
      <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">View All</div>
    </div>
  </div>
  <div className="justify-start items-start gap-[30px] inline-flex">
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
        <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
              <div className="w-[19.23px] h-3.5 relative">
              </div>
            </div>
          </div>
        </div>
        <div className="w-[190px] h-[180px] px-[25px] py-[17px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
          <img className="w-[140px] h-[146px]" src="https://via.placeholder.com/140x146" />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">The north coat</div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$260</div>
          <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">$360</div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start flex" />
          <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(65)</div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
        <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
              <div className="w-[19.23px] h-3.5 relative">
              </div>
            </div>
          </div>
        </div>
        <div className="w-[190px] h-[180px] px-1.5 pt-[26px] pb-[25px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
          <img className="w-[178px] h-[129px]" src="https://via.placeholder.com/178x129" />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">Gucci duffle bag</div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$960</div>
          <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">$1160</div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start flex">
            <div className="w-5 h-5 px-[1.67px] pt-[1.83px] pb-[1.67px] justify-center items-start gap-[0px] flex" />
          </div>
          <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(65)</div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
        <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
              <div className="w-[19.23px] h-3.5 relative">
              </div>
            </div>
          </div>
        </div>
        <div className="w-[190px] pt-[47px] pb-[38px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
          <img className="w-[191px] h-[95px]" src="https://via.placeholder.com/191x95" />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">RGB liquid CPU Cooler</div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$160</div>
          <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">$170</div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start flex">
            <div className="w-5 h-5 px-[1.67px] pt-[1.83px] pb-[1.67px] justify-center items-start gap-[0px] flex" />
          </div>
          <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(65)</div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
        <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
          </div>
          <div className="w-[34px] h-[34px] relative">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
              <div className="w-[19.23px] h-3.5 relative">
              </div>
            </div>
          </div>
        </div>
        <div className="w-[190px] px-[25px] pt-[3px] pb-px left-[40px] top-[35px] absolute justify-center items-center inline-flex">
          <img className="w-[140px] h-44" src="https://via.placeholder.com/140x176" />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-black text-base font-medium font-['Poppins'] leading-normal">Small BookSelf</div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$360</div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-start flex" />
          <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(65)</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="left-[135px] top-[3097px] absolute flex-col justify-start items-center gap-[60px] inline-flex">
  <div className="flex-col justify-start items-center gap-[60px] flex">
    <div className="justify-start items-end gap-[672px] inline-flex">
      <div className="flex-col justify-start items-start gap-5 inline-flex">
        <div className="justify-start items-center gap-4 inline-flex">
          <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
            <div className="w-5 h-10 bg-red-500 rounded" />
          </div>
          <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Our Products</div>
        </div>
        <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">Explore Our Products</div>
      </div>
      <div className="justify-start items-start gap-2 flex">
        <div className="w-[46px] h-[46px] relative">
          <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
          <div className="w-6 h-6 px-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex" />
        </div>
        <div className="w-[46px] h-[46px] relative">
          <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
          <div className="w-6 h-6 pl-[3.50px] pr-1 py-[5px] left-[11px] top-[11px] absolute justify-center items-center inline-flex" />
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-[60px] flex">
      <div className="justify-start items-start gap-[30px] inline-flex">
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
            <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
              </div>
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                  <div className="w-[19.23px] h-3.5 relative">
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[190px] h-[180px] pl-[38px] pr-[37px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
              <img className="w-[115px] h-[180px]" src="https://via.placeholder.com/115x180" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-black text-base font-medium font-['Poppins'] leading-normal">Breed Dry Dog Food</div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="justify-start items-start gap-3 flex">
                <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$100</div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="justify-start items-start flex" />
                <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(35)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
            <div className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br" />
            <div className="left-[87px] top-[217px] absolute text-white text-base font-medium font-['Poppins'] leading-normal">Add To Cart</div>
            <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
              </div>
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                  <div className="w-[19.23px] h-3.5 relative">
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[190px] h-[180px] px-[22px] pt-2 pb-[9px] left-[36px] top-[15px] absolute justify-center items-center inline-flex">
              <img className="w-[146px] h-[163px]" src="https://via.placeholder.com/146x163" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-black text-base font-medium font-['Poppins'] leading-normal">CANON EOS DSLR Camera</div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="justify-start items-start gap-3 flex">
                <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$360</div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="justify-start items-start flex" />
                <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(95)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
            <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
              </div>
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                  <div className="w-[19.23px] h-3.5 relative">
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[190px] h-[180px] px-[9px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
              <img className="w-[172px] h-[180px]" src="https://via.placeholder.com/172x180" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-black text-base font-medium font-['Poppins'] leading-normal">ASUS FHD Gaming Laptop</div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="justify-start items-start gap-3 flex">
                <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$700</div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="justify-start items-start flex" />
                <div className="w-10 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(325)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
            <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
              </div>
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                  <div className="w-[19.23px] h-3.5 relative">
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[190px] h-[180px] left-[40px] top-[35px] absolute" />
            <img className="w-[172px] h-[159px] left-[49px] top-[46px] absolute" src="https://via.placeholder.com/172x159" />
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-black text-base font-medium font-['Poppins'] leading-normal">Curology Product Set </div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="justify-start items-start gap-3 flex">
                <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$500</div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="justify-start items-start flex" />
                <div className="w-10 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(145)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-start items-start gap-[30px] inline-flex">
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
            <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
              </div>
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                  <div className="w-[19.23px] h-3.5 relative">
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-green-500 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">NEW</div>
            </div>
            <div className="w-[190px] h-[180px] px-[5px] pt-6 pb-[23px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
              <img className="w-[180px] h-[133px]" src="https://via.placeholder.com/180x133" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-black text-base font-medium font-['Poppins'] leading-normal">Kids Electric Car</div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="justify-start items-start gap-3 flex">
                <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$960</div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="justify-start items-start flex" />
                <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(65)</div>
              </div>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="w-5 h-5 relative">
                <div className="w-3 h-3 left-[4px] top-[4px] absolute bg-red-600 rounded-full" />
                <div className="w-5 h-5 left-0 top-0 absolute rounded-full border-2 border-black" />
              </div>
              <div className="w-5 h-5 bg-red-500 rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
            <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
              </div>
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                  <div className="w-[19.23px] h-3.5 relative">
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[190px] h-[180px] px-0.5 py-2 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
              <img className="w-[186px] h-[164px]" src="https://via.placeholder.com/186x164" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-black text-base font-medium font-['Poppins'] leading-normal">Jr. Zoom Soccer Cleats</div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="justify-start items-start gap-3 flex">
                <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$1160</div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="justify-start items-start flex" />
                <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(35)</div>
              </div>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="w-5 h-5 relative">
                <div className="w-3 h-3 left-[4px] top-[4px] absolute bg-yellow-300 rounded-full" />
                <div className="w-5 h-5 left-0 top-0 absolute rounded-full border-2 border-black" />
              </div>
              <div className="w-5 h-5 bg-red-500 rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
            <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
              </div>
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                  <div className="w-[19.23px] h-3.5 relative">
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-green-500 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">NEW</div>
            </div>
            <div className="w-[190px] h-[180px] px-1.5 py-[15px] left-[40px] top-[35px] absolute justify-center items-center inline-flex">
              <img className="w-[178px] h-[150px]" src="https://via.placeholder.com/178x150" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-black text-base font-medium font-['Poppins'] leading-normal">GP11 Shooter USB Gamepad</div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="justify-start items-start gap-3 flex">
                <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$660</div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="justify-start items-start flex">
                  <div className="w-5 h-5 px-[1.67px] pt-[1.83px] pb-[1.67px] justify-center items-start gap-[0px] flex" />
                </div>
                <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(55)</div>
              </div>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="w-5 h-5 relative">
                <div className="w-3 h-3 left-[4px] top-[4px] absolute bg-black rounded-full" />
                <div className="w-5 h-5 left-0 top-0 absolute rounded-full border-2 border-black" />
              </div>
              <div className="w-5 h-5 bg-red-500 rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
            <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-1 py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex" />
              </div>
              <div className="w-[34px] h-[34px] relative">
                <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
                <div className="w-6 h-6 px-[2.39px] py-[5px] left-[5px] top-[5px] absolute justify-center items-center inline-flex">
                  <div className="w-[19.23px] h-3.5 relative">
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[190px] h-[180px] px-1 py-0.5 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
              <img className="w-[182px] h-44" src="https://via.placeholder.com/182x176" />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-black text-base font-medium font-['Poppins'] leading-normal">Quilted Satin Jacket</div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="justify-start items-start gap-3 flex">
                <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">$660</div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="justify-start items-start flex">
                  <div className="w-5 h-5 px-[1.67px] pt-[1.83px] pb-[1.67px] justify-center items-start gap-[0px] flex" />
                </div>
                <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-[21px]">(55)</div>
              </div>
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="w-5 h-5 relative">
                <div className="w-3 h-3 left-[4px] top-[4px] absolute bg-teal-900 rounded-full" />
                <div className="w-5 h-5 left-0 top-0 absolute rounded-full border-2 border-black" />
              </div>
              <div className="w-5 h-5 bg-red-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
    <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">View All Products</div>
  </div>
</div>
<div className="left-[135px] top-[4253px] absolute flex-col justify-start items-start gap-[60px] inline-flex">
  <div className="flex-col justify-start items-start gap-5 flex">
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="w-5 h-10 flex-col justify-center items-center inline-flex">
        <div className="w-5 h-10 bg-red-500 rounded" />
      </div>
      <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Featured</div>
    </div>
    <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">New Arrival</div>
  </div>
  <div className="justify-start items-start gap-[30px] inline-flex">
    <div className="w-[570px] h-[600px] relative bg-black rounded">
      <img className="w-[511px] h-[511px] left-[29px] top-[89px] absolute" src="https://via.placeholder.com/511x511" />
      <div className="left-[32px] top-[446px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="text-neutral-50 text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">PlayStation 5</div>
          <div className="w-[242px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">Black and White version of the PS5 coming out on sale.</div>
        </div>
        <div className="flex-col justify-start items-start flex">
          <div className="text-white text-base font-medium font-['Poppins'] leading-normal">Shop Now</div>
          <div className="w-[81px] h-[0px] opacity-50 justify-center items-center inline-flex">
            <div className="w-[81px] h-[0px] border border-white"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-center gap-8 inline-flex">
      <div className="w-[570px] h-[284px] relative bg-stone-950 rounded">
        <img className="w-[432px] h-[286px] left-[570px] top-0 absolute origin-top-left rotate-180" src="https://via.placeholder.com/432x286" />
        <div className="left-[24px] top-[138px] absolute flex-col justify-start items-start gap-4 inline-flex">
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-neutral-50 text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">Women’s Collections</div>
            <div className="w-[255px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">Featured woman collections that give you another vibe.</div>
          </div>
          <div className="flex-col justify-start items-start flex">
            <div className="text-white text-base font-medium font-['Poppins'] leading-normal">Shop Now</div>
            <div className="w-[81px] h-[0px] opacity-50 justify-center items-center inline-flex">
              <div className="w-[81px] h-[0px] border border-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center gap-[30px] inline-flex">
        <div className="w-[270px] h-[284px] relative bg-black rounded">
          <div className="w-[210px] h-[222px] px-2.5 pb-px left-[30px] top-[31px] absolute flex-col justify-center items-center inline-flex">
            <img className="w-[190px] h-[221px]" src="https://via.placeholder.com/190x221" />
          </div>
          <div className="left-[24px] top-[175px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-neutral-50 text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">Speakers</div>
              <div className="w-[191px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">Amazon wireless speakers</div>
            </div>
            <div className="flex-col justify-start items-start flex">
              <div className="text-white text-base font-medium font-['Poppins'] leading-normal">Shop Now</div>
              <div className="w-[81px] h-[0px] opacity-50 justify-center items-center inline-flex">
                <div className="w-[81px] h-[0px] border border-white"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[270px] h-[284px] relative bg-black rounded">
          <div className="h-[222px] pl-1 pr-[5px] pt-2 pb-[11px] left-[30px] top-[30px] absolute flex-col justify-center items-center inline-flex">
            <img className="w-[201px] h-[203px]" src="https://via.placeholder.com/201x203" />
          </div>
          <div className="left-[24px] top-[175px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-neutral-50 text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">Perfume</div>
              <div className="w-[191px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">GUCCI INTENSE OUD EDP</div>
            </div>
            <div className="flex-col justify-start items-start flex">
              <div className="text-white text-base font-medium font-['Poppins'] leading-normal">Shop Now</div>
              <div className="w-[81px] h-[0px] opacity-50 justify-center items-center inline-flex">
                <div className="w-[81px] h-[0px] border border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="left-[249px] top-[5161px] absolute justify-center items-center gap-[88px] inline-flex">
  <div className="flex-col justify-start items-center gap-6 inline-flex">
    <div className="w-20 h-20 relative">
      <div className="w-20 h-20 left-0 top-0 absolute">
        <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
        <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full" />
      </div>
      <div className="w-10 h-10 left-[20px] top-[20px] absolute" />
    </div>
    <div className="flex-col justify-start items-center gap-2 flex">
      <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">FREE AND FAST DELIVERY</div>
      <div className="text-center text-black text-sm font-normal font-['Poppins'] leading-[21px]">Free delivery for all orders over $140</div>
    </div>
  </div>
  <div className="w-[262px] flex-col justify-start items-center gap-6 inline-flex">
    <div className="w-20 h-20 relative">
      <div className="w-20 h-20 left-0 top-0 absolute">
        <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
        <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full" />
      </div>
      <div className="w-10 h-10 left-[20px] top-[20px] absolute" />
    </div>
    <div className="flex-col justify-start items-center gap-2 flex">
      <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">24/7 CUSTOMER SERVICE</div>
      <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">Friendly 24/7 customer support</div>
    </div>
  </div>
  <div className="flex-col justify-start items-center gap-6 inline-flex">
    <div className="w-20 h-20 relative">
      <div className="w-20 h-20 left-0 top-0 absolute">
        <div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
        <div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-black rounded-full" />
      </div>
      <div className="w-10 h-10 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
        <div className="w-10 h-10 relative">
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-center gap-2 flex">
      <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">MONEY BACK GUARANTEE</div>
      <div className="text-black text-sm font-normal font-['Poppins'] leading-[21px]">We reurn money within 30 days</div>
    </div>
  </div>
</div>
<div className="w-full h-[440px] pt-20 pb-6 left-0 top-[5462px] absolute bg-black flex-col justify-end items-center gap-[60px] inline-flex">
  <div className="justify-center items-start gap-[87px] inline-flex">
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="flex-col justify-start items-start gap-6 flex">
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="w-[118px] h-6 justify-center items-center inline-flex">
            <div className="text-neutral-50 text-2xl font-bold font-['Inter'] leading-normal tracking-wide">Exclusive</div>
          </div>
          <div className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">Subscribe</div>
        </div>
        <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Get 10% off your first order</div>
      </div>
      <div className="w-[217px] pl-4 py-3 rounded border border-neutral-50 justify-start items-center gap-8 inline-flex">
        <div className="opacity-40 text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Enter your email</div>
        <div className="w-6 h-6 px-0.5 py-[3px] justify-center items-center flex" />
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-6 inline-flex">
      <div className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">Support</div>
      <div className="flex-col justify-start items-start gap-4 flex">
        <div className="w-[175px] text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</div>
        <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">exclusive@gmail.com</div>
        <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">+88015-88888-9999</div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-6 inline-flex">
      <div className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">Account</div>
      <div className="flex-col justify-start items-start gap-4 flex">
        <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">My Account</div>
        <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Login / Register</div>
        <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Cart</div>
        <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Wishlist</div>
        <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Shop</div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-6 inline-flex">
      <div className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">Quick Link</div>
      <div className="flex-col justify-start items-start gap-4 flex">
        <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Privacy Policy</div>
        <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Terms Of Use</div>
        <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">FAQ</div>
        <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Contact</div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-6 inline-flex">
      <div className="flex-col justify-start items-start gap-6 flex">
        <div className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">Download App</div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="opacity-70 text-neutral-50 text-xs font-medium font-['Poppins'] leading-[18px]">Save $3 with App New User Only</div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-20 h-20 p-0.5 bg-black justify-center items-center flex">
              <img className="w-[76px] h-[76px] border-2 border-white" src="https://via.placeholder.com/76x76" />
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-[110px] h-10 relative bg-black">
                <img className="w-[104px] h-[30px] left-[3px] top-[5px] absolute rounded border border-neutral-50" src="https://via.placeholder.com/104x30" />
              </div>
              <div className="w-[110px] h-10 p-[3px] bg-black justify-center items-center inline-flex">
                <img className="w-[104px] h-[34px] rounded border border-white" src="https://via.placeholder.com/104x34" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-start items-start gap-6 inline-flex">
        <div className="w-6 h-6 pl-[7px] pr-[6.50px] py-[3px] justify-center items-center flex" />
        <div className="w-6 h-6 pr-[1.94px] justify-start items-center flex">
          <div className="w-[27.06px] h-6 relative">
          </div>
        </div>
        <div className="w-6 h-6 p-[3px] justify-center items-center flex">
          <div className="w-[18px] h-[18px] relative">
          </div>
        </div>
        <div className="w-6 h-6 pl-[3px] pr-[3.50px] pt-[3px] pb-[3.50px] justify-center items-center flex" />
      </div>
    </div>
  </div>
  <div className="opacity-40 flex-col justify-start items-center gap-4 inline-flex">
    <div className="w-full h-[0px] opacity-50 justify-center items-center inline-flex">
      <div className="w-full h-[0px] opacity-40 border border-white"></div>
    </div>
    <div className="opacity-60 justify-start items-center gap-3 inline-flex">
      <div className="justify-start items-center gap-1.5 flex">
        <div className="w-5 h-5 p-[1.67px] justify-center items-center flex">
          <div className="w-[16.67px] h-[16.67px] relative">
          </div>
        </div>
        <div className="text-white text-base font-normal font-['Poppins'] leading-normal">Copyright Rimel 2022. All right reserved</div>
      </div>
    </div>
  </div>
</div>
<div className="w-full h-12 pl-[445px] pr-[136px] py-3 left-0 top-0 absolute bg-black justify-end items-center inline-flex">
  <div className="justify-start items-start gap-[231px] inline-flex">
    <div className="justify-start items-center gap-2 flex">
      <div className="w-[474px] h-[18px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
      <div className="text-center text-neutral-50 text-sm font-semibold font-['Poppins'] underline leading-normal">ShopNow</div>
    </div>
    <div className="justify-center items-center gap-[5px] flex">
      <div className="text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">English</div>
      <div className="w-6 h-6 pl-1.5 pr-[5.27px] pt-2 pb-[8.22px] justify-center items-center flex" />
    </div>
  </div>
</div>
<div className="left-[135px] top-[88px] absolute justify-start items-center gap-[148px] inline-flex">
  <div className="justify-start items-start gap-[190px] flex">
    <div className="w-[118px] h-6 justify-center items-center flex">
      <div className="text-black text-2xl font-bold font-['Inter'] leading-normal tracking-wide">Exclusive</div>
    </div>
    <div className="justify-start items-start gap-12 flex">
      <div className="flex-col justify-start items-center inline-flex">
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Home</div>
        <div className="w-12 h-[0px] opacity-50 justify-center items-center inline-flex">
          <div className="w-12 h-[0px] border border-black"></div>
        </div>
      </div>
      <div className="w-[66px] h-6 justify-center items-center flex">
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Contact</div>
      </div>
      <div className="w-12 h-6 justify-center items-center flex">
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">About</div>
      </div>
      <div className="w-[61px] h-6 justify-center items-center flex">
        <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Sign Up</div>
      </div>
    </div>
  </div>
  <div className="justify-start items-center gap-6 flex">
    <div className="pl-5 pr-3 py-[7px] bg-neutral-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="justify-center items-center gap-[34px] inline-flex">
        <div className="opacity-50 text-black text-xs font-normal font-['Poppins'] leading-[18px]">What are you looking for?</div>
        <div className="w-6 h-6 p-1 justify-center items-center flex" />
      </div>
    </div>
    <div className="justify-center items-center gap-4 flex">
      <div className="w-8 h-8 px-1.5 pt-[7px] pb-[7.17px] justify-center items-center flex" />
      <div className="w-8 h-8 justify-center items-center flex">
        <div className="w-8 h-8 relative flex-col justify-start items-start flex" />
      </div>
    </div>
  </div>
</div>
<div className="w-full h-[0px] left-0 top-[142px] absolute justify-center items-center inline-flex">
  <div className="w-full h-[0px] origin-top-left rotate-180 opacity-30 border border-black"></div>
</div>
<div className="w-[46px] h-[46px] left-[1305px] top-[5430px] absolute origin-top-left -rotate-90">
  <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
  <div className="w-6 h-6 px-[5px] py-1 left-[35px] top-[11px] absolute origin-top-left rotate-90 justify-center items-center inline-flex" />
</div>
</div> */}
