import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const navigate = useNavigate();
  const [newErorr, setNewErorr] = useState("Tài khoản hoặc Email đã tồn tại")
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
    role: ["ROLE_USER"],
  })
  const { userName, password, email } = newUser;
  const handleInput = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(newUser)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/signup", newUser)
        .then((res) => {
          console.log(res.data)
          if (res.message === "User registered successfully!") { navigate("/login") }
          else { alert(newErorr) }
        })
    } catch (error) {
      console.log(error)
    }

  }
  //  http://localhost:8080/api/auth/signup
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Đăng kí
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên đăng nhập</label>
                  <input type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tên đăng nhập của bạn"
                    required=""
                    onChange={(e) => handleInput(e)} />
                </div>
                <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                  <input type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => handleInput(e)} />
                </div>
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={(e) => handleInput(e)} />
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Tạo tài khoản</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Bạn đã có tài khoản? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to="/login">Đăng nhập ngay</Link></a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Register;
