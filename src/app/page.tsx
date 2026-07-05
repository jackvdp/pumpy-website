import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { LogoStrip } from "@/components/site/logo-strip";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { Work } from "@/components/site/work";
import { Stats } from "@/components/site/stats";
import { Marquee } from "@/components/site/marquee";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <Process />
        <Work />
        <Stats />
        <Marquee />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
