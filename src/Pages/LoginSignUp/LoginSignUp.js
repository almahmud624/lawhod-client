import {
  LockOutlined,
  MailOutlined,
  PictureOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Form } from "antd";
import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const LoginSignUp = ({ setIsModalOpen }) => {
  const { userProfileUpdate, userCreate, userSignIn } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { name, picURL, email, password } = values;
    if (!isLogin) {
      // create new user
      userCreate(email, password)
        .then((res) => {
          userProfileUpdate({ displayName: name, photoURL: picURL })
            .then((res) => {})
            .catch((error) => console.log(error.code));
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.code);
        });
    } else {
      // sign in with email password
      userSignIn(email, password)
        .then((res) => {
          const user = res.user;

          // get jwt token
          const currentUser = {
            email: user?.email,
          };
          fetch("https://lawhod-server.vercel.app/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              //set token on local storage
              localStorage.setItem("lawhod-token", data.token);
              // redirect user
              navigate(from, { replace: true });
            });
        })
        .catch((error) => {
          console.log(error.code);
        });
    }

    form.resetFields();
    if (location?.pathname !== "/login") {
      setIsModalOpen(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-white">
      <section
        className={`${
          location?.pathname === "/login" && "max-w-lg mx-auto py-10 mb-20"
        }`}
      >
        <div className="flex items-center justify-center mt-6">
          <button
            className={`w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2  ${
              isLogin && " border-blue-500 dark:border-blue-400 border-b-2 "
            }`}
            onClick={() => setIsLogin(true)}
          >
            log in
          </button>

          <button
            className={`w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2  ${
              !isLogin && " border-blue-500 dark:border-blue-400 border-b-2 "
            }`}
            onClick={() => setIsLogin(false)}
          >
            sign up
          </button>
        </div>
        <div className="container flex items-center justify-center px-6 mx-auto">
          <Form
            className="w-full max-w-md"
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
            name="control-hooks"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {isLogin ? undefined : (
              <>
                <div className="relative flex items-center mt-6">
                  <span className="absolute z-30">
                    <UserOutlined
                      style={{
                        margin: "0 0.75rem",
                        height: "1.5rem",
                        width: "1.5rem",
                        fontSize: "1.3em",
                        color: "rgb(107, 114, 128)",
                      }}
                    />
                  </span>

                  <Form.Item
                    className="w-full"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <input
                      type="text"
                      className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Your Name"
                    />
                  </Form.Item>
                </div>
                <div className="relative flex items-center mt-6">
                  <span className="absolute z-30">
                    <PictureOutlined
                      style={{
                        margin: "0 0.75rem",
                        height: "1.5rem",
                        width: "1.5rem",
                        fontSize: "1.3em",
                        color: "rgb(107, 114, 128)",
                      }}
                    />
                  </span>

                  <Form.Item
                    className="w-full"
                    name="picURL"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <input
                      type="text"
                      className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Your PicURL"
                    />
                  </Form.Item>
                </div>
              </>
            )}

            <div className="relative flex items-center mt-6">
              <span className="absolute z-30">
                <MailOutlined
                  style={{
                    margin: "0 0.75rem",
                    height: "1.5rem",
                    width: "1.5rem",
                    fontSize: "1.3em",
                    color: "rgb(107, 114, 128)",
                  }}
                />
              </span>

              <Form.Item
                className="w-full"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <input
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </Form.Item>
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute z-30">
                <LockOutlined
                  style={{
                    margin: "0 0.75rem",
                    // height: "1.5rem",
                    // width: "1.5rem",
                    fontSize: "1.3em",
                    color: "rgb(107, 114, 128)",
                  }}
                />
              </span>

              <Form.Item
                className="w-full"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <input
                  type="password"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </Form.Item>
            </div>

            {/* <div className="relative flex items-center mt-6">
              <span className="absolute z-30">
                <LockOutlined
                  style={{
                    margin: "0 0.75rem",
                    height: "1.5rem",
                    width: "1.5rem",
                    fontSize: "1.3em",
                    color: "rgb(107, 114, 128)",
                  }}
                />
              </span>

              <Form.Item
                className="w-full"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <input
                  type="password"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Confirm Password"
                />
              </Form.Item>
            </div> */}

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                {isLogin ? "Login" : "Sign up"}
              </button>
            </div>
          </Form>
        </div>
        <SocialLogin />
        {isLogin ? (
          <>
            <div className="mt-6 text-center">
              <button
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                onClick={() => setIsLogin(false)}
              >
                You don't have an account? Create one.
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mt-6 text-center">
              <button
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                onClick={() => setIsLogin(true)}
              >
                Already have an account?
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default LoginSignUp;
