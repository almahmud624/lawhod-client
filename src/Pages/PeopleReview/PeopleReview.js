import React, { useContext, useState } from "react";
import { Rate, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { DataContext } from "../../Context/DataProvider";

const PeopleReview = () => {
  const { reviews } = useContext(DataContext);
  const demoreviews = [
    {
      reviewersInfo: {
        name: "Mahmud",
        photo:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        email: "mahmud!@gmail.com",
        userId: "uV9KQiJUl3f6GUni8pToWeztwUo2",
      },
      reviewText:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet",
      _id: 1750,
      rating: 4.5,
      date: "November 8, 2022, 11:36 PM",
    },
    {
      reviewersInfo: {
        name: "Mahmud",
        photo:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        email: "mahmud!@gmail.com",
        userId: "uV9KQiJUl3f6GUni8pToWeztwUo2",
      },
      reviewText:
        "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
      _id: 2939,
      rating: 4.5,
      date: "November 8, 2022, 11:42 PM",
    },
  ];
  let reviewStore = reviews || demoreviews;
  return (
    <div>
      <div class="bg-white ">
        <div class="mx-auto flex flex-col ">
          {reviewStore?.map((review) => (
            <div key={Math.random()} class="divide-y">
              <div class="flex flex-col gap-3 py-4 md:py-8">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <Avatar src={review?.reviewersInfo?.photo} />
                    <div>
                      <span class="block text-sm font-bold">
                        {review?.reviewersInfo?.name}
                      </span>
                      <span class="block text-gray-500 text-sm">
                        {review?.date}
                      </span>
                    </div>
                  </div>
                  <div className="rating">
                    <Rate
                      allowHalf
                      disabled
                      defaultValue={review?.rating}
                      className=""
                    />{" "}
                    <span className=" font-semibold text-xl text-green-700">
                      4.5
                    </span>
                  </div>
                </div>

                <p class="text-gray-600">{review?.reviewText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleReview;
