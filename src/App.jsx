import "./App.css";
import { useState, useEffect } from "react";
import { LandingPage } from "./components/home/LandingPage";
import MerchandisePage from "./components/MerchandisePage";
import Eventpage from "./components/Events/Eventpage";
import EventRegistration from "./components/Events/EventRegistration";
import { DashboardPage } from "./components/protected_routes/DashboardPage";
import Signup from "./components/login/Signup";
import Login from "./components/login/Login";
import EmailVerify from "./components/login/EmailVerify";
import ResetPassword from "./components/login/ResetPassword";
import ForgotPassword from "./components/login/ForgotPassword";
import PageNotFound from "./components/PageNotFound";
import { WorkshopPage } from "./components/workshop/WorkshopPage";

import { ProtectedRoute } from "./components/protected_routes/AuthRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notifications from "./components/protected_routes/Notifications";
import { Toaster } from "react-hot-toast";
import { logoutCall } from "./services/http/auth";

function App() {
  const [user, setUser] = useState("");

  const handleLogout = async () => {
    setUser("");
    localStorage.removeItem("sid");
    localStorage.removeItem("providerID");
    await logoutCall();
  };

  useEffect(() => {
    const token = localStorage.getItem("sid");
    if (token) verifyToken(token);
  }, [user]);

  const verifyToken = async (token) => {
    const headers = { Authorization: `Bearer ${token}` };
    const response = await fetch("/api/verify", { headers });
    if (response.ok) {
      setUser(token);
    } else {
      setUser("");
      localStorage.removeItem("sid");
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route element={<ProtectedRoute accessAllowed={!!user} />}>
            <Route
              path="/dashboard"
              element={<DashboardPage logout={handleLogout} />}
            />
          </Route>
          <Route>
            <Route
              path="/merchandise"
              element={
                <ProtectedRoute accessAllowed={!!user}>
                  <MerchandisePage />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route>
            <Route
              path="/notifications"
              element={
                // <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Notifications user={user} />
                // </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/events" element={<Eventpage />} />
          <Route path="/eventregistration" element={<EventRegistration />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/verify" element={<EmailVerify />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/workshop" element={<WorkshopPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
