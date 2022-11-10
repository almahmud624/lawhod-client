import React, { useContext, useState } from "react";
import { Rate, Form, Modal } from "antd";
import { DataContext } from "../../Context/DataProvider";
import moment from "moment";
import { AuthContext } from "../../Context/AuthProvider";
import LoginSignUp from "../LoginSignUp/LoginSignUp";
const AddReview = ({ practiceId }) => {
  const { user } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [rating, setRating] = useState(0);
  const { reviews, setReviews } = useContext(DataContext);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    values["rating"] = rating;
    values["date"] = `${moment().format("LL")}, ${moment().format("LT")}`;
    values["practiceId"] = practiceId;
    const newReview = {
      reviewersInfo: {
        name: user.displayName,
        photo: user.photoURL,
        email: user.email,
        userId: user.uid,
      },
      ...values,
    };

    // post review on server
    fetch("https://lawhod-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews([data, ...reviews]);
      });

    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {user ? (
        <>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 20,
            }}
            initialValues={{
              remember: true,
            }}
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div class="grid grid-cols-1 gap-6 mt-4">
              <div>
                <Form.Item
                  label="Your Review"
                  name="reviewText"
                  rules={[
                    {
                      required: true,
                      message: "Please input your review!",
                    },
                  ]}
                >
                  <textarea
                    id="reviewText"
                    class=" w-full resize-y overflow-auto rounded-lg border border-gray-600 px-4 py-2 shadow-sm focus:border-gray-500 focus:outline-none hover:border-gray-500"
                  ></textarea>
                </Form.Item>
                <div className="rating mb-3">
                  <span>
                    <Rate allowHalf onChange={setRating} value={rating} />
                    {rating ? (
                      <span className="ant-rate-text font-semibold">
                        {rating}
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div class="flex justify-start">
              <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#7c5138] rounded-md hover:bg-[#533625] focus:outline-none focus:bg-gray-600">
                Post
              </button>
            </div>
          </Form>
        </>
      ) : (
        <>
          <div className=" flex justify-between items-center p-3 border-2 border-gray-300 rounded  shadow-sm">
            <span className=" text-base text-gray-600 font-semibold">
              Please! Login to Add Review
            </span>
            <button
              onClick={showModal}
              className="px-4 py-1 bg-[#7c5138] font-semibold text-white rounded-sm"
            >
              Login
            </button>
          </div>
        </>
      )}
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <LoginSignUp setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
};

export default AddReview;
