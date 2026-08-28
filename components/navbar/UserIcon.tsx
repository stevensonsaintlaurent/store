"use client";

import { useUser } from "@clerk/nextjs";
import { LuUser } from "react-icons/lu";

console.log("user");
const UserIcon = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <LuUser className="h-5 w-5" />;
  }

  if (!isSignedIn || !user) {
    return <LuUser className="h-5 w-5" />;
  }

  return (
    <div className="flex items-center gap-2">
      {user.imageUrl ? (
        <img
          src={user.imageUrl}
          alt={user.fullName || "User"}
          className="h-6 w-6 rounded-full object-cover"
        />
      ) : (
        <LuUser className="h-5 w-5" />
      )}
    </div>
  );
};

export default UserIcon;
