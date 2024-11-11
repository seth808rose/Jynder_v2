import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.svg";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 py-6 sm:px-8">
        <div className="logo-cntnnr">
          <Image src={Logo} alt="logo" className="logo" />
        </div>
      </header>
    </main>
  );
}
