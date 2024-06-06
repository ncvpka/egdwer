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
const Booking = () => {
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
      bookingID: "BKID49",
      bookDate: "1992-01-01T00:00:00.000+00:00",
      content: "IM SICK",
      patient: {
        id: 1,
        userID: 1,
        patientID: "P1",
        patientInfo: {
          id: 1,
          email: "nguyenchivu2003@gmail.com",
          name: "Chi Vu",
          age: 25,
          phone: "0868808602",
          gender: false,
        },
        delete: false,
      },
      delete: false,
    },
  ]);

  const [bookingUpdate, setBookingUpdate] = React.useState({
    id: 1,
    bookingID: "BK123",
    bookDate: null,
    content: null,
    patient: {
      id: null,
      userID: null,
      patientID: null,
      patientInfo: {
        id: null,
        email: null,
        name: null,
        age: null,
        phone: null,
        gender: null,
      },
      delete: null,
    },
    delete: null,
  });
  const updateData = async (e, index) => {
    e.preventDefault();
    window.location.reload();
    handleClose();
    const token = localStorage.getItem("token");
    await axios
      .put(
        "http://localhost:8080/api/v1/booking/update/" + index,
        bookingUpdate,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
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
    await axios.get("http://localhost:8080/api/v1/booking/delete/" + index, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
      .get("http://localhost:8080/api/v1/booking", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setBookingData(response.data.data);
      });
  }, []);

  const handleInsert = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    window.location.reload();
    await axios.post(
      "http://localhost:8080/api/v1/booking/insert",
      insertData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };
  const [insertOpen, setInsertOpen] = React.useState(false);

  const [insertData, setInsertData] = React.useState([
    {
      bookingID: "",
      bookDate: "",
      content: "",
      patient: {
        patientID: "P5",
      },
    },
  ]);
  function handleChangeInsertEvent(event) {
    const { name, value } = event.target;
    setInsertData((prevInsertData) => {
      return {
        ...prevInsertData,
        [name]: value,
        patient: {
          ...prevInsertData.patient,
          [name]: value,
        },
      };
    });
  }

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "bookingID",
      headerName: "Booking ID",
      flex: 1,
    },
    {
      field: "bookDate",
      headerName: "Book Date",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "content",
      headerName: "Content",
      flex: 1,
    },
    {
      field: "patientID",
      headerName: "Patient ID",
      flex: 1,
      valueGetter: (params) => {
        return params.row?.patient?.id;
      },
    },
    {
      field: "patientName",
      headerName: "Patient Name",
      flex: 1,
      valueGetter: (params) => {
        return params.row?.patient?.patientInfo?.name;
      },
    },
    {
      field: "delete",
      headerName: "Delete status",
      flex: 1,
    },
    {
      field: "edit",
      headerName: "Edit",
      flex: 0.5,
      headerAlign: "center",
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
                <div className="w-full flex flex-row mb-5">
                  <p className="text-center font-bold text-lg text-black mr-auto">
                    Update Booking
                  </p>
                  <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon sx={{ color: "black" }} />
                  </IconButton>
                </div>
                <form className="w-full">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="bookingID"
                      onChange={handleChangeEvent}
                      id="bookingID"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      defaultValue={bookingUpdate.bookingID}
                      required
                    />
                    <label
                      for="bookingID"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Booking ID
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="bookDate"
                      id="floating_password"
                      onChange={handleChangeEvent}
                      defaultValue={bookingUpdate.bookDate}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_password"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Book Date
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="content"
                      id="email"
                      className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      onChange={handleChangeEvent}
                      required
                      value={bookingUpdate.content}
                    />
                    <label
                      for="email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Content
                    </label>
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => updateData(e, bookingUpdate.id)}
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
    {
      field: "buttonView",
      headerName: "View",
      flex: 0.5,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
          >
            <Button
              onClick={() => handleRowClick(params.row.id)}
              startIcon={
                <VisibilityOutlinedIcon
                  sx={{ color: "blue", fontSize: "24px" }}
                />
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
          ADD
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
                Insert Patient
              </p>
              <IconButton onClick={() => setInsertOpen(false)}>
                <CloseIcon sx={{ color: "black" }} />
              </IconButton>
            </div>
            <form className="w-full flex flex-col">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="bookingID"
                  onChange={handleChangeInsertEvent}
                  id="floating_name"
                  value={insertData.bookingID}
                  className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
                <label
                  for="floating_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Booking Id
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="content"
                  id="email"
                  className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  onChange={handleChangeInsertEvent}
                  value={insertData.content}
                  required
                />
                <label
                  for="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Content
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="date"
                  name="bookDate"
                  id="email"
                  className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  onChange={handleChangeInsertEvent}
                  value={insertData.bookDate}
                  required
                />
                <label
                  for="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Book Date
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="patientID"
                  id="email"
                  className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={handleChangeInsertEvent}
                  value={insertData.patient?.id}
                  required
                />
                <label
                  for="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Patient ID
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

export default Booking;
