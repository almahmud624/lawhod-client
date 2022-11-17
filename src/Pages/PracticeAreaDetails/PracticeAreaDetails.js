import React from "react";
import { Rate } from "antd";
import BookMeeting from "../BookMeeting/BookMeeting";
import PeopleReview from "../PeopleReview/PeopleReview";
import { useLoaderData } from "react-router-dom";
import AddReview from "../AddReview/AddReview";
import { PhotoView } from "react-photo-view";
import useDynamicTitle from "../../Hook/useDynamicTitle";
import { StarOutlined } from "@ant-design/icons";

const PracticeAreaDetails = () => {
  const singlePractice = useLoaderData();

  //  title show dynamically
  useDynamicTitle("Practice Area Details & Leave You Review");

  return (
    <div className="max-w-screen-xl mx-auto my-5 py-5 px-4 mb-14 md:mb-0">
      <div className="flex flex-wrap md:flex-nowrap gap-x-20">
        <div className="left-sidebar w-full md:w-1/3">
          <div>
            <h3 className="text-4xl">{singlePractice?.practiceName}</h3>
            <hr className="border-[#4e362846]" />
          </div>
          <div className="book-meeting hidden md:block">
            <h3 className="text-2xl my-5">Book a Meeting</h3>
            <p>Free legal consultation</p>
            <section className="max-w-4xl mx-auto bg-white rounded-md  ">
              <BookMeeting />
            </section>
          </div>
        </div>
        <div className="practice-area-info w-full mt-5 md:mt-0 md:w-8/12">
          <div className="first-description text-base">
            <p>{singlePractice?.shortDescription}</p>
          </div>
          <div className="practice-img my-2 border flex items-center justify-center p-2 shadow">
            <PhotoView src={singlePractice?.imgURL}>
              <img
                src={singlePractice?.imgURL}
                alt=""
                className="w-full h-full object-cover"
              />
            </PhotoView>
          </div>
          <div className="final-description text-base">
            <p>{singlePractice?.description}</p>
          </div>
          <div className="flex justify-between items-center ">
            <div className="rating">
              <span
                style={{ color: "#7c5138" }}
                className=" flex items-center gap-1  font-semibold text-xl text-green-700"
              >
                <StarOutlined style={{ color: "#7c5138" }} />
                <span style={{ color: "#7c5138" }}>
                  {singlePractice?.rating}
                </span>
              </span>
            </div>
            <div>{singlePractice?.fee}$/per week</div>
          </div>
        </div>
      </div>
      <hr className="my-8 border-[#4e362846]" />
      <div className="review flex flex-wrap md:flex-nowrap gap-5 md:gap-20">
        <div className="w-full md:w-1/3 py-4 mb-4">
          <div className="">
            <h3 className="text-3xl text-gra-700">Client Reviews</h3>
            <div className="flex flex-col">
              <div className="flex">
                <div className="rating mb-3">
                  <span
                    style={{ color: "#7c5138" }}
                    className=" flex items-center gap-1  font-semibold text-xl text-green-700"
                  >
                    <StarOutlined style={{ color: "#7c5138" }} />
                    <span style={{ color: "#7c5138" }}>4.5</span>
                  </span>
                </div>
              </div>
              <span className="block text-gray-500 text-sm">
                Bases on 27 reviews
              </span>
            </div>
          </div>
          <hr className="mt-8 border-[#4e362846]" />
          <h4 className="text-xl text-gray-600 mt-5">Leave Your Review</h4>
          <AddReview practiceId={singlePractice?._id} />
        </div>

        <div className="w-full md:w-8/12">
          <PeopleReview pracId={singlePractice?._id} />
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaDetails;
