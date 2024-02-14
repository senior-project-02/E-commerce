import React, { useState } from "react";
import 'boxicons'
const Detailsproduct = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="w-1/3 h-[450px] ml-4">
      <div class="flex-col">
        <div class=" flex-col text-black text-xl font-semibold font-Inter'] leading-normal-wide">
          <div>Havic HV G-92 Gamepad</div> <div class="mt-2">$192.00</div>
        </div>
        <div class="w-full h-[1px] bg-gray-300 mt-4"></div>
        <div class="flex flex-col mt-4">
          <div class="flex justify-between">
            <div class="text-black text-lg font-normal font-['Poppins'] leading-[21px]">
              (150 Reviews)
            </div>
            <div class="text-green-500 text-sm font-normal font-['Poppins'] leading-[21px]">
              In Stock
            </div>
          </div>
          <div class="text-black  text-xl font-normal font-['Poppins'] leading-[21px] mt-2">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install &amp; mess free removal
            Pressure sensitive.
          </div>
        </div>
        <div class="w-full h-[1px] bg-gray-300 mt-4"></div>
        <div class="flex justify-between mt-4">
          <div class="text-black text-xl font-normal font-['Inter'] leading-tight tracking-wide">
            Size:
          </div>
          <div class="flex">
            <div class="w-8 h-8 relative rounded border border-black border-opacity-50 mr-2">
              <div class="w-[18px] h-5 left-[7px] top-[6px] absolute text-black text-sm font-medium font-['Poppins'] leading-[21px]">
                XS
              </div>
            </div>
            <div class="w-8 h-8 relative rounded border border-black border-opacity-50 mr-2">
              <div class="w-2 h-5 left-[12px] top-[6px] absolute text-black text-sm font-medium font-['Poppins'] leading-[21px]">
                S
              </div>
            </div>
            <div class="w-8 h-8 relative bg-red-500 rounded mr-2">
              <div class="w-3 h-5 left-[10px] top-[6px] absolute text-neutral-50 text-sm font-medium font-['Poppins'] leading-[21px]">
                M
              </div>
            </div>
            <div class="w-8 h-8 relative rounded border border-black border-opacity-50 mr-2">
              <div class="w-1.5 h-5 left-[13px] top-[6px] absolute text-black text-sm font-medium font-['Poppins'] leading-[21px]">
                L
              </div>
            </div>
            <div class="w-8 h-8 relative rounded border border-black border-opacity-50">
              <div class="w-4 h-5 left-[8px] top-[6px] absolute text-black text-sm font-medium font-['Poppins'] leading-[21px]">
                XL
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-[1px] bg-gray-300 mt-4"></div>
        <div class="flex mt-4">
          <div class="w-15 h-11 relative rounded-tl rounded-bl border border-black border-opacity-50 flex items-center">
            <div class="w-[41px] h-9 flex justify-center items-center rounded-tr rounded-br">
              <button class=" text-black text-2xl">-</button>
            </div>
          </div>
          <div class="w-[100px] h-11 flex border-t border-b border-black border-opacity-50 justify-center  items-center">
           
              <p className="text-center">{count}</p>
              
          </div>
          <div class="w-[41px] h-11 flex justify-center items-center bg-red-500 rounded-tr rounded-br">
            <button class=" text-white ">+</button>
          </div>
          <div class="w-[165px] h-11 ml-5 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
          <div class="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
            <button>Buy Now</button>
          </div>
        </div>
        </div>
        
      </div>
      <div class="w-full rounded border flex-col border-black border-opacity-50 mt-8">
  <div class="p-2">
    <div class="flex justify-start items-center gap-4">
      <div class="">
      <box-icon size="md" name='truck' type='solid' ></box-icon>
      </div>
      <div class="p-2 flex-col">
        <div class="text-black text-base font-medium font-['Poppins'] leading-normal">
          Free Delivery
        </div>
        <div class="text-black text-xs font-medium font-['Poppins'] underline leading-none">
          Enter your postal code for Delivery Availability
        </div>
      </div>
    </div>
  </div>
  <div class="border border-black opacity-50"></div>
  <div class="p-2">
    <div class="flex justify-start items-center gap-4">
      <div class="">
      <box-icon size="md" name='refresh' animation='spin' ></box-icon>
      </div>
      <div class=" p-2 flex-col">
        <div class="text-black text-base font-medium font-['Poppins'] leading-normal">
          Return Delivery
        </div>
        <div>
          <span class="text-black text-xs font-medium font-['Poppins'] leading-none">
            Free 30 Days Delivery Returns.
          </span>
          <span class="text-black text-xs font-medium font-['Poppins'] underline leading-none">
            Details
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
  );
};

export default Detailsproduct;
