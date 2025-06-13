import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/User/Home/Home.jsx";
// import SignUp from "./Components/User/Authentication/Signup.jsx";
// import Signin from "./Components/User/Authentication/Signin.jsx";
// import Verifyotp from "./Components/User/Authentication/Verifyotp.jsx";
// import ForgetPassword from "./Components/User/Authentication/ForgetPassword.jsx";
// import ResetPassword from "./Components/User/Authentication/ResetPassword.jsx";
// import QuizGetStarted from "./Components/User/Quiz/QuizGetStarted.jsx";
// import Quiz from "./Components/User/Quiz/Quiz.jsx";
// import Feed from "./Components/User/Feed/Feed.jsx";
// import Auth from "./Components/User/Authorization/Auth.jsx";
// import Personality from "./Components/User/Quiz/personality.jsx";
// import Profile from "./Components/User/Feed/profile/ProfileSetting.jsx";
// import Notification from "./Components/User/Feed/notification/Notification.jsx";
// import Admin from "./Components/Admin/Admin.jsx";
// import AdminLogin from "./Components/Admin/AdminLogin.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Admin Page */}
        {/* <Route path="/admin" element={<Admin />} /> */}

        {/* Community Admin */}
        {/* <Route path="/admin-login" element={<AdminLogin />} /> */}

        {/* Signup Page */}
        {/* <Route path="/signup" element={<SignUp />} /> */}

        {/* OTP Verification Page */}
        {/* <Route path="/verify-otp" element={<Verifyotp />} /> */}

        {/* Sign-in Page */}
        {/* <Route path="/signin" element={<Signin />} /> */}

        {/* Forgot Password Page */}
        {/* <Route path="/forgot-password" element={<ForgetPassword />} /> */}

        {/* Reset Password Page */}
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}

        {/* Quiz Get Started Page */}
        {/* <Route path="/quiz-start" element={<Auth><QuizGetStarted /></Auth>} /> */}

        {/* Quiz Page */}
        {/* <Route path="/quiz" element={<Auth><Quiz /></Auth>} /> */}

        {/* Feed Page */}
        {/* <Route path="/feed" element={<Auth><Feed /></Auth>} /> */}

        {/* Profile */}
        {/* <Route path="/profile" element={<Profile />} /> */}

        {/* Notification */}
        {/* <Route path="/notifications" element={< Notification />} /> */}

        {/* Personality Page */}
        {/* <Route path="/personality" element={<Auth><Personality /></Auth>} /> */}

      </Routes>

    </>
  );
};

export default App;