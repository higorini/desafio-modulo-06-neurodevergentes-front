import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Customer from "./pages/Customer";
import Details from "./pages/Details";

function ProtectedRoutes(redirectTo) {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/sign-in" replace />;
}

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-in" element={<SignIn />} />

      <Route element={<ProtectedRoutes redirectTo={"/sign-in"} />}>
        <Route path="/home" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/details" element={<Details />} />
      </Route>

      <Route path="/sign-up" element={<SignUp />} />

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default AllRoutes;
