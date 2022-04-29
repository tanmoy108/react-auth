import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
const Home = () => {
  let { user, logOut } = useUserAuth();
  console.log(user);

  const handleclick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <h1>Hello {user.email}</h1>
      <button onClick={handleclick}>Logout</button>
    </>
  );
};

export default Home;
