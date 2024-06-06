import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Box, Button, IconButton, Modal, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import Header from "../../components/Header";
import { tokens } from "../../theme";
const Statistical = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "25px",
  };
  const [bookingData, setBookingData] = React.useState([
    {
      id: 1,
      fullName: "Nguyen Chi Vu",
      appointmentID: "APID123",
      phone: "0868808602",
      createDate: "2023-04-25",
      gender: "Nam",
      content: "Asdasjdhsajkdh",
      isDelete: false,
    },
  ]);

  const [bookingUpdate, setBookingUpdate] = React.useState([
    {
      id: 1,
      fullName: "Nguyen Chi Vu",
      appointmentID: "APID123",
      phone: "0868808602",
      createDate: "2023-04-25",
      gender: "Nam",
      content: "Asdasjdhsajkdh",
      isDelete: false,
    },
  ]);
  const updateData = async (e, index) => {
    e.preventDefault();
    window.location.reload();
    handleClose();
    await axios
      .post(
        "http://localhost:8080/api/v1/appointment/update/" + index,
        bookingUpdate
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleOpen = (id) => {
    setOpen(true);
    for (let i = 0; i < bookingData.length; i++) {
      if (bookingData[i].id === id) {
        setBookingUpdate(bookingData[i]);
        break;
      }
    }
  };

  let navigate = useNavigate();
  const handleRowClick = (id) => {
    const booking = bookingData.find((booking) => booking.id === id);
    if (booking) {
      setBookingUpdate(booking);
      let path = "details";
      navigate(path, {
        state: booking,
      });
    }
  };
  function handleChangeEvent(event) {
    const { name, value, type, checked } = event.target;
    setBookingUpdate((prevBookingUpdate) => {
      return {
        ...prevBookingUpdate,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  const handleDelete = async (index) => {
    const token = localStorage.getItem("token");
    window.location.reload();
    await axios.get(
      "http://localhost:8080/api/v1/appointment/delete/" + index,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  };
  React.useEffect(() => {
    const postData = async () => {
      const res = await axios.post("http://localhost:8080/api/auth/signin", {
        username: "",
        password: "",
      });
      const data = res.data;
      const token = data.accessToken;
      localStorage.setItem("token", token);
    };
    postData();

    const token = localStorage.getItem("token");
    axios
      .get(
        "http://localhost:8080/api/v1/appointment?pageNumber=0&pageSize=999",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setBookingData(response.data.data);
      });
  }, []);

  const handleInsert = async (e) => {
    const token = localStorage.getItem("token");
    await axios.get(
      "http://localhost:8080/api/v1/appointment/getListAppointmentInOneDay?dateFromString=",
      insertDate,
      { headers: { Authorization: `Bearer ${token}` } }.then((res) => {
        setBookingData(res.data.data);
        console.log(res.data.data);
      })
    );
  };
  const [insertOpen, setInsertOpen] = React.useState(false);

  const [insertDate, setInsertDate] = React.useState([
    {
      createDate: "2023-04-24",
    },
  ]);
  function handleChangeInsertEvent(e) {
    setInsertDate({ ...insertDate, [e.target.name]: e.target.value });
  }

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "appointmentID",
      headerName: "appointmentID",
      flex: 1,
    },

    {
      field: "fullName",
      headerName: "Họ và Tên",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Sô điện thoại",
      flex: 1,
    },
    {
      field: "createDate",
      headerName: "Ngày tạo",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },

    {
      field: "delete",
      headerName: "Delete status",
      flex: 1,
    },
    {
      field: "edit",
      headerName: "Edit",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={() => handleOpen(params.row.id)}
              startIcon={
                <Box
                  width="60%"
                  m="0 auto"
                  p="5px"
                  display="flex"
                  justifyContent="center"
                >
                  <EditIcon sx={{ color: "yellow", fontSize: "24px" }} />
                </Box>
              }
            />
            <Modal
              sx={{
                "& .MuiBackdrop-root": {
                  backgroundColor: "transparent",
                },
              }}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <p className="text-center font-bold text-lg text-black">
                  Update Appointment
                </p>
                <form className="w-full">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="appointmentID"
                      onChange={handleChangeEvent}
                      id="appointmentID"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      defaultValue={bookingUpdate.appointmentID}
                      required
                      disabled
                    />
                    <label
                      htmlFor="appointmentID"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      AppointmentID
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="fullName"
                      onChange={handleChangeEvent}
                      id="floating_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      defaultValue={bookingUpdate.fullName}
                      required
                    />
                    <label
                      htmlFor="floating_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      onChange={handleChangeEvent}
                      defaultValue={bookingUpdate.phone}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      required
                    />
                    <label
                      htmlFor="phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Số điện thoại
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="content"
                      id="content"
                      className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      onChange={handleChangeEvent}
                      required
                      defaultValue={bookingUpdate.content}
                    />
                    <label
                      htmlFor="content"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Nội dung
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group ">
                    <div class="mb-5">
                      <label
                        for="gender"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Giới tính
                      </label>

                      <div className="">
                        <input
                          onChange={handleChangeEvent}
                          type="radio"
                          id="contactChoice1"
                          name="gender"
                          value="Nam"
                          defaultValue={bookingUpdate.gender}
                        />
                        <label
                          for="contactChoice1"
                          className="pl-3  text-black"
                        >
                          Nam
                        </label>
                        <input
                          onChange={handleChangeEvent}
                          type="radio"
                          id="contactChoice2"
                          name="gender"
                          value="Nữ"
                          className="ml-3"
                          defaultValue={bookingUpdate.gender}
                        />
                        <label
                          for="contactChoice2"
                          className="pl-3  text-black"
                        >
                          Nữ
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="date"
                      name="createDate"
                      id="createDate"
                      className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      onChange={handleChangeEvent}
                      required
                      defaultValue={bookingUpdate.createDate}
                    />
                    <label
                      htmlFor="createDate"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Ngày tạo booking
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => updateData(bookingUpdate.id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update
                  </button>
                </form>
              </Box>
            </Modal>
          </>
        );
      },
    },
    {
      field: "buttonDelete",
      headerName: "Delete",
      flex: 0.5,
      headerAlign: "center",
      renderCell: ({ row: { id } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
          >
            <Button
              onClick={() => handleDelete(id)}
              startIcon={
                <DeleteOutlineIcon sx={{ color: "red", fontSize: "24px" }} />
              }
            />
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <div className="flex flex-row w-full h-max justify-between">
        <Header title="Booking" subtitle="Managing Booking" />
        <div
          onClick={() => setInsertOpen(true)}
          className="flex w-[100px] h-[40px] items-center justify-center text-white bg-[#3e4396] mt-5 rounded-md cursor-pointer hover:bg-[#3b82f680]"
        >
          Thống kê 1 ngày có bao nhiêu Booking
        </div>
        <Modal
          sx={{
            "& .MuiBackdrop-root": {
              backgroundColor: "transparent",
            },
          }}
          open={insertOpen}
          onClose={() => setInsertOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="w-full flex flex-row mb-5">
              <p className="text-center font-bold text-lg text-black mr-auto">
                Tìm trong 1 ngày
              </p>
              <IconButton onClick={() => setInsertOpen(false)}>
                <CloseIcon sx={{ color: "black" }} />
              </IconButton>
            </div>
            <form className="w-full flex flex-col">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="date"
                  name="bookDate"
                  id="bookDate"
                  className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  onChange={handleChangeInsertEvent}
                  value={insertDate.bookDate}
                  required
                />
                <label
                  for="bookDate"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Book Date
                </label>
              </div>

              <button
                type="submit"
                onClick={(e) => handleInsert(e)}
                className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[200px] h-[40px] mx-auto px-5 py-2.5 justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Insert
              </button>
            </form>
          </Box>
        </Modal>
      </div>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiButton-root": {
            color: "#FFFFFF",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={bookingData}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 200 },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Statistical;
