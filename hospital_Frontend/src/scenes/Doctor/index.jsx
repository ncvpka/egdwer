import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Modal, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import React from "react";
import "../../App.css";
import Header from "../../components/Header";
import { tokens } from "../../theme";
const Doctor = () => {
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

  const [doctorData, setDoctorData] = React.useState([
    {
      id: 1,
      gender: true,
      doctorID: "DCT354",
      userID: 1,
      name: "Chi Vu",
      address: "Ha Noi",
      phone: "01252128634",
      email: "DCT354",
      record: null,
      doctorMajor: ["Ears"],
      delete: false,
    },
  ]);

  const [doctorUpdate, setDoctorUpdate] = React.useState([
    {
      id: 1,
      gender: true,
      doctorID: "DCT354",
      userID: 1,
      name: "Chi Vu",
      address: "Ha Noi",
      phone: "01252128634",
      email: "DCT354",
      record: null,
      doctorMajor: ["Ears"],
      delete: false,
    },
  ]);
  const updateData = async (index) => {
    window.location.reload();
    handleClose();
    const token = localStorage.getItem("token");
    console.log(index);
    await axios
      .put(
        "http://localhost:8080/api/v1/doctor/update/" + index,
        doctorUpdate,
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
    console.log(index);
  };
  const handleOpen = (id) => {
    setOpen(true);
    for (let i = 0; i < doctorData.length; i++) {
      if (doctorData[i].id === id) {
        setDoctorUpdate(doctorData[i]);
        break;
      }
    }
  };
  function handleChangeEvent(event) {
    const { name, value, type, checked } = event.target;
    setDoctorUpdate((prevDoctorUpdate) => {
      return {
        ...prevDoctorUpdate,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  const handleDelete = async (index) => {
    const token = localStorage.getItem("token");
    window.location.reload();
    const res = await axios.get(
      "http://localhost:8080/api/v1/doctor/delete/" + index,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/v1/doctor", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setDoctorData(response.data.data);
      });
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "doctorID",
      headerName: "Doctor ID",
      flex: 1,
    },
    {
      field: "userID",
      headerName: "User ID",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "doctorMajor",
      headerName: "Major",
      flex: 2,
      renderCell: ({ row: { doctorMajor } }) => {
        console.log(doctorMajor);
        return (
          <div className="py-2 w-full space-y-2">
            {doctorMajor.map((item) => (
              <Box
                sx={{ display: "flex", width: "90%", alignItems: "center" }}
                borderRadius="4px"
              >
                <Typography sx={{ fontSize: "14px" }}>{item}</Typography>
              </Box>
            ))}
          </div>
        );
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
                  Update Patient
                </p>
                <form className="w-full">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChangeEvent}
                      id="floating_name"
                      className="block text-md py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      defaultValue={doctorUpdate.name}
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
                      type="text"
                      name="address"
                      id="floating_password"
                      onChange={handleChangeEvent}
                      defaultValue={doctorUpdate.address}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_password"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Address
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChangeEvent}
                      required
                      defaultValue={doctorUpdate.email}
                    />
                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChangeEvent}
                      required
                      defaultValue={doctorUpdate.phone}
                    />
                    <label
                      htmlFor="phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => updateData(doctorUpdate.id)}
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
      flex: 1,
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
    <>
      <Box m="20px">
        <Header title="Doctor" subtitle="Managing the Doctors" />
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
            getRowHeight={() => "auto"}
            checkboxSelection
            rows={doctorData}
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
    </>
  );
};

export default Doctor;
