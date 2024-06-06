import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, IconButton, Modal, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import React from "react";
import "../../App.css";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
const Record = () => {
  const [open, setOpen] = React.useState(false);
  const [insertOpen, setInsertOpen] = React.useState(false);

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

  const [recordData, setRecordData] = React.useState([
    {
      id: 1,
      recordID: "RE12  4",
      illnessContent: "Nose",
      conclusion: "Drink medicine for two weeks",
      patient: {
        id: 1,
        userID: 1,
        patientID: "P1",
        patientInfo: {
          id: 1,
          email: "nguyenchivu2003@gmail.com",
          name: "Chi Vu",
          age: 18,
          phone: "0868808602",
          gender: false,
        },
        delete: true,
      },
      doctor: {
        id: 1,
        doctorID: "DCT354",
        userID: 1,
        name: "Chi Vu",
        address: "Ha Noi",
        phone: "01252128634",
        email: "DCT354@gmail.com",
        gender: true,
        likedDoctor: [
          {
            id: 1,
            majorName: "Ears",
          },
        ],
        delete: false,
      },
      delete: false,
    },
  ]);

  const [recordUpdate, setRecordUpdate] = React.useState([
    {
      id: 1,
      recordID: "RE124",
      illnessContent: "Nose",
      conclusion: "Drink medicine for two weeks",
      patient: {
        id: 1,
        userID: 1,
        patientID: "P1",
        patientInfo: {
          id: 1,
          email: "nguyenchivu2003@gmail.com",
          name: "Chi Vu",
          age: 18,
          phone: "0869236663",
          gender: false,
        },
        delete: true,
      },
      doctor: {
        id: 1,
        doctorID: "DCT354",
        userID: 1,
        name: "Chi Vu",
        address: "Ha Noi",
        phone: "01252128634",
        email: "DCT354@gmail.com",
        gender: true,
        likedDoctor: [
          {
            id: 1,
            majorName: "Ears",
          },
        ],
        delete: false,
      },
      delete: false,
    },
  ]);
  const [insertData, setInsertData] = React.useState([
    {
      recordID: "",
      illnessContent: "",
      conclusion: "",
      patient: {
        patientID: "",
      },
      doctor: {
        doctorID: "",
      },
    },
  ]);
  const updateData = async (e, index) => {
    window.location.reload();
    handleClose();
    const token = localStorage.getItem("token");
    console.log(index);
    await axios
      .put(
        "http://localhost:8080/api/v1/record/update/" + index,
        recordUpdate,
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
    for (let i = 0; i < recordData.length; i++) {
      if (recordData[i].id === id) {
        setRecordUpdate(recordData[i]);
        break;
      }
    }
  };
  function handleChangeEvent(event) {
    const { name, value } = event.target;
    console.log("event value", event.target.name);
    console.log("event value", event.target.value);

    // setRecordUpdate((prevRecordUpdate) => {
    //   return {
    //     ...prevRecordUpdate,
    //     [name] : value,
    //   };
    // });
    setRecordUpdate({ ...recordUpdate, [name]: value });
  }

  function handleChangeInsertEvent(event) {
    const { name, value } = event.target;
    console.log(insertData);

    setInsertData((prevInsertData) => {
      return {
        ...prevInsertData,
        [name]: value,
        patient: {
          ...prevInsertData.patient,
          [name]: value,
        },
        doctor: {
          ...prevInsertData.doctor,
          [name]: value,
        },
      };
    });
  }

  const handleInsert = async (e) => {
    const token = localStorage.getItem("token");
    window.location.reload();
    const res = await axios.post(
      "http://localhost:8080/api/v1/record/insert",
      insertData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  const handleDelete = async (index) => {
    const token = localStorage.getItem("token");
    window.location.reload();
    const res = await axios.get(
      "http://localhost:8080/api/v1/record/delete/" + index,
      { headers: { Authorization: `Bearer ${token}` } }
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
      .get("http://localhost:8080/api/v1/record", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setRecordData(response.data.data);
      });
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "recordID",
      headerName: "Record ID",
      flex: 1,
    },
    {
      field: "illnessContent",
      headerName: "Illness Content",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "conclusion",
      headerName: "Conclusion",
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
      field: "doctorID",
      headerName: "Doctor ID",
      flex: 1,
      valueGetter: (params) => {
        return params.row?.doctor?.id;
      },
    },
    {
      field: "doctorName",
      headerName: "Doctor Name",
      flex: 1,
      valueGetter: (params) => {
        return params.row?.doctor?.name;
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
                    Update Record
                  </p>
                  <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon sx={{ color: "black" }} />
                  </IconButton>
                </div>
                <form className="w-full flex flex-col">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="recordID"
                      onChange={handleChangeEvent}
                      id="floating_name"
                      className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=""
                      defaultValue={recordUpdate.recordID}
                      required
                    />
                    <label
                      for="floating_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Record Id
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="illnessContent"
                      id="floating_password"
                      onChange={handleChangeEvent}
                      defaultValue={recordUpdate.illnessContent}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_password"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Illness Content
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
                      defaultValue={recordUpdate.conclusion}
                    />
                    <label
                      for="email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Conclusion
                    </label>
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => updateData(e, recordUpdate.id)}
                    className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[200px] h-[40px] mx-auto px-5 py-2.5 justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    <Box m="20px">
      <div className="flex flex-row w-full h-max justify-between">
        <Header title="TEAM" subtitle="Managing the Team Members" />
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
                Insert Record
              </p>
              <IconButton onClick={() => setInsertOpen(false)}>
                <CloseIcon sx={{ color: "black" }} />
              </IconButton>
            </div>
            <form className="w-full flex flex-col">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="recordID"
                  onChange={handleChangeInsertEvent}
                  id="floating_name"
                  value={insertData.recordID}
                  className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
                <label
                  for="floating_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Record Id
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="illnessContent"
                  id="floating_password"
                  onChange={handleChangeInsertEvent}
                  value={insertData.illnessContent}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Illness Content
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="conclusion"
                  id="email"
                  className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  onChange={handleChangeInsertEvent}
                  value={insertData.conclusion}
                  required
                />
                <label
                  for="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Conclusion
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
                  value={insertData.patient?.patientID}
                  required
                />
                <label
                  for="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Patient ID
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="doctorID"
                  id="email"
                  className="block text-md py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black text-md dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  onChange={handleChangeInsertEvent}
                  value={insertData.doctor?.doctorID}
                  required
                />
                <label
                  for="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Doctor ID
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
          rows={recordData}
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

export default Record;
