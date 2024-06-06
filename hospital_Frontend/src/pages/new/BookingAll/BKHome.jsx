import { React, useState, useEffect } from "react";
import { Space, Card } from "antd";
import axios from "axios";

// import dayjs from "dayjs";
const BKHome = () => {
  const initialValues = useState({
    fName: "",
    Phone: "",
    birthday: "",
    startDate: "",
    startTime: "",
    contact: "",
    content: "",
    address: "",
    gender: false,
    isDelete: false,
  });
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
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
    if (!values.fName) {
      errors.fName = "Username is required!";
    }
    if (!values.Phone) {
      errors.Phone = "Phone is required!";
    } else if (!phone_regex.test(values.Phone)) {
      errors.Phone = "This is not  a valid phone number!";
    }
    if (!values.birthday) {
      errors.birthday = "Birthday is required!";
    }
    if (!values.contact) {
      errors.contact = "Gender is required!";
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
    e.preventDefault();
    setFormErrors(Validation(formValues));
    setIsSubmit(true);
    try {
      await axios
        .get("http://localhost:8080/api/v1/appointment/insert", formValues)
        .then((res) => {
          console.log(res.data.data);
          // setApointmentInsert()
        });
    } catch (error) {
      console.log(error);
    }
  };

  // insert booking

  //  http://localhost:8080/api/v1/appointment/insert
  return (
    <>
      <img
        src="https://booking.medon.vn/images/banner/banner_home.svg"
        alt=""
      />

      <article className="flex justify-center">
        <div className="py-10">
          <div className="text-3xl tracking-normal leading-[56px]">
            Đặt lịch tại nhà
          </div>
          <div className="text-base leading-6 my-5">
            Hoàn tất các thông tin sau, chuyên viên chúng tôi sẽ liên hệ để xác
            nhận cho bạn
          </div>
          <div className="w-[100%] m-auto">
            <Space direction="vertical" size={16}>
              <Card
                title="Thông tin chung"
                style={{
                  width: 1375,
                }}
                className="border-2 border-gray border-solid"
              >
                <div class="flex items-center justify-center p-5">
                  <div class="mx-auto w-full ">
                    <form>
                      <div className="-mx-3 flex justify-between flex-nowrap">
                        <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-5">
                            <label
                              for="fName"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Họ và Tên
                            </label>
                            <input
                              onChange={handleInput}
                              type="text"
                              name="fName"
                              id="fName"
                              value={formValues.fName}
                              placeholder="Nhập họ tên của bạn"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <p className="text-red-500 m-0 ">
                            {formErrors.fName}
                          </p>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-2">
                            <label
                              for="Phone"
                              class="mb-1 block text-base font-medium text-[#07074D]"
                            >
                              Số điện thoại
                            </label>
                            <input
                              onChange={handleInput}
                              type="tel"
                              name="Phone"
                              id="Phone"
                              value={formValues.Phone}
                              placeholder="Nhập vào Số điện thoại"
                              class="w-full rounded-md border border-[#e0e0e0] bg-white  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <p className="text-red-500 m-0">{formErrors.Phone}</p>
                        </div>

                        <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-2">
                            <label
                              for="birthday"
                              class="mb-1 block text-base font-medium text-[#07074D]"
                            >
                              Ngày Sinh
                            </label>
                            <input
                              onChange={handleInput}
                              type="date"
                              name="birthday"
                              id="birthday"
                              value={formValues.birthday}
                              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <p className="text-red-500 m-0">
                            {formErrors.birthday}
                          </p>
                        </div>
                      </div>
                      <div class="-mx-3 flex  flex-wrap mt-10">
                        <div class=" px-3 sm:w-1/4">
                          <div class="mb-5">
                            <label
                              for="birthday"
                              class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Giới tính
                            </label>

                            <div className="">
                              <input
                                onChange={handleInput}
                                type="radio"
                                id="contactChoice1"
                                name="contact"
                                value="Male"
                              />
                              <label for="contactChoice1" className="pl-3">
                                Nam
                              </label>
                              <input
                                onChange={handleInput}
                                type="radio"
                                id="contactChoice2"
                                name="contact"
                                value="Female"
                                className="ml-3"
                              />
                              <label for="contactChoice2" className="pl-3">
                                Nữ
                              </label>
                            </div>
                            <p className="text-red-500 m-0">
                              {formErrors.contact}
                            </p>
                          </div>
                        </div>
                        <div class="mb-5 ml-[122px]">
                          <label
                            for="fName"
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
                          <p className="text-red-500 m-0 ">
                            {formErrors.address}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <button
                          onClick={handleSubmit}
                          type="submit"
                          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none "
                        >
                          Gửi
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Card>
            </Space>
          </div>
        </div>
      </article>
      {/* <Space wrap>
        <TimePicker defaultValue={dayjs("12:08:23", "HH:mm:ss")} size="large" />
      </Space>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        <DatePicker
          style={{
            width: "20%",
          }}
        />
      </Space> */}
    </>
  );
};
export default BKHome;
