import "../../assets/Styles/style.css";
import Carousel from "../Blogs/Carousel";
import "../../assets/Styles/style.css";
import ReactSoundCloud from "react-soundcloud-embedded";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { useState } from "react";

const sildes = [
  "https://theembazaar.com/demo/themesfolios/medical-care/assets/images/blog/img1.jpg",
  "https://theembazaar.com/demo/themesfolios/medical-care/assets/images/blog/img2.jpg",
];

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};
const Blogs = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <header className=" flex justify-center flex-col items-center text-center background-change bg-center bg-cover bg-no-repeat bg-[length:900px_900px] content-center ">
        <h1 className="text-white text-3xl uppercase">Blogs</h1>
        <span className="text-white">
          HOME / <span className="text-gray-500">BLOGS</span>
        </span>
      </header>

      {/* p1 */}
      <section className="py-20 2xl:w-full  ">
        <div className="flex justify-center ">
          <div className="p1">
            <div className="w-848 ">
              <Carousel autoSlide={true}>
                {sildes.map((s) => (
                  <img src={s} />
                ))}
              </Carousel>
            </div>
            <div className="flex  ">
              <div className="title1">
                <span className="uppercase text-gray-500 text-sm">BY </span>
                <a href="#" className="hover:text-blue-600 uppercase text-sm">
                  Admin,
                </a>
                <div className="comment_num flex">
                  <img
                    src="https://img.icons8.com/fluency-systems-regular/256/comments--v1.png"
                    alt=""
                  />
                  <span>
                    <a href="#" className="hover:text-blue-600 text-sm">
                      25,
                    </a>
                  </span>
                </div>
                <span>
                  <button
                    className="hover:text-blue-600 text-sm btn_favorite flex"
                    onClick={() => setCount(count + 1)}
                  >
                    <img
                      src="https://img.icons8.com/ios/256/hearts.png"
                      alt=""
                    />
                    {count},
                  </button>
                  <div>
                    <b className="text-2xl">
                      MAECENAS NEC ODIO ANTE VARCY TINCIDUNT
                    </b>
                  </div>
                </span>
              </div>
              <div className="ml-auto mr-2">
                <button
                  type="submit"
                  class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center  "
                >
                  <img
                    src="https://icons8.com/icon/TDCU7KRViM2Q/share"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="mb-6, bottom-2 pt-2.5 contentcss ">
              <p>
                Praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio
              </p>
            </div>
            <div className="mb-6, bottom-2 pt-2.5 contentcss ">
              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio.
              </p>
            </div>
            <div className="mb-8">
              <Button class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center  ">
                Read more
              </Button>
            </div>
            <hr />
            <div className=" relative">
              <img
                className=" mt-10 mb-5 "
                src="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/blog/img2.jpg"
                alt=""
              />
            </div>
            <div className="flex  ">
              <div className="title1">
                <span className="uppercase text-gray-500 text-sm">by </span>
                <a href="#" className="hover:text-blue-600 uppercase text-sm">
                  Admin,
                </a>

                <div className="comment_num flex">
                  <img
                    src="https://img.icons8.com/fluency-systems-regular/256/comments--v1.png"
                    alt=""
                  />
                  <span>
                    <a href="#" className="hover:text-blue-600 text-sm">
                      25,
                    </a>
                  </span>
                </div>
                <span>
                  <button
                    className="hover:text-blue-600 text-sm btn_favorite flex"
                    onClick={() => setCount(count + 1)}
                  >
                    <img
                      src="https://img.icons8.com/ios/256/hearts.png"
                      alt=""
                    />
                    {count},
                  </button>
                  <div>
                    <b className="text-2xl">
                      MAECENAS NEC ODIO ANTE VARCY TINCIDUNT
                    </b>
                  </div>
                </span>
              </div>
              <div className="ml-auto mr-2">
                <button
                  type="submit"
                  class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center  "
                >
                  <img
                    src="https://icons8.com/icon/TDCU7KRViM2Q/share"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="mb-6, bottom-2 pt-2.5 contentcss ">
              <p>
                Praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio
              </p>
            </div>
            <div className="mb-6, bottom-2 pt-2.5 contentcss ">
              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio.
              </p>
            </div>
            <div className="mb-8 ">
              <Button class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center  ">
                Read more
              </Button>
            </div>
            <hr />
            <div className="relative mt-10">
              <ReactSoundCloud url="https://soundcloud.com/ph-ng-h-p-296943299/hot-tiktok-so-ngay-mai-em-di-mat-ngay-mai-em-di-mat-remix?si=ada34ea91e584c29948515c7297c8212&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
              <div className=" absolute bottom-0 bg-blue-500 px-1.5 py-1.5 text-center text-white w-14">
                21 <br />
                June
              </div>
            </div>
            <div className="flex mt-5 ">
              <div className="title1">
                <span className="uppercase text-gray-500 text-sm ">by </span>
                <a href="#" className="hover:text-blue-600 uppercase text-sm">
                  Admin,
                </a>

                <div className="comment_num flex">
                  <img
                    src="https://img.icons8.com/fluency-systems-regular/256/comments--v1.png"
                    alt=""
                  />
                  <span>
                    <a href="#" className="hover:text-blue-600 text-sm">
                      25,
                    </a>
                  </span>
                </div>
                <span>
                  <button
                    className="hover:text-blue-600 text-sm btn_favorite flex"
                    onClick={() => setCount(count + 1)}
                  >
                    <img
                      src="https://img.icons8.com/ios/256/hearts.png"
                      alt=""
                    />
                    {count},
                  </button>
                  <div>
                    <b className="text-2xl">
                      MAECENAS NEC ODIO ANTE VARCY TINCIDUNT
                    </b>
                  </div>
                </span>
              </div>
              <div className="ml-auto mr-2">
                <button
                  type="submit"
                  class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center  "
                >
                  <img
                    src="https://icons8.com/icon/TDCU7KRViM2Q/share"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="mb-6, bottom-2 pt-2.5 contentcss ">
              <p>
                Praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio
              </p>
            </div>
            <div className="mb-6, bottom-2 pt-2.5 contentcss ">
              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio.
              </p>
            </div>
            <div className="mb-8 ">
              <Button class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center  ">
                Read more
              </Button>
            </div>
            <hr />

            <div className="relative mt-10">
              <YoutubeEmbed embedId="xHdQaAZqc4k" />
              <div className=" absolute bottom-0 bg-blue-500 px-1.5 py-1.5 text-center text-white w-14">
                21 <br />
                June
              </div>
            </div>
            <div className="flex mt-5 ">
              <div className="title1">
                <span className="uppercase text-gray-500 text-sm ">by </span>
                <a href="#" className="hover:text-blue-600 uppercase text-sm">
                  Admin,
                </a>

                <div className="comment_num flex">
                  <img
                    src="https://img.icons8.com/fluency-systems-regular/256/comments--v1.png"
                    alt=""
                  />
                  <span>
                    <a href="#" className="hover:text-blue-600 text-sm">
                      25,
                    </a>
                  </span>
                </div>
                <span>
                  <button
                    className="hover:text-blue-600 text-sm btn_favorite flex"
                    onClick={() => setCount(count + 1)}
                  >
                    <img
                      src="https://img.icons8.com/ios/256/hearts.png"
                      alt=""
                    />
                    {count},
                  </button>
                  <div className="text-2xl">
                    <b>MAECENAS NEC ODIO ANTE VARCY TINCIDUNT</b>
                  </div>
                </span>
              </div>
              <div className="ml-auto mr-2">
                <button
                  type="submit"
                  class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center  "
                >
                  <img
                    src="https://icons8.com/icon/TDCU7KRViM2Q/share"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="mb-6, bottom-2 pt-2.5 contentcss ">
              <p>
                Praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio
              </p>
            </div>
            <div className="mb-6, bottom-2 pt-2.5 contentcss ">
              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio.
              </p>
            </div>
            <div className="mb-8 ">
              <Button class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center  ">
                Read more
              </Button>
            </div>
            <hr />
          </div>

          {/* p2 */}
          <div>
            <div className="ml-5 mb-12 ">
              <b className="uppercase">Search</b>
              <div className="mt-5 ">
                <input
                  type="search"
                  placeholder="Search.."
                  className="border-2 w-full  border-gray-400 pl-3 py-3 "
                />
              </div>
            </div>
            <div className="ml-5 mb-12 2xl:w-72">
              <div className="mb-2">
                <b>CATEGORIES</b>
              </div>
              <hr />
              <div className="mb-12">
                <ul>
                  <li className="py-3 border-gray-400 border-solid border-b-2 hover:text-blue-600">
                    <a href="#">Diagnose & Research</a>
                  </li>
                  <li className="py-3 border-gray-400 border-solid border-b-2 hover:text-blue-600">
                    <a href="#">Cancer Oncology</a>
                  </li>
                  <li className="py-3 border-gray-400 border-solid border-b-2 hover:text-blue-600">
                    <a href="#">Dental Surgery</a>
                  </li>
                  <li className="py-3 border-gray-400 border-solid border-b-2 hover:text-blue-600">
                    <a href="#">Neurology</a>
                  </li>
                  <li className="py-3 border-gray-400 border-solid border-b-2 hover:text-blue-600">
                    <a href="#">Drug / Medicine</a>
                  </li>
                  <li className="py-3 border-gray-400 border-solid border-b-2 hover:text-blue-600">
                    <a href="#">Heart Center</a>
                  </li>
                </ul>
              </div>
              <div className="recent post mb-10">
                <div className=" mb-5 ">
                  <b className="uppercase">recent post</b>
                </div>
                <div className="post-widget ">
                  <ul>
                    <li className="flex gap-4 grid-col-2 mb-3">
                      <a href="#">
                        <img
                          src="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/blog/blog-small-img.jpg"
                          className="w-24 h-20"
                        />
                      </a>
                      <div className="info-post-widget">
                        <h6>
                          <a
                            href="#"
                            className="py-3 border-gray-400 mb-3 hover:text-blue-600"
                          >
                            VERITATIS ET QUASI
                          </a>
                        </h6>
                        <div>
                          <span>
                            <a href="#" className="hover:text-blue-600 text-sm">
                              <img
                                src="https://icons8.com/icon/64767/favorite"
                                alt=""
                              />{" "}
                              25,
                            </a>
                          </span>
                          <span>
                            <span className="text-gray-500"> June 16</span>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-4 grid-col-2 my-3 ">
                      <a href="#">
                        <img
                          src="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/blog/blog-small-img.jpg"
                          className="w-24 h-20"
                        />
                      </a>
                      <div className="info-post-widget">
                        <h6>
                          <a
                            href="#"
                            className="py-3 border-gray-400 mb-3 hover:text-blue-600"
                          >
                            SED FRINGILLA MAURIS
                          </a>
                        </h6>
                        <div>
                          <span>
                            <a href="#" className="hover:text-blue-600 text-sm">
                              <img
                                src="https://icons8.com/icon/64767/favorite"
                                alt=""
                              />{" "}
                              25,
                            </a>
                          </span>
                          <span>
                            <span className="text-gray-500"> June 16</span>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-4 grid-col-2">
                      <a href="#">
                        <img
                          src="https://theembazaar.com/demo/themesfolios/medical-care/assets/images/blog/blog-small-img.jpg"
                          className="w-24 h-20"
                        />
                      </a>
                      <div className="info-post-widget">
                        <h6>
                          <a
                            href="#"
                            className="py-3 border-gray-400 mb-3 hover:text-blue-600"
                          >
                            HARUM QUIDEM RERUM
                          </a>
                        </h6>
                        <div>
                          <img
                            src="https://icons8.com/icon/64767/favorite"
                            alt=""
                          />
                          <span>
                            <a href="#" className="hover:text-blue-600 text-sm">
                              25,
                            </a>
                          </span>
                          <span>
                            <span className="text-gray-500"> June 16</span>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="popular tags">
                <div className=" mb-5 ">
                  <b className="uppercase">popular tags</b>
                </div>
                <hr />
                <div className="flex flex-wrap mt-10 gap-1 ">
                  <Button class="  border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center uppercase ">
                    art
                  </Button>
                  <Button class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center uppercase  ">
                    business
                  </Button>
                  <Button class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center uppercase ">
                    design
                  </Button>
                  <Button class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center uppercase ">
                    graphic
                  </Button>
                  <Button class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center uppercase ">
                    fashion
                  </Button>
                  <Button class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center uppercase ">
                    model
                  </Button>
                  <Button class=" border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center uppercase ">
                    photography
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blogs;
