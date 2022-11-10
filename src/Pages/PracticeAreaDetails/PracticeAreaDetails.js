import React, { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import { Rate } from "antd";
import BookMeeting from "../BookMeeting/BookMeeting";
import PeopleReview from "../PeopleReview/PeopleReview";
import { useLoaderData } from "react-router-dom";
import AddReview from "../AddReview/AddReview";
import { PhotoView } from "react-photo-view";

const PracticeAreaDetails = () => {
  const singlePractice = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto my-5 py-5 px-4">
      <div className="flex flex-wrap md:flex-nowrap gap-x-20">
        <div className="left-sidebar w-full md:w-1/3">
          <div>
            <h3 className="text-4xl">{singlePractice?.practiceName}</h3>
            <hr />
          </div>
          <div className="book-meeting hidden md:block">
            <h3 className="text-2xl my-5">Book a Meeting</h3>
            <p>Free legal consultation</p>
            <section class="max-w-4xl mx-auto bg-white rounded-md  ">
              <BookMeeting />
            </section>
          </div>
        </div>
        <div className="practice-area-info w-full mt-5 md:mt-0 md:w-8/12">
          <div className="first-description">
            <p>{singlePractice?.shortDescription}</p>
          </div>
          <div className="practice-img my-2 border flex items-center justify-center p-2 shadow">
            <PhotoView src={singlePractice?.imgURL}>
              <img src={singlePractice?.imgURL} alt="" />
            </PhotoView>
          </div>
          <div className="final-description">
            <p>{singlePractice?.description}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="rating">
              <Rate
                allowHalf
                disabled
                defaultValue={Number(singlePractice?.rating)}
                className=""
              />{" "}
              <span className=" font-semibold text-xl text-green-700">
                {singlePractice?.rating}
              </span>
            </div>
            <div>{singlePractice?.fee}$/per week</div>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <div className="review flex flex-wrap md:flex-nowrap gap-5 md:gap-20">
        <div class="w-full md:w-1/3 py-4 mb-4">
          <div className="">
            <h3 className="text-3xl">Client Reviews</h3>
            <div class="flex flex-col">
              <div class="flex">
                <div className="rating mb-3">
                  <Rate allowHalf disabled defaultValue={4.5} className="" />{" "}
                  <span className=" font-semibold text-xl text-green-700">
                    4.5
                  </span>
                </div>
              </div>
              <span class="block text-gray-500 text-sm">
                Bases on 27 reviews
              </span>
            </div>
          </div>
          <hr className="mt-8" />
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
