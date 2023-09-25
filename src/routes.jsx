import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import GlobalProvider from "./context/GlobalProvider";
import Charge from "./pages/Charge";
import Customer from "./pages/Customer";
import Details from "./pages/Details";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function ProtectedRoutes(redirectTo) {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/sign-in" replace />;
}

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-in" element={<SignIn />} />

      <Route
        element={
          <GlobalProvider>
            <ProtectedRoutes redirectTo={"/sign-in"} />
          </GlobalProvider>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/charge" element={<Charge />} />
        <Route path="/details" element={<Details />} />
      </Route>

      <Route path="/sign-up" element={<SignUp />} />

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default AllRoutes;
