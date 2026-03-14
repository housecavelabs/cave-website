"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide global header/footer on the landing page
  const isLandingPage = pathname === "/cave-labs";

  return (
    <>
      {!isLandingPage && <Header />}
      {children}
      {!isLandingPage && <Footer />}
    </>
  );
}
