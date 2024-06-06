import Carousel from "./Carousel";
import CardInfo from "../../components/CardInfo";
import DepartmentCard from "../../components/DepartmentCard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShowHideTab from "../../components/ShowHideTab";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import CardNews from "../../components/LatestNews";
import TopFAQ from "../../components/TopFAQ";
import CountUp from "react-countup";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
const sildes = [
  "https://www.hfh.com.vn/sites/default/files/page/2.png",
  "https://www.hfh.com.vn/sites/default/files/page/4.png",
  "https://www.hfh.com.vn/sites/default/files/page/2.png",
];

const Home = () => {
  return (
    <section class="bg-white bg-blue-200 ">
      <div class="z-0">
        <Carousel autoSlide={true}>
          {sildes.map((s) => (
            <img src={s} className=" "></img>
          ))}
        </Carousel>
      </div>
      <div class="py-8">
        <div className="top_part mx-auto max-w-screen-xl">
          <div className="row flex ml-2 text-white">
            <div className="flex px-3 py-8 content_top_part_left rounded-l-lg w-1/3">
              <div>
                <AccessTimeIcon />
              </div>
              <div class="right_text_clock px-2">
                <h3>Opening Hours</h3>
                <div className="mt-2">
                  <ul>
                    <li className="flex justify-between py-2 border-b-black">
                      <span className="flex flex-nowrap ">Monday - Friday</span>
                      <span className="flex flex-nowrap justify-end ml-3">
                        8.00 - 17.00
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b-black">
                      <span>Saturday</span>
                      <span className="flex flex-nowrap justify-end">
                        9.30 - 17.30
                      </span>
                    </li>
                    <li className="flex justify-between py-2 border-b-black">
                      <span>Sunday</span>
                      <span>9.30 - 15.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content_top_part flex flex-col px-3 py-8 mx-4 w-1/3">
              <div className="flex">
                <div>
                  <PhoneIcon />
                </div>
                <div class="right_text_clock px-2  ">
                  <h3>Call Us Anytime</h3>
                  <div className="mt-2 flex flex-col py-2">
                    <span className="flex flex-nowrap mr">+84 856034558</span>
                    <span className="flex flex-nowrap">+84 123034558</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <ForwardToInboxIcon />
                </div>
                <div class="right_text_clock px-2  ">
                  <h3>Call Us Anytime</h3>
                  <span className="flex flex-nowrap mr">
                    hoacucms@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className="flex  px-3 py-8 content_top_part_right rounded-r-lg w-1/3">
              <div>
                <LocationOnIcon />
              </div>
              <div class="right_text_clock">
                <h3>Our Location</h3>
                <p>
                  <span>123 Main Street, St. NW Ste,</span>
                  <span> 1 Washington, DC,USA.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <>
          <div className="py-20 mx-auto max-w-screen-xl">
            <div class="font-bold py-6 grid justify-items-center">
              <h3>
                IT WILL IDEALLY MATCH THE WEBSITES RELATED TO THE MEDICINE,
                CLINICS AND FOR THE DOCTORS.
              </h3>
            </div>
            <div class="flex pt-10">
              <div className="flex pr-2.5">
                <div>
                  <img
                    className="left_icons"
                    src="https://img.icons8.com/windows/256/stethoscope.png"
                    alt=""
                  />
                </div>
                <div className="right_content">
                  <div class="font-bold grid justify-items-start">
                    <h3>MODERN CLINIC</h3>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                </div>
              </div>
              <div className="flex pr-2.5">
                <div>
                  <img
                    className="left_icons"
                    src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/256/external-doctor-medical-nawicon-detailed-outline-nawicon.png"
                    alt=""
                  />
                </div>
                <div className="right_content">
                  <div class="font-bold grid justify-items-start">
                    <h3>MODERN CLINIC</h3>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <img
                    className="left_icons"
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-first-aid-kit-medical-healthcare-those-icons-lineal-those-icons.png"
                    alt=""
                  />
                </div>
                <div className="right_content">
                  <div class="font-bold grid justify-items-start">
                    <h3>MODERN CLINIC</h3>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div className="bg-primary-300 py-12">
            <div class="count_up_box flex py-20 mx-auto max-w-screen-xl">
              <div className="items_count flex-col">
                <div className="icons_box_counter pb-8">
                  <MonitorHeartOutlinedIcon />
                </div>
                <div className="num place-items-center pb-4">
                  <CountUp start={0} end={365} duration={5} />
                </div>
                <div className="text_count ">SATISFIED PATIENTS</div>
              </div>
              <div className="items_count">
                <div className="icons_box_counter pb-8">
                  <PeopleAltOutlinedIcon />
                </div>
                <div className="num place-items-center pb-4">
                  {" "}
                  <CountUp start={0} end={155} duration={5} />
                </div>
                <div className="text_count">QUALIFIED DOCTORS</div>
              </div>
              <div className="items_count">
                <div className="icons_box_counter pb-8">
                  <LocalHospitalOutlinedIcon />
                </div>
                <div className="num place-items-center pb-4">
                  {" "}
                  <CountUp start={0} end={200} duration={5} />
                </div>
                <div className="text_count">HOSPITAL ROOMS</div>
              </div>
              <div className="items_count">
                <div className="icons_box_counter pb-8">
                  <MilitaryTechOutlinedIcon />
                </div>
                <div className="num place-items-center pb-4">
                  {" "}
                  <CountUp start={0} end={100} duration={5} />
                </div>
                <div className="text_ count">AWARDS WON</div>
              </div>
            </div>
          </div>{" "}
        </>
        <>
          <div className="grid justify-items-center mt-5">
            <div className="py-20">
              <div class="font-bold grid justify-items-center">
                <h2>OUR TEAM</h2>
                <div>-------------</div>
              </div>
              <div className="flex px-2 pt-10 whitespace-nowrap">
                <CardInfo
                  image="https://doximity-res.cloudinary.com/images/f_auto,q_auto,t_profile_photo_320x320/puxfpralr5ukvhatraau/john-peterson-md-tampa-fl.jpg"
                  name="Kevin Peterson"
                  position="Doctor"
                />
                <CardInfo
                  image="https://doximity-res.cloudinary.com/images/f_auto,q_auto,t_profile_photo_320x320/puxfpralr5ukvhatraau/john-peterson-md-tampa-fl.jpg"
                  name="Kevin Peterson"
                  position="Doctor"
                />
                <CardInfo
                  image="https://doximity-res.cloudinary.com/images/f_auto,q_auto,t_profile_photo_320x320/puxfpralr5ukvhatraau/john-peterson-md-tampa-fl.jpg"
                  name="Kevin Trap"
                  position="Doctor"
                />
                <CardInfo
                  image="https://doximity-res.cloudinary.com/images/f_auto,q_auto,t_profile_photo_320x320/puxfpralr5ukvhatraau/john-peterson-md-tampa-fl.jpg"
                  name="Nguyen Chi Vu"
                  position="Doctor"
                />
              </div>
            </div>
          </div>
        </>
        <>
          <div className="grid justify-items-center mt-5 bg-gray-50">
            <div className=" max-w-full">
              <div className="grid justify-items-center py-20  mx-auto max-w-screen-xl">
                <div class="font-bold">
                  <h2>OUR DEPARTMENTS</h2>
                  <div>-------------------------</div>
                </div>
                <div className="flex">
                  <div>
                    <DepartmentCard
                      image="https://img.icons8.com/ios-glyphs/256/brains.png"
                      tittle_depart="NUROLOGY"
                      content_depart="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
                    />
                    <DepartmentCard
                      image="https://img.icons8.com/fluency-systems-regular/256/visible.png"
                      tittle_depart="EYE CARE"
                      content_depart="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
                    />
                  </div>
                  <div>
                    <DepartmentCard
                      image="https://img.icons8.com/ios/256/pulse.png"
                      tittle_depart="CARDIAC SURGERY"
                      content_depart="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
                    />
                    <DepartmentCard
                      image="https://img.icons8.com/wired/256/pregnant.png"
                      tittle_depart="PREGNANCY"
                      content_depart="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
                    />
                  </div>
                  <div>
                    <DepartmentCard
                      image="https://img.icons8.com/external-icongeek26-outline-icongeek26/256/external-dental-care-dental-icongeek26-outline-icongeek26-5.png"
                      tittle_depart="DENTAL CARE"
                      content_depart="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
                    />
                    <DepartmentCard
                      image="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/256/external-emergency-call-medical-smashingstocks-detailed-outline-smashing-stocks.png"
                      tittle_depart="EMERGENCY CALL"
                      content_depart="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        <></>
        <>
          <div className="grid justify-items-center mt-5 mx-auto max-w-screen-xl">
            <div className="py-20">
              <div class="font-bold">
                <h2>OUR SERVICE</h2>
                <div>----------------</div>
              </div>
              <ShowHideTab />
            </div>{" "}
          </div>
        </>
        <>
          <div className="grid justify-items-center mt-5 bg-gray-100">
            {" "}
            <div className=" home_faq flex  mx-auto max-w-screen-xl relative">
              <div className="our_testimonial w-8/12">
                <div class="font-bold">
                  <h2>OUR TESTIMONIAL</h2>
                  <div>-----------------------</div>
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
                    <div className="w-full  items-center justify-center">
                      <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <Slider>
                          <div
                            id="slider"
                            className="h-full relative flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                          >
                            <Slide index={0}>
                              <div className="flex flex-col relative w-6/12 sm:w-auto">
                                <div className="bg-white p-2">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod [..]
                                  </p>
                                </div>
                                <div className="flex mt-4">
                                  <div className="img_ mr-2">
                                    <img
                                      src="https://img.icons8.com/ios/256/gender-neutral-user.png"
                                      alt="avatar"
                                    ></img>
                                  </div>
                                  <div className="info_">
                                    <h3 className="name_ font-bold">
                                      Jonh Hedersoon
                                    </h3>
                                    <span className="position_ ">CEO</span>
                                  </div>
                                </div>
                              </div>
                            </Slide>
                            <Slide index={1}>
                              <div className="flex flex-col relative w-full sm:w-auto">
                                <div className="bg-white p-2">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod [..]
                                  </p>
                                </div>
                                <div className="flex mt-4">
                                  <div className="img_ mr-2">
                                    <img
                                      src="https://img.icons8.com/ios/256/gender-neutral-user.png"
                                      alt="avatar"
                                    ></img>
                                  </div>
                                  <div className="info_">
                                    <h3 className="name_ font-bold">
                                      Jonh Hedersoon
                                    </h3>
                                    <span className="position_ ">CEO</span>
                                  </div>
                                </div>
                              </div>
                            </Slide>
                            <Slide index={2}>
                              <div className="flex flex-col relative w-full sm:w-auto">
                                <div className="bg-white p-2">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod [..]
                                  </p>
                                </div>
                                <div className="flex mt-4">
                                  <div className="img_ mr-2">
                                    <img
                                      src="https://img.icons8.com/ios/256/gender-neutral-user.png"
                                      alt="avatar"
                                    ></img>
                                  </div>
                                  <div className="info_">
                                    <h3 className="name_ font-bold">
                                      Jonh Hedersoon
                                    </h3>
                                    <span className="position_ ">CEO</span>
                                  </div>
                                </div>
                              </div>
                            </Slide>
                            <Slide index={3}>
                              <div className="flex flex-col relative w-full sm:w-auto">
                                <div className="bg-white p-2">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod [..]
                                  </p>
                                </div>
                                <div className="flex mt-4">
                                  <div className="img_ mr-2">
                                    <img
                                      src="https://img.icons8.com/ios/256/gender-neutral-user.png"
                                      alt="avatar"
                                    ></img>
                                  </div>
                                  <div className="info_">
                                    <h3 className="name_ font-bold">
                                      Jonh Hedersoon
                                    </h3>
                                    <span className="position_ ">CEO</span>
                                  </div>
                                </div>
                              </div>
                            </Slide>
                            <Slide index={4}>
                              <div className="flex flex-col relative w-full sm:w-auto">
                                <div className="bg-white p-2">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod [..]
                                  </p>
                                </div>
                                <div className="flex mt-4">
                                  <div className="img_ mr-2">
                                    <img
                                      src="https://img.icons8.com/ios/256/gender-neutral-user.png"
                                      alt="avatar"
                                    ></img>
                                  </div>
                                  <div className="info_">
                                    <h3 className="name_ font-bold">
                                      Jonh Hedersoon
                                    </h3>
                                    <span className="position_ ">CEO</span>
                                  </div>
                                </div>
                              </div>
                            </Slide>
                          </div>
                        </Slider>
                      </div>
                      <div className=" flex justify-center mt-6">
                        <ButtonBack
                          role="button"
                          aria-label="slide backward"
                          className=" z-30 left-0 ml-8 focus:outline-none cursor-pointer"
                          id="prev"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 1L1 7L7 13"
                              stroke="black"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </ButtonBack>
                        <ButtonNext
                          role="button"
                          aria-label="slide forward"
                          className=" z-30 right-0 mr-8 focus:outline-none cursor-pointer"
                          id="next"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L7 7L1 13"
                              stroke="black"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </ButtonNext>
                      </div>
                    </div>
                  </CarouselProvider>
                </div>
              </div>
              <div className=" top_faq xs-6 w-4/12">
                <div class="font-bold ">
                  <h2>TOP FAQ</h2>
                  <div>----------</div>
                </div>
                <TopFAQ
                  href="#"
                  tittle_faq="Do You Examine Children At"
                  content_faq="Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem, Maecenas tempus, tellus eget condimentum rhoncus."
                />
                <TopFAQ
                  href="#"
                  tittle_faq="Do You Examine Children At"
                  content_faq="Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem, Maecenas tempus, tellus eget condimentum rhoncus."
                />
                <TopFAQ
                  href="#"
                  tittle_faq="Do You Examine Children At"
                  content_faq="Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem, Maecenas tempus, tellus eget condimentum rhoncus."
                />
              </div>
            </div>
          </div>
        </>
        <>
          <div className="grid justify-items-center mt-5 mx-auto max-w-screen-xl">
            <div className="py-20">
              <div class="font-bold text-center pb-10">
                <h2>LATEST NEWS</h2>
                <div>-----------------</div>
              </div>
              <div className="news flex justify-around ">
                <CardNews
                  image_news="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/blog/img1.jpg"
                  time_up="feb,14th2022"
                  tittle_news="One day in hospital"
                  href="#"
                  content_news="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
                />
                <CardNews
                  image_news="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/blog/img2.jpg"
                  time_up="feb,14th2022"
                  tittle_news="One day in hospital"
                  href="#"
                  content_news="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
                />
                <CardNews
                  image_news="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/blog/img3.jpg"
                  time_up="feb,14th2022"
                  tittle_news="One day in hospital"
                  href="#"
                  content_news="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
                />
              </div>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default Home;
