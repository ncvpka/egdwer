import React, { useState, useEffect } from "react";
import axios from "axios";
import packageServiceData from "./Data";
import { Outlet, Link, useNavigate } from "react-router-dom";
import RoomIcon from "@mui/icons-material/Room";
import TransgenderIcon from "@mui/icons-material/Transgender";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const Product = () => {
  const Blogs = [
    {
      img: "https://giadinh.mediacdn.vn/2017/kham-benh-1512529403152.jpg",
      title: "Địa chỉ tầm soát ung thư tại Hà Nội đáng tin cậy",
      content:
        "Với sự tiến bộ vượt bậc của y học, việc điều trị ung thư đã đạt được nhiều thành tựu mới, nhiều loại ung thư đã được chữa khỏi. Tuy nhiên, đây vẫn là",
      date: "Ngày 24/04/2023",
      link: "",
    },
    {
      img: "https://suckhoe123.vn/uploads/suc-khoe/2021_11/thuc-pham-giau-vitamin-b.jpg",
      title: "Tác dụng của vitamin nhóm B và những đối tượng cần lưu ý",
      content:
        "Vitamin nhóm B gồm tập hợp nhiều loại vitamin cần thiết cho hoạt động, phát triển của cơ thể. Các loại vitamin B có thể bổ sung theo thực phẩm ăn",
      date: "Ngày 24/04/2023",
      link: "",
    },
    {
      img: "https://www.shutterstock.com/image-photo/indian-male-doctor-consulting-senior-260nw-2036186195.jpg",
      title: "Dịch vụ lấy mẫu xét nghiệm tận nơi MEDLATEC - đơn vị y tế",
      content:
        "Là đơn vị tiên phong triển khai và không ngừng cải tiến, nâng cao chất lượng phục vụ khách hàng mỗi ngày, dịch vụ lấy mẫu xét ",
      date: "Ngày 24/04/2023",
      link: "",
    },
    {
      img: "https://cdn.tgdd.vn/2021/12/CookRecipe/CookTipsNote/15-meo-uong-tra-dung-cach-tot-cho-suc-khoe-ban-can-biet-tipsnote-800x450-1.jpg",
      title: "Uống trà có tốt không? Cách uống trà đúng, có lợi cho sức",
      content:
        "Trong trà xanh hay các loại trà nói chung luôn chứa caffeine. Hợp chất này giúp cơ thể tỉnh táo nhưng đôi khi lại gây tình trạng mất ngủ. Bạn đang",
      date: "Ngày 24/04/2023",
      link: "",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-[1280px] h-max mx-auto">
        <div className="flex w-full h-max mx-auto py-8 px-5 justify-between">
          <div className="flex w-max h-max text-black text-[30px] font-medium">
            Dịch vụ nổi bật
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-4 flex flex-wrap w-full h-max py-18 px-5 justify-between">
          {packageServiceData.map((product) => {
            return (
              <div className="rounded-lg shadow-md lg:max-w-sm flex w-[270px] justify-between mb-8 square h-max">
                <div
                  className="w-full rounded-lg shadow-md lg:max-w-sm"
                  key={product.id}
                >
                  <img
                    className="object-cover w-full h-48 rounded-xl"
                    src={product.img}
                    alt="image"
                  />
                  <div className="p-4">
                    <div>
                      <a className="text-xl hover:underline font-semibold tracking-tight text-dark">
                        {product.title}
                      </a>
                    </div>

                    <span className="mb-2 py-2 leading-relaxed mr-3 text-red-500">
                      {product.price}
                    </span>
                    <span>
                      <del>{product.priceGoc}</del>
                    </span>
                  </div>
                  <div className="text-xs">
                    <span>
                      <RoomIcon />{" "}
                      <span className="text-red-500 mr-2">
                        {product.address}
                      </span>
                    </span>
                    <span>
                      <TransgenderIcon />
                      <span className="text-red-500">Tất cả</span>
                    </span>
                    <div className="grid gap-2 grid-cols-2 grid-rows-1 my-7 w-[90%] m-auto">
                      <button className="rounded-3xl bg-blue-500 cursor-pointer py-1 px-2 w-[100%] h-auto ">
                        <b className="leading-10 text-white"> Đặt lịch </b>
                      </button>
                      <button className="rounded-3xl bg-red-500 cursor-pointer py-1 px-2 w-[100%] h-auto ">
                        <b className="leading-10 text-white">
                          <Link to={product.herf}>Xem thêm</Link>
                        </b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex w-full h-max mx-auto py-8 px-5 justify-between mt-10">
          <div className="flex w-max h-max text-black text-[30px] font-medium">
            Tin Tức & Blog
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-4 flex flex-wrap w-full h-max py-18 px-5 justify-between">
          {Blogs.map((news) => {
            return (
              <div className="rounded-lg shadow-md lg:max-w-sm flex w-[270px] justify-between mb-8 square h-max">
                <div
                  className="w-full rounded-lg shadow-md lg:max-w-sm"
                  key={news.id}
                >
                  <img
                    className="object-cover w-full h-48 rounded-xl"
                    src={news.img}
                    alt="image"
                  />
                  <div className="p-4">
                    <div>
                      <a className="text-xl hover:underline font-semibold tracking-tight text-dark">
                        {news.title}
                      </a>
                    </div>

                    <div className="mb-2 py-2 leading-relaxed mr-3 text-gray-400">
                      {news.content}
                    </div>
                  </div>
                  <div className="p-4 flex justify-between">
                    <div>
                      <CalendarMonthIcon />
                      <span>{news.date}</span>
                    </div>
                    <div>
                      <button className="rounded-xl bg-blue-500 cursor-pointer py-1 px-2 w-[100%] h-auto ">
                        <b className="leading-10 text-white">Xem thêm </b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Product;
