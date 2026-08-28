"use client";

import React from "react";
import Link from "next/link";

import { buttonVariants } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 gap-24 lg:grid-cols-2">
      <div>
        <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          consequatur magnam iure repudiandae nihil cumque illum, repellat
          accusantium. Soluta eligendi necessitatibus consequatur amet excepturi
          architecto rem quam blanditiis eos alias, cum earum vitae impedit
          error debitis vero! Quibusdam, voluptatem eum.
        </p>

        <Link
          href="/products"
          className={`${buttonVariants({
            size: "lg",
          })} mt-10`}
        >
          Our Products
        </Link>
      </div>

      <HeroCarousel />
    </section>
  );
};

export default Hero;
