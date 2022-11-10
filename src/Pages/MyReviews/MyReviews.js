import React, { useContext, useEffect, useState } from "react";
import { Table, Modal, Rate, message } from "antd";
import { DataContext } from "../../Context/DataProvider";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  StarFilled,
} from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { AuthContext } from "../../Context/AuthProvider";
import useDynamicTitle from "../../Hook/useDynamicTitle";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user, userSignOut } = useContext(AuthContext);
  const { practiceAreas } = useContext(DataContext);

  // title show dynamically
  useDynamicTitle("My Reviews || Delete & Update Review");

  // filter practice by _id & adding practice name on reviews
  let reviewsStore = [];
  reviews.map((item) => {
    return practiceAreas.map((i) => {
      if (i?._id === item?.practiceId) {
        item["practiceName"] = i.practiceName;
        reviewsStore.push(item);
      }
      return item;
    });
  });

  // load review by user email
  useEffect(() => {
    fetch(`https://lawhod-server.vercel.app/reviews/${user?.email}`, {
      //sent token by headers
      headers: {
        authorization: `Bearer ${localStorage.getItem("lawhod-token")}`,
      },
    })
      .then((res) => {
        // check user validity
        if (res.status === 401 || res.status === 403) {
          // if user id invalid, we logged out user
          return userSignOut();
        }
        return res.json();
      })
      .then((data) => {
        if (data.length < 0) {
          return;
        }
        setReviews(data);
      });
  }, [user?.email, userSignOut]);

  const [isEdit, setIsEdit] = useState(false);
  const [editReview, setEditReview] = useState(null);
  const [rating, setRating] = useState(editReview?.rating);
  const key = "updatable";
  const columns = [
    {
      title: "Preactice Name",
      dataIndex: "practiceName",
      key: "practiceName",
    },
    {
      title: "Review Text",
      dataIndex: "reviewText",
      key: "reviewText",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => (
        <>
          <span className="flex items-center">
            {rating}
            <StarFilled className="ml-1" style={{ color: "#FF9529" }} />
          </span>
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (review) => (
        <>
          <div className="flex gap-3">
            <button>
              <EditOutlined onClick={() => handleEdit(review)} />
            </button>
            <button onClick={() => handleDelete(review)}>
              <DeleteOutlined />
            </button>
          </div>
        </>
      ),
    },
  ];
  const data = reviewsStore;
  const handleDelete = (review) => {
    Modal.confirm({
      title: "Are you sure delete this reviews?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        // delete review
        fetch(`https://lawhod-server.vercel.app/reviews/${review?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              setReviews(reviews.filter((re) => re._id !== review._id));
              message.loading({
                content: "Review Deleting...",
                key,
              });
              setTimeout(() => {
                message.success({
                  content: "One Review Successfully Deleted",
                  key,
                  duration: 2,
                });
              }, 2000);
            }
          });
      },
      onCancel() {},
    });
  };
  const handleEdit = (review) => {
    setIsEdit(true);
    setEditReview({ ...review });
  };

  return (
    <div className="max-w-screen-lg mx-auto py-20 px-4">
      <Table
        columns={columns}
        dataSource={data}
        style={{ textTransform: "inherit" }}
        scroll={{
          x: 750,
        }}
      />
      <Modal
        title="Edit Reviews"
        okText="Update"
        visible={isEdit}
        onOk={() => {
          editReview["rating"] = rating;
          const updateReview = reviews.map((review) => {
            if (review._id === editReview._id) {
              // update review
              fetch(`https://lawhod-server.vercel.app/reviews/${review?._id}`, {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(editReview),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.acknowledged) {
                    message.loading({
                      content: "Edited review updating",
                      key,
                    });
                    setTimeout(() => {
                      message.success({
                        content: "Edited review updated",
                        key,
                        duration: 3,
                      });
                    }, 2000);
                  }
                });
              return editReview;
            } else {
              return review;
            }
          });
          setReviews(updateReview);
          setIsEdit(false);
        }}
        onCancel={() => setIsEdit(false)}
      >
        <div>
          <label htmlFor="review" className="mb-2 inline-block">
            Your Review
          </label>
          <TextArea
            id="review"
            value={editReview?.reviewText}
            style={{
              borderRadius: "5px",
              boxShadow: "none",
              marginBottom: "5px",
            }}
            onChange={(e) => {
              setEditReview((editReview) => {
                return { ...editReview, reviewText: e.target.value };
              });
            }}
          ></TextArea>
          <div className="rating my-5">
            <span className=" block">Your Rating</span>
            <span>
              <Rate allowHalf value={rating} onChange={setRating} />
              {rating ? (
                <span className="ant-rate-text font-semibold">{rating}</span>
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyReviews;
