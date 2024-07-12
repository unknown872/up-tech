"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Accueil from "@/components/accueil";
import About from "@/components/about";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Service from "@/components/service";
import WorkPlan from "@/components/workPlan";
import Contact from "@/components/contact";
import Product from "@/components/product";
import loader from "@/assets/loader.png";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="">
          <Image src={loader} width={120} height={120} alt="Loading" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Accueil />
      <Features />
      <About />
      <Service />
      <Product />
      <WorkPlan />
      <Contact />
      <Footer />
    </div>

  );
}
