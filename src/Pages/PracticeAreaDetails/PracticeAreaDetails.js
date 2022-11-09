import React, { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import { Rate } from "antd";
import BookMeeting from "../BookMeeting/BookMeeting";
import PeopleReview from "../PeopleReview/PeopleReview";
import { useParams } from "react-router-dom";
import AddReview from "../AddReview/AddReview";

const PracticeAreaDetails = () => {
  const { practiceAreas } = useContext(DataContext);

  const demopracticeAreas = [
    {
      practiceName: "Cheyenne Stark",
      imgURL:
        "https://media.istockphoto.com/id/171096042/photo/lawyer-holding-document-and-speaking-to-jury-in-courtroom.jpg?s=612x612&w=0&k=20&c=gEh_JtKcg1KUk0Rw-urwMd3ZpTV_EtTSw7gQHgnND6g=",
      shortDescription:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in',
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      fee: "234",
      rating: "2.5",
      _id: 2841,
    },
    {
      practiceName: "Xander Grimes",
      imgURL:
        "https://t3.ftcdn.net/jpg/02/05/60/06/360_F_205600667_N6gr8oHn6du4nxH8zADIOuPpW3m1wX1A.jpg",
      shortDescription:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in',
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      fee: "432",
      rating: "4",
      _id: 3953,
    },
  ];
  const practiceStore =
    (practiceAreas.length > 0 && practiceAreas) || demopracticeAreas;
  const { id } = useParams();
  const singlePractice = practiceStore?.find(
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
      <div className="review flex gap-20">
        <div class="w-1/3 py-4 mb-4">
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

        <div className="w-8/12">
          <PeopleReview />
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaDetails;
