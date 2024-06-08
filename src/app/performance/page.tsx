// Components
import Hero from "@/components/hero";
// Images
import performanceImage from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImage}
      imgAlt="welding"
      title="We serve high performance applications"
    />
  );
}
