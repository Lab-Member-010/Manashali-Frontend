import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Auth({ children }) {
  const { isLoggedIn } = useSelector((store) => store.user); // Corrected path

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/signin" />;
}

export default Auth;
