import { React, useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import dataPrice from "./Data";
import axios from "axios";

const Product1 = () => {
  //   const [showTables, setShowTables] = useState(false);
  //   const handleShowTable = () => {
  //     setShowTables(!showTables)
  //     console.log("<<<State>>>", showTables)
  //   }
  const [priceTest, setPriceTest] = useState([
    {
      id: 1,
      testName: "",
      price: "",
      delete: false,
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/pricetest?pageNumber=0&pageSize=999")
      .then((response) => {
        setPriceTest(response.data.data);
      });
  }, []);
  console.log(priceTest);
  return (
    <>
      <div className="bg-[#f8f8f8]">
        <div
          style={{
            backgroundImage: `url("https://thumbs.dreamstime.com/b/beautiful-living-coral-abstract-modern-waving-business-background-design-easy-editing-color-change-other-manipulation-135190910.jpg")`,
          }}
        >
          <div className="w-[90%] m-auto py-18 ">
            <div className="py-7">Service/Gói khám tổng quát</div>
            <div className="flex justify-between">
              <div className="w-[775px] h-[589px] ">
                <img
                  src="https://cdn.medon.vn/images/2023/04/05/80cb50a4-a693-4e4b-a7a1-901b1fdeda8f.png"
                  alt=""
                  className="rounded-3xl "
                />
              </div>
              <div className="bg-white rounded-3xl w-[775px] h-[589px] p-4 relative">
                <p className="2xl:text-2xl 2xl:leading-10 lg:text-lg lg:leading-8">
                  GÓI XÉT NGHIỆM THEO DÕI SỐT XUẤT HUYẾT CƠ BẢN
                </p>
                <span className="bg-red-700 text-white p-2 rounded-3xl w-auto h-auto ">
                  Giảm 10%
                </span>
                <div className="py-5">
                  <span className="text-red-600 leading-10 text-2xl">
                    415.000đ
                  </span>
                  <span>
                    <del className="ml-5 leading-10 text-2xl">515.000đ</del>
                  </span>
                </div>
                <div className="bg-gray-300 rounded-xl w-full h-auto p-3 text-gray-600">
                  <p className="pb-2">
                    Hình thức thực hiện: Tại nhà và Bệnh viện/Phòng khám
                  </p>
                  <div className="flex justify-around">
                    <ul className="text-black mr-5">
                      <li className="py-2">
                        Giới tính: <span className="text-gray-600">Nam</span>
                      </li>
                      <li>
                        Ngày bắt đầu:{" "}
                        <span className="text-gray-600">12/07/2022</span>
                      </li>
                      <li className="py-2">
                        Số lần đặt:<span className="text-gray-600">100</span>{" "}
                      </li>
                    </ul>
                    <ul>
                      <li className="py-2">
                        Độ tuổi:<span className="text-gray-600">Tất cả</span>
                      </li>
                      <li>
                        Ngày kết thúc:
                        <span className="text-gray-600">30/06/2023</span>{" "}
                      </li>
                      <li className="py-2">
                        Tỉnh thành:<span className="text-gray-600">Hà Nội</span>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="absolute bottom-4">
                  <button className="bg-blue-600 rounded-2xl p-2 bottom-0 cursor-pointer leading-10 text-lg text-white">
                    Đặt lịch gói khám
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10  rounded-2xl w-[90%] m-auto  ">
          <div className="flex justify-between">
            <div class="relative  overflow-x-auto sm:rounded-lg w-[775px] h-[589px]">
              <div className="mb-9">
                <span className="text-2xl leading-8 ">
                  Danh sách các xét nghiệm
                </span>
                <div className="bg-blue-700 w-14  rounded-lg h-2"></div>
              </div>

              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3 lg:text-lg leading-6">
                      Stt
                    </th>
                    <th scope="col" class="px-6 py-3 lg:text-lg leading-6">
                      Tên xét nghiệm
                    </th>
                    <th scope="col" class="px-6 py-3 lg:text-lg leading-6">
                      Giá xét nghiệm (VNĐ)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {priceTest.map((item, index) => {
                    return (
                      <tr
                        class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                        key={index}
                      >
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap lg:text-lg leading-6 dark:text-white ;"
                        >
                          {item.id}
                        </th>
                        <td class="px-6 py-4 border-solid	border-x-[2px] lg:text-lg leading-6">
                          {item.testName}
                        </td>
                        <td class="px-6 py-4 lg:text-lg leading-6 text-center ">
                          {item.price}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* <div><button className="rounded-2xl p-2 bg-white my-10" onClick={handleShowTable}>Xem them </button></div> */}
            </div>
            <div className="w-[775px] h-[589px] ">
              <div class="relative overflow-x-auto  sm:rounded-lg w-[775px] h-[589px]">
                <div className="mb-9">
                  <span className="text-2xl leading-8 ">Địa điểm áp dụng</span>
                  <div className="bg-blue-700 w-14  rounded-lg h-2"></div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3 lg:text-lg leading-6">
                        Stt
                      </th>
                      <th scope="col" class="px-6 py-3 lg:text-lg leading-6">
                        Phòng khám
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap lg:text-lg leading-6 dark:text-white ;"
                      >
                        1
                      </th>
                      <td class="px-6 py-4 border-solid	border-x-[2px] lg:text-lg leading-6">
                        Medlatec Hà Nội
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product1;
