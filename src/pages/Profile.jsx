import { Link, Outlet } from "react-router-dom";
 
const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <Link to="settings">Go to Settings</Link>
 
      <hr />
      <Outlet />
    </div>
  );
};
 
export default Profile;