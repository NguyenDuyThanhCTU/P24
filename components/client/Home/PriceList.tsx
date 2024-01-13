import React from "react";

const HomePriceList = () => {
  return (
    <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/nhakhoathammytranhuy.appspot.com/o/price%20list.jpg?alt=media&token=efae4c52-a152-42da-abbe-a76a06543977)] h-[60vh] bg-cover bg-left bg-no-repeat ">
      <div className="p:w-auto d:w-[1100px] mx-auto flex justify-between h-full items-center ">
        <div></div>
        <div className="d:text-black p:text-white">
          <h2 className="text-[30px] font-normal uppercase ">Bảng giá</h2>
          <div className="text-[26px] font-normal">
            Áp dụng đến hết năm 2019
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="uppercase text-[18px] font-normal">
                Tẩy trắng răng
              </h3>
              <p>– Tẩy trắng về nhà 1,000,000</p>
              <p>– Tẩy trắng tại ghế 1,500,000</p>
              <p>– Tẩy rắng kết hợp 1,800,000</p>
            </div>
            <span>...</span>
            <div>
              <h3 className="uppercase text-[18px] font-normal">
                IMPLANT (đơn vị / 1 trụ){" "}
              </h3>
              <p> 1 trụ 1,300 USD ( Nobel)</p>
              <p>– Ghép bột xương 200 USD/ 1 đơn vị</p>
              <p>– Nâng xoang 5,000,000|</p>
            </div>
            <span>...</span>
          </div>
          <div className="flex gap-5 text-white uppercase font-normal cursor-pointer mt-5">
            <div className="bg-mainColor px-5 py-2 hover:bg-pink-700 duration-300 ">
              Xem bảng giá
            </div>
            <div className="border-2 border-mainColor text-mainColor hover:border-white px-5 py-2 hover:bg-white hover:text-black duration-300 ">
              <div>xem dịch vụ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePriceList;
