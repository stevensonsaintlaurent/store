"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import UserIcon from "./UserIcon";
import { SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import SignOutLink from "./SignOutLink";

function LinksDropdown() {
  const { userId } = useAuth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;
  const { isSignedIn } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" className="flex max-w-[100px] gap-4" />
        }
      >
        <LuAlignLeft className="h-6 w-6" />
        <UserIcon />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        {!isSignedIn ? (
          <>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button className="w-full text-left">Login</button>
              </SignInButton>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <button className="w-full text-left">Register</button>
              </SignUpButton>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            {links.map((link) => (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className="w-full capitalize">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <SignOutLink />
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
