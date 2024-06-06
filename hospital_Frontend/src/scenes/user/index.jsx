import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import axios from "axios";
import React from "react";
import Header from "../../components/Header";
import "../../App.css";
const User = () => {
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
  const [userData, setUserData] = React.useState([
    {
      id: 1,
      userName: "chivu",
      passWord: "",
      email: "nguyenchivu2003@gmail.com",
      createdTime: null,
      roles: [{ id: 1, name: "ROLE_ADMIN" }],
      active: true,
    },
  ]);

  const [userUpdate, setUserUpdate] = React.useState([
    {
      id: 1,
      userName: "chivu",
      passWord: "",
      email: "nguyenchivu2003@gmail.com",
      createdTime: null,
      roles: [
        { id: 1, name: "ROLE_ADMIN" },
        { id: 2, name: "ROLE_USER" },
      ],
      active: true,
    },
  ]);
  const updateData = async (e, index) => {
    e.preventDefault();
    window.location.reload();
    handleClose();
    const token = localStorage.getItem("token");
    await axios
      .put("http://localhost:8080/api/v1/users/update/" + index, userUpdate, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleOpen = (id) => {
    setOpen(true);
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].id === id) {
        setUserUpdate(userData[i]);
        break;
      }
    }
  };
  function handleChangeEvent(event) {
    const { name, value, type, checked } = event.target;
    setUserUpdate((prevUserUpdate) => {
      return {
        ...prevUserUpdate,
        [name]: type === "checkbox" ? prevUserUpdate?.roles?.slice(-1) : value,
      };
    });
  }
  console.log("user update role", userUpdate.roles);
  const handleDelete = async (index) => {
    const token = localStorage.getItem("token");
    window.location.reload();
    const res = await axios.get(
      "http://localhost:8080/api/v1/users/delete/" + index,
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
      .get("http://localhost:8080/api/v1/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserData(response.data.data);
      });
  }, []);
  console.log(userUpdate);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "userName",
      headerName: "Username",
      flex: 1,
      headerAlign: "left",
    },
    {
      field: "passWord",
      headerName: "Password",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerAlign: "left",
    },
    {
      field: "createdTime",
      headerName: "Created Time",
      flex: 1,
      headerAlign: "left",
    },
    {
      field: "active",
      headerName: "Active status",
      headerAlign: "left",
      flex: 1,
    },
    {
      field: "roles",
      headerName: "Role",
      flex: 3,
      headerAlign: "left",
      renderCell: ({ row: { roles } }) => {
        return (
          <>
            {roles.map((item) => (
              <Box
                width="32%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                  item.name === "ROLE_ADMIN"
                    ? colors.greenAccent[600]
                    : item.name === "ROLE_MODERATOR"
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
              >
                {item.name === "ROLE_ADMIN" && (
                  <AdminPanelSettingsOutlinedIcon />
                )}
                {item.name === "ROLE_MODERATOR" && <SecurityOutlinedIcon />}
                {item.name === "ROLE_USER" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  {item.name === "ROLE_ADMIN"
                    ? "Admin"
                    : item.name === "ROLE_MODERATOR"
                    ? "Mod"
                    : "User"}
                </Typography>
              </Box>
            ))}
          </>
        );
      },
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
                <div className="w-full flex flex-row mb-2">
                  <p className="text-center font-bold text-lg text-black mr-auto">
                    Update User Roles
                  </p>
                  <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon sx={{ color: "black" }} />
                  </IconButton>
                </div>
                <form className="w-full">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex justify-center items-center p-2">
                      <input
                        className="w-[20px] h-[20px]"
                        type="checkbox"
                        id="admin"
                        value="ROLE_ADMIN"
                      />
                      <label
                        className="text-black font-bold text-base ml-2"
                        htmlFor="admin"
                      >
                        Admin
                      </label>
                    </div>
                    <div className="flex justify-center items-center p-2">
                      <input
                        className="w-[20px] h-[20px]"
                        type="checkbox"
                        name="roles"
                        id="mod"
                        onChange={handleChangeEvent}
                        value="ROLE_MODERATOR"
                      />
                      <label
                        className="text-black font-bold text-base ml-2"
                        htmlFor="mod"
                      >
                        Mod
                      </label>
                    </div>
                    <div className="flex justify-center items-center p-2">
                      <input
                        className="w-[20px] h-[20px]"
                        type="checkbox"
                        name="roles"
                        onChange={handleChangeEvent}
                        id="user"
                        value="ROLE_USER"
                      />
                      <label
                        className="text-black font-bold text-base ml-2"
                        htmlFor="user"
                      >
                        User
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => updateData(e, userUpdate.id)}
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
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
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
          rows={userData}
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

export default User;
