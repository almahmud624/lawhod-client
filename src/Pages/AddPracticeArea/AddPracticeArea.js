import React, { useContext, useState } from "react";
import { Form, Select } from "antd";
import { DataContext } from "../../Context/DataProvider";

const AddPracticeArea = () => {
  const { practiceAreas, setPracticeAreas } = useContext(DataContext);
  const [rating, setRating] = useState(0);
  const handleChange = (value) => {
    setRating(value);
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    values["rating"] = rating;

    fetch("http://localhost:4000/practice-areas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPracticeAreas([...practiceAreas, data]);
      });

    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-w-screen-lg mx-auto bg-slate-300 p-10 m-10 rounded-sm">
      <h1 className="text-4xl capitalize">Create new preactice area</h1>
      <hr />
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
        <div class="grid grid-cols-1 gap-6 mt-4">
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
                class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-600 rounded-md     "
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
                class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-600 rounded-md     "
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
                class=" w-full resize-y overflow-auto rounded-lg border border-gray-600 px-4 py-2 shadow-sm focus:border-gray-500 focus:outline-none hover:border-gray-500"
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
                class=" w-full resize-y overflow-auto rounded-lg border border-gray-600 px-4 py-2 shadow-sm focus:border-gray-500 focus:outline-none hover:border-gray-500"
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
                class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-600 rounded-md     "
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

        <div class="flex justify-start">
          <button class="px-8 mt-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Book
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddPracticeArea;
