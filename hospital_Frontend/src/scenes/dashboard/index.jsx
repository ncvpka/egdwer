import { BusinessCenter } from "@mui/icons-material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HotelIcon from "@mui/icons-material/Hotel";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import axios from "axios";
import React from "react";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/v1/booking", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setBookingData(response.data.data);
      });
  }, []);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Total patient"
            icon={
              <HotelIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                  marginRight: "auto",
                  fontSize: "70px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="200"
            subtitle="Total doctor"
            progress="0.50"
            increase="+21%"
            icon={
              <LocalHospitalIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                  marginRight: "auto",
                  fontSize: "70px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="250"
            subtitle="New User"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                  marginRight: "auto",
                  fontSize: "70px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="50"
            subtitle="Appointments"
            icon={
              <BusinessCenter
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                  marginRight: "auto",
                  fontSize: "70px",
                }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Patient
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                12,361
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Doctor
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          overflow="scroll"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h3" fontWeight="600">
            Booking
          </Typography>
          <table className="w-full text-sm text-left text-white dark:white table-auto mt-5">
            <thead
              className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-white text-center"
              style={{ backgroundColor: "#4cceac" }}
            >
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Content
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((item) => (
                <tr className="border-b bg-gray-700 text-center">
                  <td className="px-6 py-4 text-center flex flex-row items-center">
                    <img
                      src="https://i1.sndcdn.com/avatars-0QCRofC3yRV0mkpa-6XQLMA-t500x500.jpg"
                      className="w-8 mr-2"
                      style={{ borderRadius: "50%" }}
                    ></img>
                    <p className="">{item.patient?.patientInfo?.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    {item.patient?.gender ? "Male" : "Female"}
                  </td>
                  <td className="px-6 py-4">{item.bookDate}</td>
                  <td className="px-6 py-4">{item.content}</td>
                  <td className="px-6 py-4 flex justify-center">
                    <HighlightOffIcon sx={{ color: "red", fontSize: "30px" }} />
                    <VisibilityOutlinedIcon
                      sx={{ color: "blue", fontSize: "30px" }}
                    />
                    <CheckCircleOutlinedIcon
                      sx={{ color: "green", fontSize: "30px" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Patient Review
          </Typography>
          <Box
            height="200px"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className="flex flex-row items-center">
              <img
                className="w-12 mr-2"
                style={{ borderRadius: "50%" }}
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
              />
              <div className="mr-auto">
                <p className="font-bold text-white text-base">Dr Phan Anh</p>
                <p className="text-gray-400">Psychiatry</p>
                <p className="text-yellow-300">★★★★★</p>
              </div>
              <p className="text-gray-400">150 patient</p>
            </div>
            <div className="flex flex-row items-center">
              <img
                className="w-12 mr-2"
                style={{ borderRadius: "50%" }}
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
              />
              <div className="mr-auto">
                <p className="font-bold text-white text-base">Dr Phan Anh</p>
                <p className="text-gray-400">Psychiatry</p>
                <p className="text-yellow-300">★★★★★</p>
              </div>
              <p className="text-gray-400">150 patient</p>
            </div>
            <div className="flex flex-row items-center">
              <img
                className="w-12 mr-2"
                style={{ borderRadius: "50%" }}
                src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
              />
              <div className="mr-auto">
                <p className="font-bold text-white text-base">Dr Phan Anh</p>
                <p className="text-gray-400">Psychiatry</p>
                <p className="text-yellow-300">★★★★★</p>
              </div>
              <p className="text-gray-400">150 patient</p>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
