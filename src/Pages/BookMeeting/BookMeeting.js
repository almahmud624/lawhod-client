import React from "react";
import { Form } from "antd";

const BookMeeting = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
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
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="grid grid-cols-1 gap-6 mt-4">
          <div>
            <Form.Item
              label="Your Name"
              name="name"
              className="mb-0 p-0"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <input
                id="name"
                type="text"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-600 rounded-md     "
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Your Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <input
                id="email"
                type="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-600 rounded-md     "
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: false,
                  message: "Please input your phone!",
                },
              ]}
            >
              <input
                id="phone"
                type="text"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-600 rounded-md     "
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Message"
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
                className="mb-8 w-full resize-y overflow-auto rounded-lg border border-gray-600 px-4 py-2 shadow-sm focus:border-gray-500 focus:outline-none hover:border-gray-500"
              ></textarea>
            </Form.Item>
          </div>
        </div>

        <div className="flex justify-start">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Book
          </button>
        </div>
      </Form>
    </div>
  );
};

export default BookMeeting;
