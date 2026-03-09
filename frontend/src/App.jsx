import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./redux/features/Auth/authSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy load pages
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Home = lazy(() => import("./pages/Home"));
const Job = lazy(() => import("./pages/Job"));
const Course = lazy(() => import("./pages/Course"));
const Profile = lazy(() => import("./pages/Profile"));
const Career = lazy(() => import("./pages/Career"));
const Companies = lazy(() => import("./components/Companies"));
const Form = lazy(() => import("./components/Form"));
const CourseModule = lazy(() => import("./pages/CourseModule"));
const Progress = lazy(() => import("./pages/Progress"));

const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {/* Full height flex container */}
      <div className="flex flex-col min-h-screen">
        <Header />

        {/* Main content grows */}
        <main className="flex-1">
          <Suspense fallback={<div className="min-h-screen flex justify-center items-center">Loading page...</div>}>
            <Routes>
              {/* 🔒 Protected Routes */}
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/job" element={<ProtectedRoute><Job /></ProtectedRoute>} />
              <Route path="/course" element={<ProtectedRoute><Course /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/career" element={<ProtectedRoute><Career /></ProtectedRoute>} />
              <Route path="/companies" element={<ProtectedRoute><Companies /></ProtectedRoute>} />
              <Route path="/jobs/:jobId" element={<ProtectedRoute><Form /></ProtectedRoute>} />
              <Route path="/course/:id" element={<ProtectedRoute><CourseModule /></ProtectedRoute>} />
              <Route path="/progress" element={<ProtectedRoute><Progress /></ProtectedRoute>} />

              {/* 🔓 Public Routes */}
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;