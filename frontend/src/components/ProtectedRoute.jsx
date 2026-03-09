import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { userData, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      Checking authentication...
    </div>
  );
}

  if (!userData) {
    return <Navigate to="/login" replace/>;
  }

  return children;
};

export default ProtectedRoute;