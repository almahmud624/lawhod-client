import React, { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import { Rate } from "antd";
import BookMeeting from "../BookMeeting/BookMeeting";
import PeopleReview from "../PeopleReview/PeopleReview";
import { useParams } from "react-router-dom";

const PracticeAreaDetails = () => {
  const { practiceAreas } = useContext(DataContext);
  const { id } = useParams();
  const singlePractice = practiceAreas?.find(
    (practice) => practice._id === Number(id)
  );

  return (
    <div className="max-w-screen-xl mx-auto my-5 py-5">
      <div className="flex gap-x-20">
        <div className="left-sidebar w-1/3">
          <div>
            <h3 className="text-4xl">{singlePractice?.practiceName}</h3>
            <hr />
          </div>
          <div className="book-meeting">
            <h3 className="text-2xl my-5">Book a Meeting</h3>
            <p>Free legal consultation</p>
            <section class="max-w-4xl mx-auto bg-white rounded-md  ">
              <BookMeeting />
            </section>
          </div>
        </div>
        <div className="practice-area-info w-8/12">
          <div className="first-description">
            <p>{singlePractice?.shortDescription}</p>
          </div>
          <div className="practice-img my-2 border flex items-center justify-center p-2 shadow">
            <img src={singlePractice?.imgURL} alt="" />
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
      <div className="review">
        <PeopleReview />
      </div>
    </div>
  );
};

export default PracticeAreaDetails;
