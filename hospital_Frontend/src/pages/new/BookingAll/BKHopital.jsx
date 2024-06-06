import { Outlet, Link, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { Space, Card } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BKHopital = () => {
  const initialValues = useState({
    fullName: "",
    phone: "",
    createDate: "",
    address: "",
    gender: "",
    content: "",
    isDelete: false,
  });
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();
  function handleInput(event) {
    const newAppointment = {
      ...formValues,
      [event.target.name]: event.target.value,
    };
    setFormValues(newAppointment);
  }
  const Validation = (values) => {
    const errors = {};
    const phone_regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!values.fullName) {
      errors.fullName = "Username is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    } else if (!phone_regex.test(values.phone)) {
      errors.pnhhone = "This is not  a valid phone number!";
    }
    if (!values.startDate) {
      errors.startDate = "createDate is required!";
    }

    if (!values.address) {
      errors.address = "Address is required!";
    }
    return errors;
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  });

  const handleSubmit = async (e) => {
    axios.defaults.baseURL = "http://localhost:8080";
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    e.preventDefault();
    setFormErrors(Validation(formValues));
    setIsSubmit(true);
    try {
      await axios
        .post("http://localhost:8080/api/v1/appointment/insert", formValues, {
          mode: "cors",
        })
        .then((res) => {
          if (res.data.status === 200) {
            // toast.success("Yêu cầu thành công", {
            //   position: toast.POSITION.TOP_RIGHT,
            // });
            alert("Yêu cầu được gửi đi thành công");
            navigator("/");
          }
          console.log(res.data);
          // setApointmentInsert()
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img
        src="https://booking.medon.vn/images/banner/banner_hospital.svg"
        alt=""
      />
      <div className="flex justify-center">
        <Space direction="vertical" size={16}>
          <Card
            title="Thông tin chung"
            style={{
              width: 1000,
            }}
            className="border-2 border-black border-solid"
          >
            <div class="flex items-center justify-center p-12">
              <div class="mx-auto w-full max-w-[550px]">
                <form onSubmit={handleSubmit}>
                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label
                          for="fullName"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Họ và Tên
                        </label>
                        <input
                          onChange={handleInput}
                          type="text"
                          name="fullName"
                          id="fullName"
                          value={formValues.fullName}
                          placeholder="Nhập họ tên của bạn"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <p className="text-red-500 m-0 ">{formErrors.fName}</p>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-4">
                        <label
                          for="phone"
                          class="mb-1 block text-base font-medium text-[#07074D]"
                        >
                          Số điện thoại
                        </label>
                        <input
                          onChange={handleInput}
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formValues.phone}
                          placeholder="Nhập vào Số điện thoại"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <p className="text-red-500 m-0">{formErrors.Phone}</p>
                    </div>
                  </div>

                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label
                          for="createDate"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Ngày đến khám
                        </label>
                        <input
                          onChange={handleInput}
                          type="date"
                          name="createDate"
                          id="createDate"
                          value={formValues.birthday}
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <p className="text-red-500 m-0">{formErrors.birthday}</p>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label
                          for="address"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Địa chỉ
                        </label>
                        <input
                          onChange={handleInput}
                          type="text"
                          name="address"
                          id="address"
                          value={formValues.address}
                          placeholder="Nhập địa chỉ của bạn"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                      <p className="text-red-500 m-0 ">{formErrors.address}</p>
                    </div>
                  </div>
                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label
                          for="gender"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Giới tính
                        </label>

                        <div className="">
                          <input
                            onChange={handleInput}
                            type="radio"
                            id="contactChoice1"
                            name="gender"
                            value="Nam"
                          />
                          <label for="contactChoice1" className="pl-3">
                            Nam
                          </label>
                          <input
                            onChange={handleInput}
                            type="radio"
                            id="contactChoice2"
                            name="gender"
                            value="Nữ"
                            className="ml-3"
                          />
                          <label for="contactChoice2" className="pl-3">
                            Nữ
                          </label>
                        </div>
                        <p className="text-red-500 m-0">{formErrors.contact}</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-5">
                    <label
                      for="content"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Triệu chúng bạn đang gặp phải ?
                    </label>
                    <textarea
                      type="text"
                      onChange={handleInput}
                      name="content"
                      id="content"
                      placeholder="5"
                      value={formValues.content}
                      min="0"
                      class="w-full h-auto appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div>
                    <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      Gửi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </Space>
      </div>

      <div className="w-[65%] m-auto"></div>
    </>
  );
};
export default BKHopital;
