import { Rate } from "antd";
import React from "react";
import Header from "../Header/Header";
import PracticeAreas from "../PracticeAreas/PracticeAreas";

const Home = () => {
  return (
    <div className="mx-auto">
      <Header />
      <PracticeAreas />
      <section id="why-choose" className="max-w-screen-xl px-4 py-10 mx-auto">
        <div className="flex gap-10 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/3">
            <h3 className="text-5xl leading-tight">
              Why You Can Trust <br />
              LawHod
            </h3>
            <hr className="max-w-[12rem] border-gray-500" />
          </div>
          <div className="w-full md:w-8/12 text-lg bg-slate-200 p-6">
            <p>
              We value justice, honesty and time. We are always at your service
              as we are in charge of your defence. Any detail will be noticed
              and it can be essential for your case.
            </p>
            <p>
              During our work we gathered a team of devoted experts with rich
              experience in juridical help. We put a great emphasis on business
              law, because in today’s rapidly-changing environment, people
              require assistance in business spheres. Our experience allows us
              to be confident and stand by our words.
            </p>
            <p>
              Our company was established in 2004. We started as a small legal
              consultancy. We have proved our competence and had many satisfied
              clients. We expanded our activity and started providing many other
              juridical services to meet wider clients needs.
            </p>
          </div>
        </div>
      </section>
      <section
        id="case-result"
        className="py-20 text-gray-100 my-5 px-4 bg-slate-600"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-10">
            <h2 className="text-5xl text-gray-100">Our Case Results</h2>
            <hr className="max-w-[12rem] border-gray-300" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 text-gray-100">
            <div>
              <div className="shadow-lg mb-5 w-96 h-64">
                <img
                  src="https://gray-wsaz-prod.cdn.arcpublishing.com/resizer/hmBVNJZPS5KvFUVK4rFfXxnLRB8=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/O6G3D7EHRRAOPPZ4SBDOL25TQY.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl text-gray-100">
                $825,000 Tractor Trailer Accident
              </h3>
              <button className="px-6 py-3 border-2 border-gray-500 font-semibold text-base">
                Know More
              </button>
            </div>
            <div>
              <div className="shadow-lg mb-5 w-96 h-64">
                <img
                  src="https://cdn-gcgdh.nitrocdn.com/gfcbrZkYQalxoOfLKxTelAACBenZUznC/assets/static/optimized/rev-ef514e5/wp-content/uploads/2022/04/image2.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl text-gray-100">
                $50,000 Property Damage Settlement
              </h3>
              <button className="px-6 py-3 border-2 border-gray-500 font-semibold text-base">
                Know More
              </button>
            </div>
            <div>
              <div className="shadow-lg mb-5 w-96 h-64">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEXUIUZzS6LpkN8sEXMGNRvquDFZ4mWRz4Q&usqp=CAU"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl text-gray-100">
                $825,000 Tractor Trailer Accident
              </h3>
              <button className="px-6 py-3 border-2 border-gray-500 font-semibold text-base">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="testmonials"
        className="max-w-screen-xl mx-auto sm:py-10 px-4 md:py-14 lg:py-16"
      >
        <div>
          <div>
            <section class=" text-blue-900 ">
              <div class=" sm:px-6 lg:px-8">
                <div class="flex flex-col items-center">
                  <div className="mb-10 self-start">
                    <h2 className="text-5xl text-gray-700">
                      What clients say about their experience
                    </h2>
                    <hr className="max-w-[12rem] border-gray-500" />
                  </div>

                  <div class="relative mx-auto mt-10 grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
                    <div class="flex flex-col  border border-blue-600 text-center shadow-xl shadow-blue-200">
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
                    <div class="flex flex-col  border border-blue-600 text-center shadow-xl shadow-blue-200">
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
                    <div class="flex flex-col  border border-blue-600 text-center shadow-xl shadow-blue-200">
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
    </div>
  );
};

export default Home;
