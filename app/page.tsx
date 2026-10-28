import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Countdown from "@/components/Countdown";
import Details from "@/components/Details";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Frame from "@/components/Frame";
import Hero from "@/components/Hero";
import Prizes from "@/components/Prizes";
import Timeline from "@/components/Timeline";

// Section order follows the descent: night sky (hero -> prizes), through the
// clouds (why join), into daylight (FAQ, contact) and down onto the grass.
export default function Home() {
  return (
    <Frame>
      <main>
        <Hero />
        <Countdown />
        <Details />
        <Timeline />
        <Prizes />
        <div className="cloud-gap" aria-hidden="true" />
        <Benefits />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </Frame>
  );
}
