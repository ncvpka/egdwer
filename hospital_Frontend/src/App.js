import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
// import BookingDetails from "./bookingDetails/BookingDetails";
// import Booking from "./scenes/Booking";
// import Calendar from "./scenes/calendar/calendar";
// import Dashboard from "./scenes/dashboard";
// import Doctor from "./scenes/Doctor";
// import FAQ from "./scenes/faq";
// import Sidebar from "./scenes/global/Sidebar";
// import Topbar from "./scenes/global/Topbar";
// import Patient from "./scenes/Patient";
// import Record from "./scenes/Record";
// import User from "./scenes/user";
import React from "react";
import Sreach_booking from './sreach_booking/sreach_booking';
import { ColorModeContext, useMode } from "./theme";
import BKHome from "./pages/new/BookingAll/BKHome";
import BKHopital from "./pages/new/BookingAll/BKHopital";
import BKEminationPackage from "./pages/new/BookingAll/BKEminationPackage";
import QuickBooking from './pages/new/BookingAll/QuickBooking';
import Product1 from "./pages/new/SingleProduct/Product1";
import Product2 from "./pages/new/SingleProduct/Product2";
import Product3 from './pages/new/SingleProduct/Product3';
import Product4 from './pages/new/SingleProduct/Product4';


const Home = React.lazy(() => import("./pages/Home/Home"));
const Layout = React.lazy(() => import("./pages/Layouts/Layout"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Register = React.lazy(() => import("./pages/Regist/Register"));
const None = React.lazy(() => import("./pages/None/None"));
const Intro = React.lazy(() => import("./pages/new/Intro"));
const Service = React.lazy(() => import("./pages/new/Service"));
const Major = React.lazy(() => import("./pages/new/Major"));



const About = React.lazy(() => import("./pages/About/About"));
const Blogs = React.lazy(() => import("./pages/Blogs/Blogs"));

const Dashboard = React.lazy(() => import("./scenes/dashboard"));
const BookingDetails = React.lazy(() =>
  import("./bookingDetails/BookingDetails")
);
const Booking = React.lazy(() => import("./scenes/Booking"));
const Calendar = React.lazy(() => import("./scenes/calendar/calendar"));
const Doctor = React.lazy(() => import("./scenes/Doctor"));
const FAQ = React.lazy(() => import("./scenes/faq"));
const Sidebar = React.lazy(() => import("./scenes/global/Sidebar"));
const Topbar = React.lazy(() => import("./scenes/global/Topbar"));
const Patient = React.lazy(() => import("./scenes/Patient"));
const Record = React.lazy(() => import("./scenes/Record"));
const User = React.lazy(() => import("./scenes/user"));
const Appointment = React.lazy(() => import("./scenes/appointment"));
const Statistical = React.lazy(() => import("./scenes/statistical/index"));



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  function ThemeRoutes() {
    return (
      <ColorModeContext.Provider value={{ colorMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Outlet />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <React.Suspense fallback={<>...</>}>
            <ThemeRoutes />
          </React.Suspense>
        }
      >
        <Route
          index
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="user"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <User />
            </React.Suspense>
          }
        />
        <Route
          path="booking"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Booking />
            </React.Suspense>
          }
        />
        <Route
          path="booking/details"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <BookingDetails />
            </React.Suspense>
          }
        />
        <Route
          path="patient"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Patient />
            </React.Suspense>
          }
        />
        <Route
          path="doctor"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Doctor />
            </React.Suspense>
          }
        />
        <Route
          path="record"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Record />
            </React.Suspense>
          }
        />
        <Route
          path="faq"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <FAQ />
            </React.Suspense>
          }
        />
        <Route
          path="calendar"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Calendar />
            </React.Suspense>
          }
        />
        <Route
          path="appointment"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Appointment />
            </React.Suspense>
          }
        />
        <Route
          path="statistical"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Statistical />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Navigate to="/login" />
            </React.Suspense>
          }
        />
      </Route>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...</>}>
            <Layout />
          </React.Suspense>
        }
      >
        <Route
          index
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Register />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <None />
            </React.Suspense>
          }
        />

        <Route
          path="/Service"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Service />
            </React.Suspense>
          }
        />
        <Route
          path="/major"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Major />
            </React.Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="/blogs"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Blogs />
            </React.Suspense>
          }
        />
        <Route
          path="/sreach_booking"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Sreach_booking />
            </React.Suspense>
          }
        />
        <Route
          path="/bookingHospital"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <BKHopital />
            </React.Suspense>
          }
        />
        <Route
          path="/booking_home"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <BKHome />
            </React.Suspense>
          }
        />
        <Route
          path="/BKEminationPackage"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <BKEminationPackage />
            </React.Suspense>
          }
        />
        <Route
          path="/quick_booking"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <QuickBooking />
            </React.Suspense>
          }
        />
        <Route
          path="/Product1"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Product1 />
            </React.Suspense>
          }
        />
        <Route
          path="/Product2"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Product2 />
            </React.Suspense>
          }
        />
        <Route
          path="/Product3"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Product3 />
            </React.Suspense>
          }
        />
        <Route
          path="/Product4"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Product4 />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
