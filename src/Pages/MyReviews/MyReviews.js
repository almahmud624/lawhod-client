import React, { useContext, useEffect, useState } from "react";
import { Table, Modal, Rate, Input, message } from "antd";
import { DataContext } from "../../Context/DataProvider";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  StarFilled,
} from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { AuthContext } from "../../Context/AuthProvider";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  // load review by user email
  useEffect(() => {
    fetch(`http://localhost:4000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length < 0) {
          return;
        }
        setReviews(data);
      });
  }, [user?.email]);

  const [isEdit, setIsEdit] = useState(false);
  const [editReview, setEditReview] = useState(null);
  const [rating, setRating] = useState(editReview?.rating);
  const key = "updatable";
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
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
  const data = reviews;
  const handleDelete = (review) => {
    Modal.confirm({
      title: "Are you sure delete this reviews?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        // delete review
        fetch(`http://localhost:4000/reviews/${review?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              setReviews(reviews.filter((re) => re._id !== review._id));
              message.loading({
                content: "Loading...",
                key,
              });
              setTimeout(() => {
                message.success({
                  content: "One Review Successfully Deleted",
                  key,
                  duration: 2,
                });
              }, 1000);
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
  console.log(reviews);

  return (
    <div className="max-w-screen-lg mx-auto">
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Edit Reviews"
        okText="Update"
        visible={isEdit}
        onOk={() => {
          editReview["rating"] = rating;
          const updateReview = reviews.map((review) => {
            if (review._id === editReview._id) {
              // update review
              fetch(`http://localhost:4000/reviews/${review?._id}`, {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(editReview),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.acknowledged) {
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
