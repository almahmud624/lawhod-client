import React, { useContext, useState } from "react";
import { Table, Modal, Rate, Input, message } from "antd";
import { DataContext } from "../../Context/DataProvider";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  StarFilled,
} from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

const MyReviews = () => {
  const { reviews, setReviews } = useContext(DataContext);

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

  const reviewStore = (reviews.length > 0 && reviews) || demoreviews;

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
  const data = reviewStore;
  const handleDelete = (review) => {
    Modal.confirm({
      title: "Are you sure delete this reviews?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
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
      },
      onCancel() {},
    });
  };
  const handleEdit = (review) => {
    setIsEdit(true);
    setEditReview({ ...review });
  };
  console.log(editReview?.rating);

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
