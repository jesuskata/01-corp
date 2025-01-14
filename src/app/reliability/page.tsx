// Components
import Hero from "@/components/hero";
// Images
import reliabilityImage from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImage}
      imgAlt="welding"
      title="Super high reliability hosting"
    />
  );
}
