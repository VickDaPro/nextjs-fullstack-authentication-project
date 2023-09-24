import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>User Profile</h1>
      <hr />
      <p className="text-4xl">
        User profile{" "}
        <span className="p-2 rounded bg-black text-orange-400">
          {params.id}
        </span>
      </p>
    </div>
  );
};

export default UserProfile;
