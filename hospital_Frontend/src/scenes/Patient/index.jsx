import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, IconButton, Modal, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import React from "react";
import "../../App.css";
import Header from "../../components/Header";
import { tokens } from "../../theme";
const Patient = () => {
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

  const [patientData, setPatientData] = React.useState([
    {
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
  ]);

  const [patientUpdate, setPatientUpdate] = React.useState([
    {
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
  ]);
  const updateData = async (index) => {
    window.location.reload();
    handleClose();
    const token = localStorage.getItem("token");
    console.log(index);
    await axios
      .put(
        "http://localhost:8080/api/v1/patient/update/" + index,
        patientUpdate,
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
    for (let i = 0; i < patientData.length; i++) {
      if (patientData[i].id === id) {
        setPatientUpdate(patientData[i]);
        break;
      }
    }
  };
  console.log(patientUpdate);
  function handleChangeEvent(event) {
    const { name, value, type, checked } = event.target;
    setPatientUpdate((prevPatientUpdate) => {
      return {
        ...prevPatientUpdate,
        patientInfo: {
          ...prevPatientUpdate.patientInfo,
          [name]: type === "checkbox" ? checked : value,
        },
      };
    });
  }

  const [insertData, setInsertData] = React.useState([
    {
      userID: 1,
      patientID: "",
      patientInfo: {
        email: "",
        name: "",
        age: 25,
        phone: "",
        gender: false,
      },
    },
  ]);
  function handleChangeInsertEvent(event) {
    const { name, value } = event.target;
    console.log(insertData);
    setInsertData((prevInsertData) => {
      return {
        ...prevInsertData,
        [name]: value,
        patientInfo: {
          ...prevInsertData.patientInfo,
          [name]: value,
        },
      };
    });
  }

  const handleInsert = async (e) => {
    const token = localStorage.getItem("token");
    window.location.reload();
    const res = await axios.post(
      "http://localhost:8080/api/v1/patient/insert",
      insertData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  const [insertOpen, setInsertOpen] = React.useState(false);

  const handleDelete = async (index) => {
    const token = localStorage.getItem("token");
    window.location.reload();
    const res = await axios.get(
      "http://localhost:8080/api/v1/patient/delete/" + index,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };
  React.useEffect(() => {
    const postData = async () => {
      const res = await axios.post("http://localhost:8080/api/auth/signin", {
        username: " ",
        password: " ",
      });
      const data = res.data;
      const token = data.accessToken;
      localStorage.setItem("token", token);
    };
    postData();

    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/v1/patient", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setPatientData(response.data.data);
      });
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "userID",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "patientID",
      headerName: "Patient ID",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "patientName",
      headerName: "Name",
      flex: 1,
      valueGetter: (params) => {
        return params.row?.patientInfo?.name;
      },
    },
    {
      field: "patientAge",
      headerName: "Age",
      flex: 1,
      valueGetter: (params) => {
        return params.row?.patientInfo?.age;
      },
    },
    {
      field: "phone",
      headerName: "Phone",
      valueGetter: (params) => {
        return params.row?.patientInfo?.phone;
      },
    },
    {
      field: "patientEmail",
      headerName: "Email",
      flex: 2,
      valueGetter: (params) => {
        return params.row?.patientInfo?.email;
      },
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
      valueGetter: (params) => {
        return params.row?.patientInfo?.gender ? "Male" : "Female";
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
                <div className="w-full flex flex-row mb-5">
                  <p className="text-center font-bold text-lg text-black mr-auto">
                    Update Patient
                  </p>
                  <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon sx={{ color: "black" }} />
                  </IconButton>
                </div>
                <form className="w-full">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChangeEvent}
                      id="floating_name"
                      className="block text-md py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      defaultValue={patientUpdate.patientInfo?.name}
                      required
                    />
                    <label
                      for="floating_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="number"
                      name="age"
                      id="floating_password"
                      onChange={handleChangeEvent}
                      defaultValue={patientUpdate.patientInfo?.age}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_password"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Age
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
                      defaultValue={patientUpdate.patientInfo?.email}
                    />
                    <label
                      for="email"
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
                      defaultValue={patientUpdate.patientInfo?.phone}
                    />
                    <label
                      for="phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone
                    </label>
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => updateData(patientUpdate.id)}
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
  console.log(insertData);
  return (
    <>
      <Box m="20px">
        <div className="flex flex-row w-full h-max justify-between">
          <Header title="Patient" subtitle="Managing Patients" />
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
              <form className="flex flex-col">
                <div className="-mx-3 md:flex">
                  <div className="w-1/2 mb-0">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2 text-black"
                      for="grid-first-name"
                    >
                      User ID
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-black border border-red rounded py-3 px-4 mb-3"
                      id="grid-first-name"
                      type="text"
                      name="userID"
                      onChange={handleChangeInsertEvent}
                      value={insertData.userID}
                    />
                  </div>
                  <div className="mw-1/2 px-3 text-black">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Patient ID
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded py-3 px-4"
                      id="grid-last-name"
                      type="text"
                      name="patientID"
                      onChange={handleChangeInsertEvent}
                      value={insertData.patientID}
                    />
                  </div>
                </div>
                <div className="-mx-2 md:flex">
                  <div className="w-full">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2 text-black"
                      for="grid-password"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded py-3 px-4 mb-3"
                      id="grid-password"
                      type="text"
                      name="name"
                      onChange={handleChangeInsertEvent}
                      value={insertData.patientInfo?.name}
                    />
                  </div>
                </div>
                <div className="-mx-2 md:flex">
                  <div className="w-full">
                    <label
                      className="block uppercase tracking-wide  text-xs font-bold mb-2 text-black"
                      for="grid-password"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-ful l bg-grey-lighter text-black border border-grey-lighter rounded py-3 px-4 mb-3"
                      id="grid-password"
                      type="email"
                      name="email"
                      onChange={handleChangeInsertEvent}
                      value={insertData.patientInfo?.email}
                    />
                  </div>
                </div>
                <div className="-mx-2 md:flex">
                  <div className="w-full">
                    <label
                      className="block uppercase tracking-wide text-black text-xs font-bold mb-2 text-black"
                      for="grid-password"
                    >
                      Phone
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded py-3 px-4 mb-3"
                      id="grid-password"
                      type="text"
                      name="phone"
                      onChange={handleChangeInsertEvent}
                      value={insertData.patientInfo?.phone}
                    />
                  </div>
                </div>
                <div className="-mx-5 md:flex mb-2">
                  <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-black"
                      for="grid-city"
                    >
                      Age
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-900 rounded py-3 px-4 text-black text-gray-900"
                      id="grid-city"
                      type="text"
                      name="age"
                      onChange={handleChangeInsertEvent}
                      value={insertData.patientInfo?.age}
                    />
                  </div>
                  <div className="md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-black"
                      for="grid-state"
                    >
                      Gender
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-grey-900 border border-grey-900 text-grey-darker py-3 px-4 pr-8 rounded text-black"
                        id="grid-state"
                        name="gender"
                        onChange={handleChangeInsertEvent}
                        value={insertData.patientInfo?.gender}
                      >
                        <option value={true}>Male</option>
                        <option value={false}>Female</option>
                      </select>
                    </div>
                  </div>
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
            getRowHeight={() => "auto"}
            checkboxSelection
            rows={patientData}
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

export default Patient;
