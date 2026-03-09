import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const { userData, isLoading } = useSelector((state) => state.auth);

  if (isLoading) return <div>Loading...</div>;

  // If user is logged in, redirect to Home
  if (userData) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;