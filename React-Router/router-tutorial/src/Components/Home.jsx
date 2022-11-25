import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h4>Home Page</h4>
      <div>
        <button onClick={() => navigate("order-summary", { replace: true })}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Home;
