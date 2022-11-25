// import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NoMatch from "./Components/NoMatch";
import OrderSummary from "./Components/OrderSummary";
import Products from "./Components/Products";
import Featured from "./Components/Featured";
import New from "./Components/New";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";
import Admin from "./Components/Admin";
import Profile from "./Components/Profile";
import { AuthProvider } from "./Components/auth";
import Login from "./Components/Login";
import RequireAuth from "./Components/RequireAuth";

const LazyAbout = lazy(() => import("./Components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback="Loading...">
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
