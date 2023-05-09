import { Description } from "@/components/Homepage/Description";
import { Hero } from "@/components/Homepage/Hero";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <Description />
    </div>
  );
}
