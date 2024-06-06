import Carousel from "../../Blogs/Carousel";
import Product from "../Product/Product";
import "./Card.css";
import * as packageServiceData from "../Product/Data";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const PrevHome = () => {
    let path = `/booking_home`;
    navigate(path);
  };
  const PrevHopital = () => {
    let path = `/bookingHospital`;
    navigate(path);
  };
  const PrevQuick = () => {
    let path = `/quickBooking`;

    navigate(path);
  };
  const PrevEmination = () => {
    let path = `/BKEminationPackage`;
    navigate(path);
  };
  const sildes = [
    "https://cdn.medon.vn/images/2022/12/23/9984bc9a-ca4b-41e3-ae92-3d91ecb49f9c.png",
    "https://cdn.medon.vn/images/2022/12/22/17883434-175d-4799-978e-9f986a839442.png",
    "https://cdn.medon.vn/images/2022/12/22/f7beec4b-6646-4590-a1d7-3af397224b6e.png",
    "https://cdn.medon.vn/images/2022/12/22/a2e736a3-359b-4044-b938-e151ffbeec1d.png",
  ];
  return (
    // <div className="full px-5 h-96 flex flex-col ">
    //   <div className="flex justify-around  w-96 -mb-3 z-10">
    //     <div className="bg-[#8aa6b8] rounded-lg w-7 h-7 "></div>
    //     <div className="bg-[#8aa6b8] rounded-lg w-7 h-7 "></div>
    //   </div>
    //   <div className="relavite ">
    //     <div className="bg-red-500  h-10 w-96 h-32 rounded-tr-3xl rounded-tl-3xl">
    //       1
    //     </div>
    //     <div className="bg-white-500  h-10 w-96 h-72 rounded-br-3xl rounded-bl-3xl absolute border border-blue-600 z-100 ">
    //       2
    //     </div>
    //     <div className="bg-blue-500 h-24 w-96 h-5 rounded-br-3xl rounded-bl-3xl   absolute bottom-0 transform translate-y-50  z-10  ">
    //       3
    //     </div>
    //   </div>

    // </div>
    <>
      <div className="flex justify-center gap-11">
        <div className="w-[421px] h-full ml-10 mb-48">
          <div className="h-full w-full flex flex-col ">
            <div className="flex justify-around w-96 -mb-3 z-10  ">
              <div className="bg-[#8aa6b8] rounded-lg w-7 h-7 "></div>
              <div className="bg-[#8aa6b8] rounded-lg w-7 h-7 "></div>
            </div>
            <div className=" flex h-full w-[421px] flex-col bg-gray-100 ">
              {/* red */}
              <div className="w-[421px] h-auto bg-red-500   rounded-tr-3xl rounded-tl-3xl">
                <div>
                  <p className="text-white font-bold px-3 flex justify-center text-3xl ">
                    Đặt lịch nhanh với lựa chọn sau:
                  </p>
                </div>
              </div>

              {/* blue */}
              <div className="absolute translate   translate-y-[450px] z-10 w-[421px] h-[140px] rounded-br-3xl rounded-bl-3xl bg-blue-500"></div>
              {/* white */}
              <div className=" h-auto w-[421px] bg-[#f2f7ff] z-20 rounded-br-3xl rounded-bl-3xl grid grid-cols-2 grid-row-2 gap-4 p-7 ">
                <div
                  className="Item-1 rounded-3xl box-shadow-2 bg-[#fff] w-auto h-auto rounded-xl  cursor-pointer flex justify-center shadow-2xl shadow-blue-600"
                  onClick={PrevHopital}
                >
                  <div className=" ">
                    <img
                      src="https://booking.medon.vn/_next/static/media/01.07f9753a.svg"
                      alt=""
                      className="pt-5 w-[40%] m-auto  "
                    />
                    <a className="text-black text-center text-base flex justify-center">
                      <p>Đặt lich khám tại bệnh viện</p>
                    </a>
                  </div>
                </div>
                <div
                  className="Item-1 rounded-3xl box-shadow-2 bg-[#fff] w-auto h-auto rounded-xl  cursor-pointer flex justify-center shadow-2xl shadow-blue-600"
                  onClick={PrevHome}
                >
                  <div className=" ">
                    <img
                      src="https://booking.medon.vn/_next/static/media/02.9e53b2d3.svg"
                      alt=""
                      className="pt-5 w-[40%] m-auto   "
                    />
                    <a
                      href="#"
                      className="text-black text-center text-base flex justify-center"
                    >
                      <p>Đặt lịch xét nghiệm tại nhà</p>
                    </a>
                  </div>
                </div>
                <div
                  className="Item-1 rounded-3xl box-shadow-2 bg-[#fff] w-auto h-auto rounded-xl  cursor-pointer flex justify-center shadow-2xl shadow-blue-600"
                  onClick={PrevEmination}
                >
                  <div className=" ">
                    <img
                      src="https://booking.medon.vn/_next/static/media/03.09b62748.svg"
                      alt=""
                      className="px-10 py-1  "
                    />
                    <a
                      href="#"
                      className="text-black text-center text-base flex justify-center"
                    >
                      <p>Đặt lich nhanh</p>
                    </a>
                  </div>
                </div>
                <div
                  className="Item-1 rounded-3xl box-shadow-2 bg-[#fff] w-auto h-auto rounded-xl  cursor-pointer flex justify-center shadow-2xl shadow-blue-600"
                  onClick={PrevQuick}
                >
                  <div className=" ">
                    <img
                      src="https://booking.medon.vn/_next/static/media/04.b0047703.svg"
                      alt=""
                      className="px-10 pt-5 pb-4  "
                    />
                    <a
                      href="#"
                      className="text-black text-center text-base flex justify-center"
                    >
                      <p>Đặt lich gói khám</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1130px] h-[615px]">
          <Carousel autoSlide={true}>
            {sildes.map((s) => (
              <img src={s} className="" />
            ))}
          </Carousel>
        </div>
      </div>
      {/* dịch vụ nổi bật */}

      <Product></Product>
    </>
  );
};

export default Card;
