import "../../assets/Styles/style.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ApartmentIcon from "@mui/icons-material/Apartment";
import RedeemIcon from "@mui/icons-material/Redeem";
import { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import "pure-react-carousel/dist/react-carousel.es.css";
export default function About() {
  const [count, setCount] = useState(0);
  return (
    <div className="container-about">
      <header className=" flex justify-center flex-col items-center text-center background-change bg-center bg-cover bg-no-repeat bg-[length:900px_900px] content-center ">
        <h1 className="text-white text-3xl uppercase">About</h1>
        <span className="text-white">
          HOME / <span className="text-gray-500">ABOUT</span>
        </span>
      </header>
      <main className="w-5/5 m-auto">
        <section className="flex content-center doctor-section justify-center w-4/5">
          <img
            className="images-aside mr-20"
            src="https://sovetclub.ru/tim/d607b844f383eb650e03a642062599ad.jpg"
          ></img>
          <aside className="aside-doctor">
            <p className="uppercase text-sm text-gray-600">
              welcome to hospitals
            </p>
            <p className="uppercase font-bold text-2xl">
              BEST MEDICAL & HEALTH CARE NEEDS TO OUR PATIENTS
            </p>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              volutpat rutrum eros amet sollicitudin interdum. Suspendisse
              pulvinar, velit nec pharetra interdum, ante tellus ornare mi, et
              mollis tellus neque vitae elit. Mauris adipiscing mauris fringilla
              turpis interdum sed pulvinar nisi malesuada. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <p className="mt-3 text-sm">
              Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.
              Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
            <button className="btn-hover mt-10 text-white font-bold py-2 border-solid px-4 border-2 uppercase border-primary-1000">
              Read more
            </button>
          </aside> 
        </section>
        <section className="best-section bg-black bg-primary-500 flex ">
          <div className="w-2/4 px-24 py-16">
            <h2 className="text-white text-md font-bold text-lg mb-2">
              WHY WE ARE BEST
            </h2>
            <p className="text-white text-md mb-8">
              Cras dapibus Vivamus elementum semper nisi Aenean vulputate
            </p>
            <div className="flex">
              <div className="w-24 h-20 rounded-div border border-solid border-white">
                <ThumbUpIcon
                  sx={{ fontSize: 40, color: "white", mt: "18px" }}
                />
              </div>
              <aside className="ml-9">
                <p className="font-bold text-white text-lg">
                  WELL EXPERIENCED DOCTORS
                </p>
                <p className="text-white text-md">
                  Cras dapibus Vivamus elementum semper nisi Aenean vulputate
                  eleifend tellus Aenean.
                </p>
              </aside>
            </div>
            <div className="flex mt-8">
              <div className="w-24 h-20 rounded-div border border-solid border-white">
                <AssignmentIcon
                  sx={{ fontSize: 40, color: "white", mt: "18px" }}
                />
              </div>
              <aside className="ml-9">
                <p className="font-bold text-white text-lg">
                  FREE MEDICAL COUNSELING
                </p>
                <p className="text-white text-md">
                  Cras dapibus Vivamus elementum semper nisi Aenean vulputate
                  eleifend tellus Aenean.
                </p>
              </aside>
            </div>
            <div className="flex mt-8">
              <div className="w-24 h-20 rounded-div border border-solid border-white">
                <WifiTetheringIcon
                  sx={{ fontSize: 40, color: "white", mt: "18px" }}
                />
              </div>
              <aside className="ml-9">
                <p className="font-bold text-white text-lg">
                  ONLINE BILL PAYMENT
                </p>
                <p className="text-white text-md">
                  Cras dapibus Vivamus elementum semper nisi Aenean vulputate
                  eleifend tellus Aenean.
                </p>
              </aside>
            </div>
          </div>
          <aside className="w-2/4 ">
            <img
              src="https://images.carriercms.com/image/upload/w_1600,h_400,c_fill,g_center,q_auto,f_auto/v1551189367/autronica/applications/hospital-operating-room-with-operating-table.jpg "
              className="w-full h-full"
            ></img>
          </aside>
        </section>
        <section className="">
          <div className="w-4/5 m-auto text-center py-12">
            <p className="font-bold text-xl mb-3">MEET OUR SPECIALISTS</p>
            <p className="test-max-width text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
            <CarouselProvider
              className="lg:block hidden"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={4}
              visibleSlides={3}
              step={1}
              infinite={false}
            >
              <div className="w-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 left-0 ml-8 focus:outline-none cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={20}
                    height={100}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>

                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                    >
                      <Slide index={0}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src="https://i.ibb.co/fDngH9G/carosel-1.png"
                            alt="black chair and white table"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                              Catalog 1
                            </h2>
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                Minimal Interior
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={1}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                              Catalog 2
                            </h2>
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                Minimal Interior
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={2}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src="https://i.ibb.co/tCfVky2/carosel-3.png"
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                              Catalog 2
                            </h2>
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                Minimal Interior
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={3}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                              Catalog 2
                            </h2>
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                Minimal Interior
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={4}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                              Catalog 2
                            </h2>
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                Minimal Interior
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 right-0 mr-8 focus:outline-none cursor-pointer"
                  id="next"
                >
                  <svg
                    width={20}
                    height={200}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </section>
        <section className="w-full bg-primary-1000">
          <div className="w-11/12 m-auto flex flex-row p-16">
            <div className="flex flex-col w-1/4 items-center">
              <MonitorHeartIcon sx={{ fontSize: 50, color: "white" }} />
              <span className="text-2xl text-white mb-3">365</span>
              <span className="text-white text-xs">SATISFIED PATIENTS</span>
            </div>
            <div className="flex flex-col w-1/4 items-center">
              <AccountCircleIcon sx={{ fontSize: 50, color: "white" }} />
              <span className="text-2xl text-white mb-3">365</span>
              <span className="text-white text-xs">QUALIFIED DOCTORS</span>
            </div>
            <div className="flex flex-col w-1/4 items-center">
              <ApartmentIcon sx={{ fontSize: 50, color: "white" }} />
              <span className="text-2xl text-white mb-3">365</span>
              <span className="text-white text-xs">HOSPITAL ROOMS</span>
            </div>
            <div className="flex flex-col w-1/4 items-center">
              <RedeemIcon sx={{ fontSize: 50, color: "white" }} />
              <span className="text-2xl text-white mb-3">365</span>
              <span className="text-white text-xs">AWARDS WON</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
