import React from "react";
import { Link } from "react-router-dom";

const CaseResult = () => {
  return (
    <>
      <section
        id="case-result"
        className="py-20 text-[#ddd0c8] my-5 px-4 bg-gray-700"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-10">
            <h2 className="md:text-5xl text-3xl text-[#ddd0c8]">
              Our Case Results
            </h2>
            <hr className="max-w-[12rem] border-gray-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 text-[#ddd0c8]">
            <div>
              <div className="shadow-lg mb-5 w-full md:w-11/12 h-64">
                <img
                  src="https://gray-wsaz-prod.cdn.arcpublishing.com/resizer/hmBVNJZPS5KvFUVK4rFfXxnLRB8=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/O6G3D7EHRRAOPPZ4SBDOL25TQY.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl text-[#ddd0c8]">
                $825,000 Tractor Trailer Accident
              </h3>
              <Link
                to="/"
                class="inline-flex h-12 w-1/2  items-center justify-center border-2 border-transparent rounded bg-[#7c5138] md:px-10 text-base px-4 font-medium tracking-wide text-white shadow-md md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-transparent hover:border-[#7c5138] hover:text-white  transition-all duration-500 capitalize"
              >
                Know More{" "}
              </Link>
            </div>
            <div>
              <div className="shadow-lg mb-5 w-full md:w-11/12 h-64">
                <img
                  src="https://cdn-gcgdh.nitrocdn.com/gfcbrZkYQalxoOfLKxTelAACBenZUznC/assets/static/optimized/rev-ef514e5/wp-content/uploads/2022/04/image2.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl text-[#ddd0c8]">
                $50,000 Property Damage Settlement
              </h3>
              <Link
                to="/"
                class="inline-flex h-12 w-1/2  items-center justify-center border-2 border-transparent rounded bg-[#7c5138] md:px-10 text-base px-4 font-medium tracking-wide text-white shadow-md md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-transparent hover:border-[#7c5138] hover:text-white  transition-all duration-500 capitalize"
              >
                Know More{" "}
              </Link>
            </div>
            <div>
              <div className="shadow-lg mb-5 w-full md:w-11/12 h-64">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEXUIUZzS6LpkN8sEXMGNRvquDFZ4mWRz4Q&usqp=CAU"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl text-[#ddd0c8]">
                $825,000 Tractor Trailer Accident
              </h3>
              <Link
                to="/"
                class="inline-flex h-12 w-1/2  items-center justify-center border-2 border-transparent rounded bg-[#7c5138] md:px-10 text-base px-4 font-medium tracking-wide text-white shadow-md md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-transparent hover:border-[#7c5138] hover:text-white  transition-all duration-500 capitalize"
              >
                Know More{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseResult;
