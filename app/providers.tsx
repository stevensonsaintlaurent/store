"use client";

import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
