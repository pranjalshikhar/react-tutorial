import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <input type="search" placeholder="Search Product" />
      <div>
        <nav>
          <NavLink to="featured">Featured</NavLink>
          <NavLink to="new">New</NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
