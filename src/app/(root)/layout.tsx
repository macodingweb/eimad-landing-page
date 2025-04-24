"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MainListItems } from "@/constants/navbar";
import { useState } from "react";

export default function RootLatout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [ isOpened, setIsOpened ] = useState(false);

  return <main className="min-h-[100vh]">
    <Navbar logo="/logos/logo-2.png" isOpened={isOpened} setIsOpened={setIsOpened} items={MainListItems} />
    { children }
    <Footer />
  </main>;
}
