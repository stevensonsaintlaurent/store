"use client";
import { SignOutButton } from "@clerk/nextjs";
// import { useToast } from "../ui/toast";
import { toast } from "../ui/toast";
import Link from "next/link";

const SignOutLink = () => {
  const handleLogount = () => {
    toast.add({ description: "Logout Successful" });
  };
  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogount}>
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
