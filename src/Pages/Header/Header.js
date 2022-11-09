import { Carousel } from "antd";
import React from "react";

const Header = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div class="">
            <div class="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-16 lg:max-w-screen-xl lg:px-8">
              <div class="flex flex-col items-center justify-between lg:flex-row">
                <div class="">
                  <div class="lg:max-w-xl lg:pr-5">
                    <h2 class="mb-6 max-w-lg capitalize text-4xl font-light leading-snug  text-blue-600 sm:text-4xl">
                      Criminal Defence Lawyer
                      <span class="my-2 text-6xl leading inline-block border-blue-600 font-bold text-blue-600">
                        {" "}
                        REAL JUSTICE FOR REAL PEOPLE{" "}
                      </span>
                      <hr />
                    </h2>
                  </div>
                  <div class="mt-10 flex flex-col items-center md:flex-row">
                    <a
                      href="/"
                      class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800 capitalize"
                    >
                      How i can help?{" "}
                    </a>
                  </div>
                </div>
                <div class="relative hidden lg:ml-32 lg:block lg:w-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 17l-4 4m0 0l-4-4m4 4V3"
                    />
                  </svg>
                  <div className="border-4 border-gray-500 p-6  rounded-[6rem] rounded-tl-none rounded-br-none">
                    <div class="w-9/12 rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none bg-orange-400">
                      <img
                        class="absolute -left-10 p-3 -top-10 h-20 w-20 rounded-xl bg-white text-yellow-400"
                        src="https://cdn-icons-png.flaticon.com/512/7997/7997947.png"
                        alt=""
                        style={{ filter: "grayscale(70%)" }}
                      />

                      <img
                        class="-mb-20 w-full"
                        src="https://images.pexels.com/photos/8112128/pexels-photo-8112128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="">
            <div class="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-16 lg:max-w-screen-xl lg:px-8">
              <div class="flex flex-col items-center justify-between lg:flex-row">
                <div class="">
                  <div class="lg:max-w-xl lg:pr-5">
                    <h2 class="mb-6 max-w-lg capitalize text-4xl font-light leading-snug  text-blue-600 sm:text-4xl">
                      The right lawyer
                      <span class="my-2 text-6xl inline-block border-blue-600 font-bold leading text-blue-600">
                        {" "}
                        MAKES ALL THE DIFFERENCE{" "}
                      </span>
                      <hr />
                    </h2>
                  </div>
                  <div class="mt-10 flex flex-col items-center md:flex-row">
                    <a
                      href="/"
                      class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800 capitalize"
                    >
                      How i can help?{" "}
                    </a>
                  </div>
                </div>
                <div class="relative hidden lg:ml-32 lg:block lg:w-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 17l-4 4m0 0l-4-4m4 4V3"
                    />
                  </svg>
                  <div className="border-4 border-gray-500 p-6  rounded-[6rem] rounded-tl-none rounded-br-none">
                    <div class="w-9/12 rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none ">
                      <img
                        class="absolute -left-10 p-3 -top-10 h-20 w-20 rounded-xl bg-white text-yellow-400"
                        src="https://cdn-icons-png.flaticon.com/512/7997/7997947.png"
                        alt=""
                        style={{ filter: "grayscale(70%)" }}
                      />
                      <img
                        class="-mb-20 w-full"
                        src="https://images.pexels.com/photos/8112145/pexels-photo-8112145.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
