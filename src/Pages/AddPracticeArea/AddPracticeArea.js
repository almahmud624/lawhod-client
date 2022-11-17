import React, { useContext, useState } from "react";
import { Form, Select, message } from "antd";
import { DataContext } from "../../Context/DataProvider";
import useDynamicTitle from "../../Hook/useDynamicTitle";

const AddPracticeArea = () => {
  const { practiceAreas, setPracticeAreas } = useContext(DataContext);
  const [rating, setRating] = useState(0);
  const key = "updatable";

  // title show dynamically
  useDynamicTitle("Add Reviews || Add new review");

  const handleChange = (value) => {
    setRating(value);
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    values["rating"] = rating;

    fetch("https://lawhod-server.vercel.app/practice-areas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        setPracticeAreas([...practiceAreas, data]);
        message.loading({
          content: "New practice area updateing",
          key,
        });
        setTimeout(() => {
          message.success({
            content: "New practice area updated",
            key,
            duration: 2,
          });
        }, 1000);
      });

    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-slate-300">
      <div className="max-w-screen-lg md:px-20 mx-auto  pt-10 py-20 rounded-sm px-4">
        <h1 className="text-4xl capitalize">Create new preactice area</h1>
        <hr className="border-[#4e362846]" />
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
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
          <div className="grid grid-cols-1 gap-6 mt-4">
            <div>
              <Form.Item
                label="Preatice Area Name"
                name="practiceName"
                className="mb-0 p-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <input
                  id="practiceName"
                  type="text"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-600 rounded-md     "
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label="Img URL"
                name="imgURL"
                className="mb-0 p-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your Practice Area related img URL!",
                  },
                ]}
              >
                <input
                  id="imgURL"
                  type="text"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-600 rounded-md     "
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label="Short Description"
                name="shortDescription"
                rules={[
                  {
                    required: true,
                    message: "Please input your description!",
                  },
                ]}
              >
                <textarea
                  id="shortDescription"
                  className=" w-full resize-y overflow-auto rounded-lg border border-gray-600 px-4 py-2 shadow-sm focus:border-gray-500 focus:outline-none hover:border-gray-500"
                ></textarea>
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input your description!",
                  },
                ]}
              >
                <textarea
                  id="description"
                  className=" w-full resize-y overflow-auto rounded-lg border border-gray-600 px-4 py-2 shadow-sm focus:border-gray-500 focus:outline-none hover:border-gray-500"
                ></textarea>
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label="Practice Fee"
                name="fee"
                rules={[
                  {
                    required: true,
                    message: "Please input your practice fee!",
                  },
                ]}
              >
                <input
                  id="fee"
                  type="fee"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-600 rounded-md     "
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label="Select Rating"
                name="rating"
                rules={[
                  {
                    required: true,
                    message: "Please input your practice fee!",
                  },
                ]}
              >
                <Select
                  defaultValue="3"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "1",
                      label: "1",
                    },
                    {
                      value: "1.5",
                      label: "1.5",
                    },
                    {
                      value: "2",
                      label: "2",
                    },
                    {
                      value: "2.5",
                      label: "2.5",
                    },
                    {
                      value: "3",
                      label: "3",
                    },
                    {
                      value: "3.5",
                      label: "3.5",
                    },
                    {
                      value: "4",
                      label: "4",
                    },
                    {
                      value: "4.5",
                      label: "4.5",
                    },
                    {
                      value: "5",
                      label: "5",
                    },
                  ]}
                />
              </Form.Item>
            </div>
          </div>

          <div className="flex justify-start">
            <button className="px-8 mt-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Book
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddPracticeArea;
