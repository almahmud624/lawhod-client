import React, { useState } from "react";
import { Rate, Form, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const PeopleReview = () => {
  const [user, setUser] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [value, setValue] = useState(3);
  console.log(value);

  return (
    <div>
      <div class="bg-white py-6 ">
        <div class="mx-auto flex gap-20">
          <div class="w-1/3 py-4 mb-4">
            <div className="">
              <h3 className="text-3xl">Client Reviews</h3>
              <div class="flex flex-col">
                <div class="flex">
                  <div className="rating mb-3">
                    <Rate allowHalf disabled defaultValue={4.5} className="" />{" "}
                    <span className=" font-semibold text-xl text-green-700">
                      4.5
                    </span>
                  </div>
                </div>
                <span class="block text-gray-500 text-sm">
                  Bases on 27 reviews
                </span>
              </div>
            </div>
            <hr className="mt-8" />
            <h4 className="text-xl text-gray-600 mt-5">Leave Your Review</h4>
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
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <div class="grid grid-cols-1 gap-6 mt-4">
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
                          <Rate allowHalf onChange={setValue} value={value} />
                          {value ? (
                            <span className="ant-rate-text font-semibold">
                              {value}
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-start">
                    <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
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
                  <button className="px-4 py-1 bg-green-600 font-semibold text-white rounded-sm">
                    Login
                  </button>
                </div>
              </>
            )}
          </div>

          <div class="divide-y w-8/12">
            <div class="flex flex-col gap-3 py-4 md:py-8">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <Avatar size="large" icon={<UserOutlined />} />
                  <div>
                    <span class="block text-sm font-bold">John McCulling</span>
                    <span class="block text-gray-500 text-sm">
                      August 28, 2021
                    </span>
                  </div>
                </div>
                <div className="rating">
                  <Rate allowHalf disabled defaultValue={4.5} className="" />{" "}
                  <span className=" font-semibold text-xl text-green-700">
                    4.5
                  </span>
                </div>
              </div>

              <p class="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
            <div class="flex flex-col gap-3 py-4 md:py-8">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <Avatar size="large" icon={<UserOutlined />} />
                  <div>
                    <span class="block text-sm font-bold">John McCulling</span>
                    <span class="block text-gray-500 text-sm">
                      August 28, 2021
                    </span>
                  </div>
                </div>
                <div className="rating">
                  <Rate allowHalf disabled defaultValue={4.5} className="" />{" "}
                  <span className=" font-semibold text-xl text-green-700">
                    4.5
                  </span>
                </div>
              </div>

              <p class="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
            <div class="flex flex-col gap-3 py-4 md:py-8">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <Avatar size="large" icon={<UserOutlined />} />
                  <div>
                    <span class="block text-sm font-bold">John McCulling</span>
                    <span class="block text-gray-500 text-sm">
                      August 28, 2021
                    </span>
                  </div>
                </div>
                <div className="rating">
                  <Rate allowHalf disabled defaultValue={4.5} className="" />{" "}
                  <span className=" font-semibold text-xl text-green-700">
                    4.5
                  </span>
                </div>
              </div>

              <p class="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleReview;
