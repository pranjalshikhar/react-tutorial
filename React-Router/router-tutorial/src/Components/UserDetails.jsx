import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  return <div>This is about user {userId} details!</div>;
};

export default UserDetails;
