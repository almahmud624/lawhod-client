import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { AuthContext } from "../../Context/AuthProvider";

const SocialLogin = () => {
  const { userGoogleSignIn, userFacebookSignIn } = useContext(AuthContext);

  // user google sign in
  const handleGoogleSignIn = () => {
    userGoogleSignIn()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  // user facebook sign in
  const handleFacebookSignIn = () => {
    userFacebookSignIn()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <div className="px-6">
      <div className="text-center capitalize text-gray-600">
        <span className="mt-5 inline-block">or continue with</span>
      </div>
      <div className="flex justify-center gap-10 my-5 ">
        <Link
          onClick={handleGoogleSignIn}
          className="flex items-center rounded gap-1 bg-gray-600 w-full py-3 justify-center"
        >
          <GoogleOutlined
            style={{ fontSize: "1.5em", color: "rgb(229, 231, 235)" }}
          />{" "}
          <span className="font-semibold text-base text-gray-200">Google</span>
        </Link>
        <Link
          onClick={handleFacebookSignIn}
          className="flex items-center rounded gap-1 bg-gray-600 w-full py-3 justify-center"
        >
          <FacebookOutlined
            style={{ fontSize: "1.5em", color: "rgb(229, 231, 235)" }}
          />
          <span className="font-semibold text-base text-gray-200">
            Facebook
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;
