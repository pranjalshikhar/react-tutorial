import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <h4>Order Confirmed! 🍕🍔</h4>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default OrderSummary;
