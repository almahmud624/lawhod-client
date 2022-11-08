import React, { useContext, useState } from "react";
import { Table, Modal, Rate } from "antd";
import { DataContext } from "../../Context/DataProvider";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Form } from "react-router-dom";

const MyReviews = () => {
  const { reviews, setReviews } = useContext(DataContext);
  const [isEdit, setIsEdit] = useState(false);
  const [editReview, setEditReview] = useState(null);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
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
        setReviews(reviews.filter((re) => re.id !== review.id));
      },
      onCancel() {},
    });
  };
  const handleEdit = (review) => {
    setIsEdit(true);
    setEditReview({ ...review });
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Edit Reviews"
        okText="Update"
        visible={isEdit}
        onOk={() => setIsEdit(false)}
        onCancel={() => setIsEdit(false)}
      >
        <div>
          <Form.Item
            label="Your Review"
            name="message"
            rules={[
              {
                required: true,
                message: "Please input your message!",
              },
            ]}
          >
            <textarea
              id="message"
              class=" w-full resize-y overflow-auto rounded-lg border border-gray-600 px-4 py-2 shadow-sm focus:border-gray-500 focus:outline-none hover:border-gray-500"
            ></textarea>
          </Form.Item>
          <div className="rating mb-3">
            <span>
              <Rate allowHalf value={editReview?.rating} />
              {editReview?.rating ? (
                <span className="ant-rate-text font-semibold">
                  {editReview?.rating}
                </span>
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
