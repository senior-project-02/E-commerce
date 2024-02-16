import React, { useState } from 'react'

function Account() {
const [name,setName]=useState("")
const [lastname,setLastName]=useState("")
const [image,setImage]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [newPass,setNewpass]=useState("")
const [valispass,setValidpass]=useState("")
  return (

    <div>
<div className="Account w-[1437px] h-[1533px] relative bg-white">
  <div className="TopHeader w-[1440px] h-12 pl-[445px] pr-[136px] py-3 left-0 top-0 absolute bg-black justify-end items-center inline-flex">
    <div className="Frame746 justify-start items-start gap-[231px] inline-flex">
      <div className="Frame555 justify-start items-center gap-2 flex">
        <div className="SummerSaleForAllSwimSuitsAndFreeExpressDeliveryOff50 w-[474px] h-[18px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
        <div className="Shopnow text-center text-neutral-50 text-sm font-semibold font-['Poppins'] underline leading-normal">ShopNow</div>
      </div>
      <div className="Frame549 justify-center items-center gap-[5px] flex">
        <div className="English text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">English</div>
        <div className="Dropdown w-6 h-6 pl-1.5 pr-[5.27px] pt-2 pb-[8.22px] justify-center items-center flex" />
      </div>
    </div>
  </div>
  <div className="Header left-[135px] top-[88px] absolute justify-start items-center gap-[130px] inline-flex">
    <div className="Frame556 justify-start items-start gap-40 flex">
      <div className="Logo w-[118px] h-6 justify-center items-center flex">
        <div className="Exclusive text-black text-2xl font-bold font-['Inter'] leading-normal tracking-wide">Exclusive</div>
      </div>
      <div className="Frame554 justify-start items-start gap-12 flex">
        <div className="Header w-12 h-6 justify-center items-center flex">
          <div className="Home text-center text-black text-base font-normal font-['Poppins'] leading-normal">Home</div>
        </div>
        <div className="Header w-[66px] h-6 justify-center items-center flex">
          <div className="Contact text-center text-black text-base font-normal font-['Poppins'] leading-normal">Contact</div>
        </div>
        <div className="Header w-12 h-6 justify-center items-center flex">
          <div className="About text-center text-black text-base font-normal font-['Poppins'] leading-normal">About</div>
        </div>
        <div className="Header w-[61px] h-6 justify-center items-center flex">
          <div className="SignUp text-center text-black text-base font-normal font-['Poppins'] leading-normal">Sign Up</div>
        </div>
      </div>
    </div>
    <div className="Frame552 justify-start items-center gap-6 flex">
      <div className="SearchComponentSet pl-5 pr-3 py-[7px] bg-neutral-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="Frame550 justify-center items-center gap-[34px] inline-flex">
          <div className="WhatAreYouLookingFor opacity-50 text-black text-xs font-normal font-['Poppins'] leading-[18px]">What are you looking for?</div>
          <div className="Component2 w-6 h-6 p-1 justify-center items-center flex" />
        </div>
      </div>
      <div className="Frame551 justify-center items-center gap-4 flex">
        <div className="Wishlist w-8 h-8 px-1.5 pt-[7px] pb-[7.17px] justify-center items-center flex" />
        <div className="Cart1WithBuy w-8 h-8 justify-center items-center flex">
          <div className="Cart1 w-8 h-8 relative flex-col justify-start items-start flex" />
        </div>
        <div className="User w-8 h-8 pl-2.5 pr-[11px] py-[9px] bg-red-500 rounded-[47px] flex-col justify-center items-center gap-[3px] inline-flex" />
      </div>
    </div>
  </div>
  <div className="Line3 w-[1440px] h-[0px] left-0 top-[142px] absolute justify-center items-center inline-flex">
    <div className="Line3 w-[1440px] h-[0px] origin-top-left rotate-180 opacity-30 border border-black"></div>
  </div>
  <div className="Roadmap left-[135px] top-[222px] absolute justify-start items-center gap-3 inline-flex">
    <div className="Account opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">Home</div>
    <div className="Line13 w-[13.19px] h-[0px] origin-top-left rotate-[117.05deg] border border-black border-opacity-50"></div>
    <div className="Nothing text-black text-sm font-normal font-['Poppins'] leading-[21px]">My Account</div>
  </div>
<div className="WelcomeMdRimel left-[1163px] top-[222px] absolute">
  <span style={{ color: 'black', fontSize: 'small', fontFamily: 'Poppins', lineHeight: '21px' }}>Welcome! </span>
  <span style={{ color: 'red', fontSize: 'small', fontFamily: 'Poppins', lineHeight: '21px' }}>Md Rimel</span>
</div>

  <div className="MyWishlist w-[93px] h-[23px] left-[135px] top-[587px] absolute text-black text-base font-medium font-['Poppins'] leading-normal">My WishList</div>
  <div className="Frame839 left-[170px] top-[363px] absolute flex-col justify-start items-start gap-2 inline-flex">
    <div className="MyProfile text-red-500 text-base font-normal font-['Poppins'] leading-normal">My Profile</div>
    <div className="AddressBook opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">Address Book</div>
    <div className="MyPaymentOptions opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Payment Options</div>
  </div>
  <div className="Frame840 left-[170px] top-[515px] absolute flex-col justify-start items-start gap-2 inline-flex">
    <div className="MyReturns opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Returns</div>
    <div className="MyCancellations opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Cancellations</div>
  </div>
  <div className="Frame838 w-[870px] h-[630px] left-[434px] top-[323px] absolute bg-white rounded shadow">
    <div className="EditYourProfile left-[80px] top-[40px] absolute text-red-500 text-xl font-medium font-['Poppins'] leading-7">Edit Your Profile</div>
    <div className="Frame848 left-[80px] top-[84px] absolute justify-start items-start gap-[50px] inline-flex">
  <div className="Frame841 flex-col justify-start items-start gap-2 inline-flex">
    <div className="FirstName text-black text-base font-normal font-['Poppins'] leading-normal">First Name</div>
    <div className="PlaceboxInfo w-[330px] h-[50px] relative">
      <div className="PlaceToInfoBox w-[330px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
      <div className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
      <input
        type="text"
        placeholder="Md"
        className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
        style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        onChange={(e)=>{setName(e.target.value)}}
      />
    </div>
  </div>
  <div className="Frame842 flex-col justify-start items-start gap-2 inline-flex">
    <div className="LastName text-black text-base font-normal font-['Poppins'] leading-normal">Last Name</div>
    <div className="PlaceboxInfo w-[330px] h-[50px] relative">
      <div className="PlaceToInfoBox w-[330px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
      <div className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"></div>
      <input
        type="text"
        placeholder="Rimel"
        className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
        style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        onChange={(e)=>{setLastName(e.target.value)}}
      />
    </div>
  </div>
</div>

    <div className="Frame849 left-[80px] top-[190px] absolute justify-start items-start gap-[50px] inline-flex">
  <div className="Frame843 flex-col justify-start items-start gap-2 inline-flex">
    <div className="Email text-black text-base font-normal font-['Poppins'] leading-normal">Email</div>
    <div className="PlaceboxInfo w-[330px] h-[50px] relative">
      <div className="PlaceToInfoBox w-[330px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
      <input
        type="text"
        placeholder="rimel1111@gmail.com"
        className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
        style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        onChange={(e)=>{setEmail(e.target.value)}}
      />
    </div>
  </div>
  <div className="Frame844 flex-col justify-start items-start gap-2 inline-flex">
    <div className="Address text-black text-base font-normal font-['Poppins'] leading-normal">image</div>
    <div className="PlaceboxInfo w-[330px] h-[50px] relative">
      <div className="PlaceToInfoBox w-[330px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
      <input
        type="text"
        placeholder="image"
        className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
        style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        onChange={(e)=>{setImage(e.target.value)}}
      />

    </div>
  </div>
</div>

<div className="Frame846 left-[80px] top-[296px] absolute flex-col justify-start items-start gap-4 inline-flex">
  <div className="Frame845 flex-col justify-start items-start gap-2 flex">
    <div className="PasswordChanges text-black text-base font-normal font-['Poppins'] leading-normal">Password Changes</div>
    <div className="PlaceboxInfo w-[710px] h-[50px] relative">
      <div className="PlaceToInfoBox w-[710px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
      <input
        type="password"
        placeholder="Current Password"
        className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
        style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        onChange={(e)=>{setPassword(e.target.value)}}
      />
    </div>
  </div>
  <div className="PlaceboxInfo w-[710px] h-[50px] relative">
    <div className="PlaceToInfoBox w-[710px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
    <input
      type="password"
      placeholder="New Password"
      className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
      style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
      onChange={(e)=>{setNewpass(e.target.value)}}
    />
  </div>
  <div className="PlaceboxInfo w-[710px] h-[50px] relative">
    <div className="PlaceToInfoBox w-[710px] h-[50px] left-0 top-0 absolute bg-neutral-100 rounded" />
    <input
      type="password"
      placeholder="Confirm New Password"
      className="Md left-[16px] top-[13px] absolute opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
      style={{ width: '100%', height: '100%', border: 'none', outline: 'none', backgroundColor: 'transparent' }}
      onChange={(e)=>{setValidpass(e.target.value)}}
    />
  </div>
</div>

<div className="Frame847 left-[487px] top-[534px] absolute justify-start items-center gap-8 inline-flex">
 
  <div className="Button px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex">
  
  <div className="ViewAllProducts text-neutral-50 text-base font-medium font-['Poppins'] leading-normal" onClick={()=>{console.log("hi");}}>Save Changes</div>
</div>

</div>

  </div>
  <div className="Footer w-[1440px] h-[440px] pt-20 pb-6 left-0 top-[1093px] absolute bg-black flex-col justify-end items-center gap-[60px] inline-flex">
    <div className="Frame743 justify-center items-start gap-[87px] inline-flex">
      <div className="Frame717 flex-col justify-start items-start gap-4 inline-flex">
        <div className="Frame716 flex-col justify-start items-start gap-6 flex">
          <div className="Frame715 flex-col justify-start items-start gap-6 flex">
            <div className="Logo w-[118px] h-6 justify-center items-center inline-flex">
              <div className="Exclusive text-neutral-50 text-2xl font-bold font-['Inter'] leading-normal tracking-wide">Exclusive</div>
            </div>
            <div className="Subscribe text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">Subscribe</div>
          </div>
          <div className="Get10OffYourFirstOrder text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Get 10% off your first order</div>
        </div>
        <div className="SendMail w-[217px] pl-4 py-3 rounded border border-neutral-50 justify-start items-center gap-8 inline-flex">
          <div className="EnterYourEmail opacity-40 text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Enter your email</div>
          <div className="IconSend w-6 h-6 px-0.5 py-[3px] justify-center items-center flex" />
        </div>
      </div>
      <div className="Frame713 flex-col justify-start items-start gap-6 inline-flex">
        <div className="Support text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">Support</div>
        <div className="Frame712 flex-col justify-start items-start gap-4 flex">
          <div className="BijoySaraniDhakaDh1515Bangladesh w-[175px] text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</div>
          <div className="ExclusiveGmailCom text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">exclusive@gmail.com</div>
          <div className="88015888889999 text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">+88015-88888-9999</div>
        </div>
      </div>
      <div className="Frame711 flex-col justify-start items-start gap-6 inline-flex">
        <div className="Account text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">Account</div>
        <div className="Frame710 flex-col justify-start items-start gap-4 flex">
          <div className="MyAccount text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">My Account</div>
          <div className="LoginRegister text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Login / Register</div>
          <div className="Cart text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Cart</div>
          <div className="Wishlist text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Wishlist</div>
          <div className="Shop text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Shop</div>
        </div>
      </div>
      <div className="Frame709 flex-col justify-start items-start gap-6 inline-flex">
        <div className="QuickLink text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">Quick Link</div>
        <div className="Frame708 flex-col justify-start items-start gap-4 flex">
          <div className="PrivacyPolicy text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Privacy Policy</div>
          <div className="TermsOfUse text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Terms Of Use</div>
          <div className="Faq text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">FAQ</div>
          <div className="Contact text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">Contact</div>
        </div>
      </div>
      <div className="Frame742 flex-col justify-start items-start gap-6 inline-flex">
        <div className="Frame721 flex-col justify-start items-start gap-6 flex">
          <div className="DownloadApp text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">Download App</div>
          <div className="Frame720 flex-col justify-start items-start gap-2 flex">
            <div className="Save3WithAppNewUserOnly opacity-70 text-neutral-50 text-xs font-medium font-['Poppins'] leading-[18px]">Save $3 with App New User Only</div>
            <div className="Frame719 justify-start items-center gap-2 inline-flex">
              <div className="QrCode w-20 h-20 p-0.5 bg-black justify-center items-center flex">
                <img className="Qrcode1 w-[76px] h-[76px] border-2 border-white" src="https://via.placeholder.com/76x76" />
              </div>
              <div className="Frame718 flex-col justify-start items-start gap-1 inline-flex">
                <div className="Googleplay w-[110px] h-10 relative bg-black">
                  <img className="PngTransparentGooglePlayStoreLogoGooglePlayAppStoreAndroidWalletsTextLabelLogo w-[104px] h-[30px] left-[3px] top-[5px] absolute rounded border border-neutral-50" src="https://via.placeholder.com/104x30" />
                </div>
                <div className="Appstore w-[110px] h-10 p-[3px] bg-black justify-center items-center inline-flex">
                  <img className="DownloadAppstore w-[104px] h-[34px] rounded border border-white" src="https://via.placeholder.com/104x34" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Frame741 justify-start items-start gap-6 inline-flex">
          <div className="IconFacebook w-6 h-6 pl-[7px] pr-[6.50px] py-[3px] justify-center items-center flex" />
          <div className="IconTwitter w-6 h-6 pr-[1.94px] justify-start items-center flex">
            <div className="Group w-[27.06px] h-6 relative">
            </div>
          </div>
          <div className="IconInstagram w-6 h-6 p-[3px] justify-center items-center flex">
            <div className="Group w-[18px] h-[18px] relative">
            </div>
          </div>
          <div className="IconLinkedin w-6 h-6 pl-[3px] pr-[3.50px] pt-[3px] pb-[3.50px] justify-center items-center flex" />
        </div>
      </div>
    </div>
    <div className="Frame643 opacity-40 flex-col justify-start items-center gap-4 inline-flex">
      <div className="Underline w-[1440px] h-[0px] opacity-50 justify-center items-center inline-flex">
        <div className="Line1 w-[1440px] h-[0px] opacity-40 border border-white"></div>
      </div>
      <div className="Frame67 opacity-60 justify-start items-center gap-3 inline-flex">
        <div className="Frame66 justify-start items-center gap-1.5 flex">
          <div className="IconCopyright w-5 h-5 p-[1.67px] justify-center items-center flex">
            <div className="Group w-[16.67px] h-[16.67px] relative">
            </div>
          </div>
          <div className="CopyrightRimel2022AllRightReserved text-white text-base font-normal font-['Poppins'] leading-normal">Copyright Rimel 2022. All right reserved</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Account
