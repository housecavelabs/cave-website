"use client";

import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide global header/footer on the landing page
  const isLandingPage = pathname === "/landingpage";

  return (
    <>
      {!isLandingPage && <Header />}
      {children}
      {!isLandingPage && <Footer />}
    </>
  );
}
