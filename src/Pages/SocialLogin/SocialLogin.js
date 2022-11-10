import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { AuthContext } from "../../Context/AuthProvider";
import { setJwtAuth } from "../../Utilities/jwtAuth";

const SocialLogin = ({ setIsModalOpen }) => {
  const { userGoogleSignIn, userFacebookSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  // user google sign in
  const handleGoogleSignIn = () => {
    userGoogleSignIn()
      .then((res) => {
        setJwtAuth(res.user);
        navigate(from, { replace: true });
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  // user facebook sign in
  const handleFacebookSignIn = () => {
    userFacebookSignIn()
      .then((res) => {
        setJwtAuth(res.user);
        navigate(from, { replace: true });
        setIsModalOpen(false);
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
          className="flex items-center rounded gap-1 bg-[#7c5138] w-full py-3 justify-center"
        >
          <GoogleOutlined
            style={{ fontSize: "1.5em", color: "rgb(229, 231, 235)" }}
          />{" "}
          <span className="font-semibold text-base text-gray-200">Google</span>
        </Link>
        <Link
          onClick={handleFacebookSignIn}
          className="flex items-center rounded gap-1 bg-[#7c5138] w-full py-3 justify-center"
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
