import React, { Suspense } from "react";
import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CardButton from "./CardButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-wrap flex-col py-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo />

        <Suspense>
          <NavSearch />
        </Suspense>

        <div className="flex items-center gap-4">
          <CardButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
