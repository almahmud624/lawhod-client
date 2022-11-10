import { Rate } from "antd";
import React from "react";

const Testimonials = () => {
  return (
    <>
      <section
        id="testmonials"
        className="max-w-screen-xl mx-auto sm:py-10 px-4 md:py-14 lg:py-16"
      >
        <div>
          <div>
            <section class="mb-20 text-gray-600 ">
              <div class=" sm:px-6 lg:px-8">
                <div class="flex flex-col items-center">
                  <div className="mb-10 self-start">
                    <h2 className="md:text-5xl text-2xl text-gray-700">
                      What clients say about their experience
                    </h2>
                    <hr className="max-w-[12rem] border-[#4e362846]" />
                  </div>

                  <div class="relative mx-auto mt-10 grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
                    <div class="flex flex-col  border border-[#ddd0c8] text-center shadow-xl shadow-[#ddd0c881]">
                      <div class="relative flex flex-1 flex-col justify-between p-6 lg:py-7 lg:pb-4 lg:px-5">
                        <span class="absolute -left-5 -top-6  bg-white p-3 text-5xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <div class="flex-1">
                          <blockquote class="mt-8 flex-1">
                            <p class="leading-relaxed text-blue-900">
                              I have the privilege of working with Seth Lowry on
                              a complex litigation matter that affects an entire
                              Georgia community.
                            </p>
                          </blockquote>
                        </div>

                        <div class="-mx-5 mt-2 px-8">
                          <div class="">
                            <Rate
                              allowHalf
                              value={4.5}
                              style={{ fontSize: "1em" }}
                            />
                            <p class="text-lg font-bold mt-1">Rob Cruse</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col  border border-[#ddd0c8] text-center shadow-xl shadow-[#ddd0c881]">
                      <div class="relative flex flex-1 flex-col justify-between p-6 lg:py-7 lg:pb-4 lg:px-5">
                        <span class="absolute -left-5 -top-6  bg-white p-3 text-5xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <div class="flex-1">
                          <blockquote class="mt-8 flex-1">
                            <p class="leading-relaxed text-blue-900">
                              Max consistently demonstrates tremendous poise and
                              judgment on the highest stakes cases. He is an
                              extremely talented and gifted advocate,
                            </p>
                          </blockquote>
                        </div>

                        <div class="-mx-5 mt-2 px-8">
                          <div class="">
                            <Rate
                              allowHalf
                              value={4.5}
                              style={{ fontSize: "1em" }}
                            />
                            <p class="text-lg font-bold mt-1">Lerward Pasta</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col  border border-[#ddd0c8] text-center shadow-xl shadow-[#ddd0c881]">
                      <div class="relative flex flex-1 flex-col justify-between p-6 lg:py-7 lg:pb-4 lg:px-5">
                        <span class="absolute -left-5 -top-6  bg-white p-3 text-5xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <div class="flex-1">
                          <blockquote class="mt-8 flex-1">
                            <p class="leading-relaxed text-blue-900">
                              I have watched Drew season as a lawyer over the
                              course of his career.The most serious and complex
                              cases require the most talented, creative and
                              hard-working attorneys.
                            </p>
                          </blockquote>
                        </div>

                        <div class="-mx-5 mt-2 px-8">
                          <div class="">
                            <Rate
                              allowHalf
                              value={5}
                              style={{ fontSize: "1em" }}
                            />
                            <p class="text-lg font-bold mt-1">Hood Roobos</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
