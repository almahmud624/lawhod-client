import React, { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import { AlertOutlined, StarOutlined } from "@ant-design/icons";

const PeopleReview = ({ pracId }) => {
  const { reviews } = useContext(DataContext);
  const reviewsFilterById = reviews?.filter(
    (review) => review?.practiceId === pracId
  );

  return (
    <div>
      <div class="bg-white ">
        {reviewsFilterById.length > 0 ? (
          <div class="mx-auto flex flex-col gap-5">
            {reviewsFilterById?.map((review) => (
              <div key={Math.random()} class="divide-y">
                <div class="flex flex-col gap-3 py-2 md:py-4 md:pb-1 rounded justify-center bg-gray-200 px-4">
                  <div className="flex justify-between ">
                    <div className="flex gap-3">
                      <img
                        src={review?.reviewersInfo?.photo}
                        className="h-8 w-8 rounded-full"
                        alt=""
                      />
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
                      <span
                        style={{ color: "#7c5138" }}
                        className=" flex items-center gap-1  font-semibold text-xl text-green-700"
                      >
                        <StarOutlined style={{ color: "#7c5138" }} />
                        <span style={{ color: "#7c5138" }}>
                          {review?.rating}
                        </span>
                      </span>
                    </div>
                  </div>

                  <p class="text-gray-600">{review?.reviewText}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div class=" border  border-blue-100 bg-white shadow" role="alert">
              <div class="flex items-center px-4 py-4">
                <span class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-400 text-white">
                  <AlertOutlined />
                </span>

                <span class=" text-lg font-medium sm:ml-3">
                  No reviews found, Leave your review.
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PeopleReview;
