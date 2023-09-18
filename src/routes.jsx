import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Customer from "./pages/Customer";

function ProtectedRoutes(redirectTo) {
  const token = true;

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

function AllRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>

      <Route element={<ProtectedRoutes redirectTo={"/sign-in"} />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="/customer" element={<Customer />} />

      <Route path="/sign-up" element={<SignUp />} />

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default AllRoutes;
