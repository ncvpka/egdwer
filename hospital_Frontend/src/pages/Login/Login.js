import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthProvider";

const Login = () => {
  let navigate = useNavigate();
  // const handleSubmit = async () => {
  //   let path = `/`;
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:8080/api/auth/signin",
  //       formData
  //     );
  //     const data = res.data;
  //     const token = data.accessToken;
  //     localStorage.setItem("token", token);
  //     console.log(localStorage.getItem("token"));
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   navigate(path);
  // };
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });
  // console.log(formData);

  // function handleChangeEvent(event) {
  //   const { name, value, type, checked } = event.target;
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // }
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let path = `/`;
    let pathAd = `/admin`;
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signin", {
        username,
        password,
      });
      const data = res.data;
      const token = data.accessToken;
      localStorage.setItem("token", token);
      const roles = data.roles;
      localStorage.setItem("roles", roles);
      const email = data.email;
      localStorage.setItem("email", email);
      const name = data.username;
      localStorage.setItem("name", name);
      // console.log("un", name)
      // console.log("em", email)
      // console.log("Response",
      //   email,
      //   data,
      //   name,
      //   roles[0],
      // );
      setAuth({ username, password, roles, token });
      setUserName("");
      setPassWord("");
    } catch (err) {
      if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
    if (localStorage.getItem("roles") === "ROLE_ADMIN") {
      navigate(pathAd);
    } else {
      navigate(path);
    }
  };
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Hoa Cuc Medical Service
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="username"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                    value={username}
                    required
                    maxLength={24}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassWord(e.target.value)}
                    value={password}
                    required
                    placeholder="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/Register"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
