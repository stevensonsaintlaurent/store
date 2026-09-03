import { Separator } from "@base-ui/react";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Sidebar from "./sales/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  // Not signed in
  if (!userId) {
    redirect("/");
  }

  // Admin check
  const adminUserId = process.env.ADMIN_USER_ID;

  if (!adminUserId || userId !== adminUserId) {
    redirect("/");
  }

  return (
    <>
      <h2 className="text-2xl pl-4">Dashboard</h2>

      <Separator className="mt-2" />

      <section className="grid lg:grid-cols-12 gap-12 mt-12">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>

        <div className="lg:col-span-10 px-4">{children}</div>
      </section>
    </>
  );
}
