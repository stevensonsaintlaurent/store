import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { VscCode } from "react-icons/vsc";

const Logo = () => {
  return (
    <Button
      size="icon"
      render={
        <Link href="/">
          <VscCode className="w-6 h-6" />
        </Link>
      }
    />
  );
};

export default Logo;
