import { React, useState } from "react";
import axios from "axios";
import Img_notSearch from "./img_not_sreach";

const Sreach = () => {
  const [record, setRecord] = useState();
  // const [checkLoad, setCheckLoad] = useState(false);
  const [recordID, setRecordID] = useState();
  const [content, setContent] = useState("Vui long nhập mã tra cứu của bạn!!");

  const searchRecord = async (RecordSearchCode) => {
    if (!recordID.trim()) {
      alert("Không được để trống");
      return;
    }
    // if (!booking.content) {
    //   alert("Mã Booking không tồn tại");
    //   return;
    // }
    // const token = localStorage.getItem("token");
    try {
      await axios
        .get(
          "http://localhost:8080/api/v1/record/" + RecordSearchCode
          //  {
          //   headers: { Authorization: `Bearer ${token}` },
          // }
        )
        .then((response) => {
          console.log(response.data.data);
          console.log(response);
          if (response.status === 200) {
            setRecord(response.data.data);
          }
          // setCheckLoad(!checkLoad);
          // console.log({ checkLoad: checkLoad });
        });
    } catch (error) {
      setRecord({
        id: "",
        recordID: "",
        illnessContent: " ",
        conclusion: "",
        patient: {
          id: "",
          userID: "",
          patientID: "",
          patientInfo: {
            id: "",
            email: "",
            name: "",
            age: "",
            address: "",
            phone: "",
            gender: "",
          },
          delete: "",
        },
        doctor: {
          id: "",
          doctorID: "",
          userID: "",
          name: " ",
          address: "",
          phone: "",
          email: "",
          gender: "",
          likedDoctor: [
            {
              id: "",
              majorName: "",
            },
            {
              id: "",
              majorName: "",
            },
            {
              id: "",
              majorName: "",
            },
          ],
          delete: "",
        },
        delete: "",
      });

      if (error.response && error.response.status === 404) {
        setContent(
          "Không tim thấy mã booking của bạn, Vui long kiểm tra lại mã Booking"
        );
      }
    }
  };

  return (
    <>
      {/* Title examination results */}
      <div className="title">
        <b className="title text-2xl flex justify-center uppercase mt-28 mb-5">
          Tra cứu kết quả
        </b>
      </div>
      {/* Input Sreach examination results */}
      <div className="flex justify-center">
        <div className=" xl:w-96">
          <label htmlFor="name" className="block">
            <span className=" text-sm font-medium text-slate-700">
              Mã tra cứu <i style={{ color: "red" }}>(*)</i>
            </span>
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                onChange={(event) => setRecordID(event.target.value)}
                type="search"
                value={recordID}
                className="relative m-0 -mr-px block  min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Ví dụ: BKID123"
                aria-label="Search"
                required
                aria-describedby="button-addon1"
              />
              <button
                className="relative z-[2] flex items-center rounded-r bg-primary-700 px-6 my-2  text-xs font-medium uppercase leading-tight text-white shadow-md "
                type="button"
                onClick={() => {
                  searchRecord(recordID);
                }}
                id="button-addon1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </label>
        </div>
      </div>
      {/* examination results */}
      {record?.id ? (
        <div className="flex justify-center">
          <div className=" bg-white-200 w-11/12 px-10 py-7 mb-16 mt-7 shadow-2xl ">
            <div className="tile-examination-results">
              <b className="title text-2xl flex justify-center uppercase text-red-700 mb-5">
                Phiếu trả lời kết quả xét nghiệm
              </b>
            </div>

            <div class="grid gap-x-8 gap-y-4 grid-cols-3 flex justify-center text-blue-600 ">
              <div>
                Họ và Tên:
                {record != null ? record.patient.patientInfo.name : "NaN"}
              </div>
              <div className="block">
                Tuổi:
                {record != null ? record.patient.patientInfo.age : "NaN"}
              </div>
              <div>
                Giới tính:
                {record.patient.patientInfo.gender === false ? "Nam" : "Nữ"}
              </div>
              <div>
                Đia chỉ:
                {record.patient.patientInfo.address != null
                  ? record.patient.patientInfo.address
                  : "NaN"}
              </div>
              <div>
                Số điện thoai:{" "}
                {record.patient.patientInfo.phone != null
                  ? record.patient.patientInfo.phone
                  : "NaN"}
              </div>
              <div></div>
              <div>
                Bác sĩ chỉ định:{" "}
                {record.doctor.name != null ? record.doctor.name : "NaN"}
              </div>
              <div>
                Số điện thoai:{" "}
                {record.doctor.phone != null ? record.doctor.phone : "NaN"}
              </div>
              <div></div>
              <div>
                Chuẩn đoán:{" "}
                {record.illnessContent != null ? record.illnessContent : "NaN"}
              </div>
              <div>
                Ghi chú: {record.conclusion != null ? record.conclusion : "NaN"}
              </div>
              <div></div>
              <div>
                Thời gian khám:{" "}
                {record.createdTime != null ? record.createdTime : "NaN"}{" "}
              </div>

              <div>
                Thời gian hẹn khám lại:{" "}
                {record.localDate != null ? record.localDate : "NaN"}{" "}
              </div>
            </div>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                      <thead class="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th
                            scope="col"
                            class="border-r px-1 py-1 dark:border-neutral-500 text-blue-600"
                          >
                            Stt
                          </th>
                          <th
                            scope="col"
                            class="border-r px-6 py-4 dark:border-neutral-500 text-blue-600"
                          >
                            Nội dung khám
                          </th>
                          <th
                            scope="col"
                            class="border-r px-6 py-4 dark:border-neutral-500 text-blue-600"
                          >
                            Đơn vị
                          </th>
                          <th
                            scope="col"
                            class="border-r px-6 py-4 dark:border-neutral-500 text-blue-600"
                          >
                            Số lượng
                          </th>
                          <th
                            scope="col"
                            class="border-r px-6 py-4 dark:border-neutral-500 text-blue-600"
                          >
                            Đơn giá
                          </th>
                          <th scope="col" class="px-6 py-4 text-blue-600">
                            Kết quả
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                            1
                          </td>
                          <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-blue-600">
                            Vi khuẩn-Virus-Kí sinh trùng
                          </td>
                          <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-blue-600">
                            COVID-19 Ag test nhanh
                          </td>
                          <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-blue-600">
                            1
                          </td>
                          <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-blue-600">
                            69.000
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <b className="uppercase">Âm tính</b>
                          </td>
                          <td class="whitespace-nowrap px-6 py-4"></td>
                        </tr>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500"></td>
                          <td
                            colspan="3"
                            class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-blue-600"
                          >
                            Kết Luận
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">Âm tính</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex  justify-end mt-5">
                      <p>Số tiền đã thanh toán: 69.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="err">
            <div className="flex justify-center -mt-5">
              <>
                <Img_notSearch />
              </>
            </div>
            <div className="flex  justify-center -mt-10">
              <p className=" flex  justify-center text-blue-500 text-2xl w-3/4">
                {content}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Sreach;
