import Image from "next/image";
import Header from "../components/header";
import BgImage from "../../src/assets/background.jpg"
import Accueil from "@/components/accueil";
import About from "@/components/about";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Service from "@/components/service";
import WorkPlan from "@/components/workPlan";
import Contact from "@/components/contact";
import Product from "@/components/product";

export default function Home() {
  return (
    <div>
      <Header />
      <Accueil />
      <Features />
      <About/>
      <Service />
      <Product/>
      <WorkPlan />
      <Contact />
      <Footer />
    </div>

  );
}
