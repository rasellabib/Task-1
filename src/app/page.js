
"use client";

import FAQSection from "./components/FAQSection";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col space-y-[50px]">
      <FAQSection />
      <GetInTouch />
      <Footer />
    </div>
  );
}
