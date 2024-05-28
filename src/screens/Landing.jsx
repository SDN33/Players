import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Présentation from "../components/Sections/Présentation";
import Features from "../components/Sections/Features";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import CookiePopup from "../components/Elements/Cookies"; // Importez le composant CookiePopup
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Présentation/>
      <Features />
      <Contact />
      <Footer />
      <CookiePopup />
    </>
  );
}
