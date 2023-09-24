"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Pefile</h1>
      <hr />
      <p>Profile page</p>
      <hr />
      <button
        onClick={handleLogout}
        className="p-2 rounded bg-black text-orange-400"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
